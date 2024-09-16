import React from 'react';
import achievementImage from '../assets/achievements.png'; // Update the path to the correct one

const AchievementSection = () => {
  return (
    <section className="bg-white mt-16 sm:mt-20 lg:mt-28 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <img 
            src={achievementImage} 
            alt="Achievements" 
            className="w-full sm:w-3/4 lg:w-full h-auto object-cover" 
          />
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
