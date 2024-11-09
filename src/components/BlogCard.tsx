import React from 'react';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
}

const BlogCard = ({ title, description, date, readTime, link }: BlogPost) => {
  return (
    <a 
      href={link}
      className="block bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
    >
      <article>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div className="text-sm text-gray-500">{date}</div>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-sm text-gray-500">{readTime} min read</div>
      </article>
    </a>
  );
};

export default BlogCard;