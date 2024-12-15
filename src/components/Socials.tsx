import {FC, memo} from 'react';

import {socialLinks} from '../data/data';

const Socials: FC = memo(() => {
  return (
    <div className="flex items-center justify-center gap-x-4">
      {socialLinks.map(({label, Icon, href}) => (
        <a
          aria-label={label}
          className="flex items-center justify-center rounded-md p-2 text-white transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          href={href}
          key={label}
          rel="noopener noreferrer"
          target="_blank">
          <Icon className="h-6 w-6 fill-current" />
        </a>
      ))}
    </div>
  );
});

Socials.displayName = 'Socials';
export default Socials;