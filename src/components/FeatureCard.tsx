import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20
                    hover:bg-white/20 transition-all duration-300 group">
      <div className="bg-white/10 rounded-full p-3 w-fit mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="opacity-80">{description}</p>
    </div>
  );
};

export default FeatureCard;