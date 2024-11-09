import React from 'react';

interface ExperienceProps {
  company: string;
  location: string;
  position: string;
  duration: string;
  achievements: Array<{
    description: string;
    technologies: string;
  }>;
}

const ExperienceCard = ({ company, location, position, duration, achievements }: ExperienceProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{company}</h3>
          <p className="text-gray-600">{position}</p>
        </div>
        <div className="text-right mt-2 sm:mt-0">
          <p className="text-gray-600">{location}</p>
          <p className="text-gray-500">{duration}</p>
        </div>
      </div>
      <ul className="space-y-4">
        {achievements.map((achievement, index) => (
          <li key={index}>
            <p className="text-gray-800 mb-1">{achievement.description}</p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Technologies:</span> {achievement.technologies}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;