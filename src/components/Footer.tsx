import Socials from './Socials';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-margin sticky bottom-0 z-0">
      <Socials />
      <div className="text-foreground/50 flex items-center justify-between text-sm select-none">
        <p>{`© ${currentYear} MIT License`}</p>
        <p>
          powered by{' '}
          <a
            href="https://astro.build"
            target="blank"
            className="hover:text-accent"
            aria-label="astro site"
          >
            Astro
          </a>
          {` & `}
          <a
            href="https://ryze.pages.dev"
            className="hover:text-accent"
            aria-label="Ryze site"
          >
            Ryze
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
