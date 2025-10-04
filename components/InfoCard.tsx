import React from 'react';

interface InfoCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon, children }) => {
  return (
    <div className="bg-[#2a2a2a] border border-gray-700 rounded-2xl p-8 md:p-12 transition-all duration-300 hover:border-gray-500 hover:shadow-2xl hover:shadow-gray-900/50">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {icon && <div className="flex-shrink-0">{icon}</div>}
        <div className="flex flex-col w-full">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">{title}</h3>
          {children ? (
             <div className="text-gray-400 text-base md:text-lg leading-relaxed">{children}</div>
          ) : (
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
