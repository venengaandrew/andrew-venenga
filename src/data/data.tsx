import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import LazyLoad from 'react-lazyload';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.svg';
//import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Andrew Venenga',
  description: "Andrew Venenga's React Resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */

export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Andrew Venenga.`,
  description: (
    <>
      <LazyLoad height={200}>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          Welcome! This is the beginning to my website resume! TODO: Add more projects
        </p>
      </LazyLoad>
      <LazyLoad height={200}>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          I'm an Iowa based <strong className="text-stone-100">System's Administrator</strong> and{' '}
          <strong className="text-stone-100">Software Developer</strong>.
        </p>
      </LazyLoad>
      <LazyLoad height={200}>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          I am currently working at{' '}
          <strong className="text-stone-100">Aelieve Digital Marketing</strong> as the Director of IT, running Aelieve's
          MSP Division, client's websites, automatons and databases.
        </p>
      </LazyLoad>
    </>
  ),
  actions: [
    {
      href: '../assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Self taught developer with a passion for learning new technologies and building useful products.
  I have a strong background in systems administration and software development. I am currently working as the Director of IT Operations at Aelieve Digital Marketing,
  where I am responsible for the development and maintenance of Aelieve's on-premise digital marketing platform and DevOps process.
  I am also responsible for the maintenance and onboarding of new customers to the platform.
  I am a strong believer in the power of open source software and have contributed to a number of projects over the years.
  I am always looking for new opportunities to learn and grow as a developer.`,
  aboutItems: [
    {label: 'Location', text: 'Washington, IA', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American / German', Icon: FlagIcon},
    {label: 'Interests', text: 'PC Building, Live Streaming, Motorcycles, Hiking', Icon: SparklesIcon},
    {label: 'Study', text: 'Indian Hills Community College, Ottumwa, IA', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Aelieve Digital Marketing', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Systems Administration',
    skills: [
      {
        name: 'Windows',
        level: 10,
      },
      {
        name: 'Linux',
        level: 10,
      },
      {
        name: 'Azure',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Vue.js',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  // {
  //   title: 'Web Crawler',
  //   description: 'C# Web Crawler designed to scrape google maps data for specific industries and locations.',
  //   url: 'https://github.com/venengaandrew/Web-Crawler',
  //   image: porfolioImage1,
  // },
  {
    title: 'Live Streaming Website',
    description: 'Live Streaming site built with React and Node.js, this is a work in progress and not yet completed.',
    url: 'https://github.com/venengaandrew/drewvpopc-live',
    image: porfolioImage2,
  },
  // {
  //   title: 'Project title 3',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage3,
  // },
  // {
  //   title: 'Project title 4',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage4,
  // },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2019',
    location: 'Indian Hills Community College',
    title: 'Software Development',
    content: (
      <p>
        During my time at Indian Hills Community College, I got a solid education in modern programming languages and
        how to use them for web, mobile, and database development. I've learned languages such as Python, Java,
        JavaScript, and Swift, which helped me write efficient code and solve problems. I have created websites for
        clients that are optimized well with a professional design, and diving into making apps for both Android and
        iOS, gave me practical skills. I also learned how to work with databases effectively using SQL. Through working
        on group projects, I improved my teamwork and communication, and I built up a portfolio that showcases what I
        can do. All in all, this experience set me up with strong skills for a successful career in the tech world.
      </p>
    ),
  },
  {
    date: 'August 2017',
    location: 'Kirkwood Community College | Dual Enrollment, Washington High School',
    title: 'General Computers and Networking',
    content: (
      <p>
        During my time at Kirkwood Community College, I got a solid education in general computers and networking. This
        was a dual enrollment program through Washington High School, where I was able to get a head start on my college
        education. I refined my knowledge of computers and networking, and learned how to use them in a business
        environment, instead of just in my own lab at home. This also kickstarted my desire to advance my Home Lab, and
        learn more about the IT field.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2022 - Present',
    location: 'Aelieve Digital Markgeting',
    title: 'Director of IT Operations',
    content: (
      <p>
        Empowering small to midsized organizations to leverage technology in the evolution of their digital brand and
        marketing strategy. Developed, designed and delivered the Aelieve on-premise digital marketing platform and
        DevOps process to support the customer’s digital transformation. Led team to maintain and onboard new customers
        delivering the highest level of customer service while catering to their individual needs and customizations.

        As IT Director, I would maintain and innovate on Aelieve's webserver hosting on various VPS platforms. This would
        also include maintaining wordpress instances. Depending on the client, we would also have custom PHP pluggins. Most 
        custom pluggins during my time, was developed and maintained by myself.
        I have additionally completed many internal software development projects
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Carolyn Simon, SHRM-CP | Former HR Manager at Aelieve Digital Marketing',
      text: 'Overall, Andrew is a dedicated and hardworking professional who is committed to delivering exceptional results. His ability to problem solve, handle a new business, multitask, and his passion for his work make him a valuable asset to any team. I wholeheartedly recommend him for any role in IT operations or data anlysis.',
      image:
        'https://ijjzlsyfrxnrmjtxsvvj.supabase.co/storage/v1/object/public/andrew-venenga/carolyn-linkedin.jpeg?t=2024-06-30T00%3A26%3A15.364Z',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Use this form to get in touch!',
  items: [
    {
      type: ContactType.Email,
      text: 'andrew@venenga.net',
      href: 'mailto:andrew@venenga.net',
    },
    {
      type: ContactType.Location,
      text: 'Washington, Iowa',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Github,
      text: 'venengaandrew',
      href: 'https://github.com/venengaandrew',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/venengaandrew'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/venengaandrew/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/venengaandrew'},
];
