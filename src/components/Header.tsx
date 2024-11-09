import React from 'react';
import { Link } from './Link';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const links = [
    { name: 'Blogs', href: '#blogs' },
    { name: 'From the First Principles', href: '#principles' },
    { name: 'Papershelf', href: '#papers' },
    { name: 'Courses', href: '#courses' },
    { name: 'Talks', href: '#talks' },
    { name: 'Collaborate', href: '#collaborate' }
  ];

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Purushottam Dewangan</h1>
          </div>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex space-x-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;