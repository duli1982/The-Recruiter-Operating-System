import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, items }) => {
  return (
    <div className="bg-[#2a2a2a] border border-gray-800 rounded-xl p-8 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-cyan-500/10">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="text-gray-400 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
             <span className="text-cyan-400 mr-2 mt-1">&#8226;</span>
             <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;
