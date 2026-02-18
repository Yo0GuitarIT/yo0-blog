import { useEffect, useState } from 'react';

// 導航列表
const navigationList = [
  {
    name: 'archive',
    href: '/archive/1' // 載入第一頁的文章列表
  },
  {
    name: 'tags',
    href: '/tags'
  }
];

const Navigation = ({ pathName }: { pathName: string }) => {
  return (
    <nav className="flex items-center justify-center gap-4">
      {navigationList.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={`navigation animation ${pathName.startsWith(item.href) ? 'text-accent' : ''}`}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
