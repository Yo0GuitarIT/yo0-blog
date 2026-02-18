import IconGithub from '../assets/icons/brand-github.svg?react';
import IconYoutube from '../assets/icons/brand-youtube.svg?react';
import IconLinkedin from '../assets/icons/brand-linkedin.svg?react';
import IconDiscord from '../assets/icons/brand-discord.svg?react';
import IconTwitter from '../assets/icons/brand-x.svg?react';

const socials = [
  {
    name: 'github',
    href: 'http:s://github.com/',
    icon: IconGithub
  },
  {
    name: 'youtube',
    href: 'https://youtube.com/',
    icon: IconYoutube
  },
  {
    name: 'linkedin',
    href: 'https://in.linkedin.com',
    icon: IconLinkedin
  },
  {
    name: 'discord',
    href: 'https://discord.com',
    icon: IconDiscord
  },
  {
    name: 'twitter',
    href: 'https://twitter.com',
    icon: IconTwitter
  }
];

const Socials = () => {
  return (
    <div className="flex items-center justify-center space-x-6 pb-8">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="blank"
          aria-label={social.name}
        >
          <social.icon className="socials" />
        </a>
      ))}
    </div>
  );
};

export default Socials;
