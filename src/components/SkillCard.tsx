import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all duration-300">
      <div 
        className="p-6 cursor-pointer flex justify-between items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <div className="mr-4 text-blue-600 dark:text-blue-400">
            {skill.icon}
          </div>
          <h3 className="text-xl font-semibold">{skill.name}</h3>
        </div>
        <div>
          {isExpanded ? (
            <ChevronUp className="text-gray-500 dark:text-gray-400" size={20} />
          ) : (
            <ChevronDown className="text-gray-500 dark:text-gray-400" size={20} />
          )}
        </div>
      </div>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 border-t border-gray-100 dark:border-gray-800">
          <ul className="space-y-2">
            {skill.items.map((item, index) => (
              <li key={index} className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-3"></div>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;