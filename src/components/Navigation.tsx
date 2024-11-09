import React from 'react';
import { Link } from './Link';

const Navigation = () => {
  const tabs = [
    { name: 'Experience', href: '#experience' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'From the First Principles', href: '#principles' },
    { name: 'Papershelf', href: '#papers' },
    { name: 'Courses', href: '#courses' },
    { name: 'Talks', href: '#talks' },
    { name: 'Collaborate', href: '#collaborate' }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.href}
              className="inline-flex items-center px-4 py-3 border-b-2 text-sm font-medium whitespace-nowrap"
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;