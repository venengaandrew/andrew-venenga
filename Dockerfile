# Builder stage
FROM node:22-trixie AS builder
WORKDIR /app

# Install build-time dependencies (sharp, native modules)
RUN apt-get update \
  && apt-get install -y python3 build-essential pkg-config libvips-dev --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

# Enable corepack and use yarn (project uses Yarn v1 lockfile)
RUN corepack enable && corepack prepare yarn@1.22.19 --activate

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source and build
COPY . .
RUN yarn build

### Production image
FROM node:22-trixie-slim AS runner
WORKDIR /app

# Runtime deps required by sharp (libvips)
RUN apt-get update \
  && apt-get install -y libvips-dev --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production

# Copy only what we need from the builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock

# Use yarn to install only production deps
RUN corepack enable && corepack prepare yarn@1.22.19 --activate
RUN yarn install --production --frozen-lockfile --ignore-scripts

EXPOSE 3000

CMD ["yarn", "start"]
