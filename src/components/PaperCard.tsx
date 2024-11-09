import React from 'react';
import { FileText } from 'lucide-react';

interface Paper {
  title: string;
  authors: string[];
  conference: string;
  year: string;
  link: string;
}

const PaperCard = ({ title, authors, conference, year, link }: Paper) => {
  return (
    <a 
      href={link}
      className="block bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex gap-4">
        <div className="text-blue-600">
          <FileText size={24} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-1">{authors.join(', ')}</p>
          <p className="text-sm text-gray-500">{conference}, {year}</p>
        </div>
      </div>
    </a>
  );
};

export default PaperCard;