This project is a Next.js app. These instructions show how to build and run the production build using Docker and Docker Compose.

Build and run (one-shot):

```powershell
# Build image and start container
docker compose up --build -d

# Follow logs
docker compose logs -f

# Stop
docker compose down
```

Notes:
- The Dockerfile uses a multi-stage build: a full builder (with build dependencies) and a slim runtime image.
- The image exposes port 3000 which is mapped to the host by docker-compose.
- If you use a different package manager or lockfile, adjust the Dockerfile accordingly.
