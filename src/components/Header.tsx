import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';
import IconRss from '../assets/icons/rss.svg?react';
import { useEffect, useState } from 'react';

const Header = () => {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <header className="header-margin sticky top-0 z-0 flex items-center justify-between">
      <a
        href="/"
        className={`text-xl tracking-wider select-none ${pathname === '/' ? 'text-accent' : ''}`}
      >
        Yo0's Blog
      </a>
      <div className="flex items-center justify-center gap-6">
        <Navigation pathName={pathname} />

        <div className="flex items-center justify-center gap-4">
          <ThemeToggle />
          <a href="/rss.xml" aria-label="rss" title="rss">
            <IconRss className="active-foreground size-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
