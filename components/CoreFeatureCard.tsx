import React from 'react';
import { ArrowRightIcon } from './Icons';

type ButtonColor = 'white' | 'coral' | 'purple' | 'green';

interface CoreFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonColor: ButtonColor;
  onClick?: () => void;
}

const getButtonClasses = (color: ButtonColor): string => {
  const baseClasses = "flex items-center justify-center gap-2 px-4 py-2 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md";
  switch (color) {
    case 'white':
      return `${baseClasses} bg-white text-black hover:bg-gray-200`;
    case 'coral':
      return `${baseClasses} bg-rose-500 text-white hover:bg-rose-400 shadow-rose-500/30`;
    case 'purple':
      return `${baseClasses} bg-purple-600 text-white hover:bg-purple-500 shadow-purple-600/30`;
    case 'green':
      return `${baseClasses} bg-emerald-500 text-white hover:bg-emerald-400 shadow-emerald-500/30`;
    default:
      return `${baseClasses} bg-white text-black hover:bg-gray-200`;
  }
};

const CoreFeatureCard: React.FC<CoreFeatureCardProps> = ({ icon, title, description, buttonColor, onClick }) => {
  return (
    <div className="bg-[#2a2a2a] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-gray-600 hover:shadow-2xl hover:shadow-gray-900/50">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0 bg-gray-800 p-3 rounded-full">
          {icon}
        </div>
        <div className="flex-grow text-center md:text-left">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <div className="flex-shrink-0 mt-4 md:mt-0">
          <button className={`${getButtonClasses(buttonColor)} group`} onClick={onClick}>
            <span>Explore</span>
            <ArrowRightIcon className="w-4 h-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatureCard;