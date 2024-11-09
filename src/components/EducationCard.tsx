import React from 'react';

interface EducationProps {
  institution: string;
  location: string;
  degree: string;
  duration: string;
}

const EducationCard = ({ institution, location, degree, duration }: EducationProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{institution}</h3>
          <p className="text-gray-600">{degree}</p>
        </div>
        <div className="text-right mt-2 sm:mt-0">
          <p className="text-gray-600">{location}</p>
          <p className="text-gray-500">{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;