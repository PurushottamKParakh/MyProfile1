import React from 'react';

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Section = ({ title, icon, children }: SectionProps) => {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <div className="text-blue-600">{icon}</div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default Section;