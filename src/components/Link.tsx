import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link = ({ href, children, className = '' }: LinkProps) => {
  const baseStyles = 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700';
  const activeStyles = 'border-blue-500 text-blue-600';

  const isActive = href === window.location.hash;
  const styles = `${className} ${isActive ? activeStyles : baseStyles}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    window.location.hash = href;
  };

  return (
    <a href={href} onClick={handleClick} className={styles}>
      {children}
    </a>
  );
};