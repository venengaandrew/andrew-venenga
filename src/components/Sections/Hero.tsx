import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useId} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

// Pre-render critical content
const CriticalHeading: FC<{name: string}> = memo(({name}) => {
  const headingId = useId();
  return (
    <div className="relative isolate">
      {/* Pre-rendered heading with minimal styles */}
      <h1 
        className="text-4xl font-bold text-white sm:text-5xl lg:text-5xl"
        id={headingId}
        suppressHydrationWarning
      >
        {name}
      </h1>
    </div>
  );
});
CriticalHeading.displayName = 'CriticalHeading';

// Separate non-critical content
const HeroContent: FC<{description: React.ReactNode; actions: typeof heroData.actions}> = memo(
  ({description, actions}) => (
    <div className="mt-6 opacity-0 animate-fadeIn">
      {description}
      <div className="mt-6">
        <Socials />
      </div>
      <div className="flex w-full justify-center gap-x-4 mt-6">
        {actions.map(({href, text, primary, Icon}) => (
          <a
            className={classNames(
              'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
              primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
            )}
            href={href}
            key={text}>
            {text}
            {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
          </a>
        ))}
      </div>
    </div>
  )
);
HeroContent.displayName = 'HeroContent';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center">
        <div className="absolute inset-0">
          <Image
            alt="Background"
            className="h-full w-full object-cover opacity-80"
            fill
            loading="eager"
            priority={false}
            quality={75}
            sizes="100vw"
            src={imageSrc}
          />
          <div className="absolute inset-0 bg-gray-900/30" />
        </div>

        <div className="z-10 w-full max-w-screen-lg px-4 lg:px-0">
          <div 
            className="mx-auto max-w-3xl rounded-xl bg-gray-800/40 p-6 text-center backdrop-blur-sm"
            style={{
              transform: 'translateZ(0)',
              willChange: 'transform',
            }}
          >
            <CriticalHeading name={name} />
            <HeroContent actions={actions} description={description} />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-6 flex justify-center opacity-0 animate-fadeIn">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;