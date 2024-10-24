import React from 'react';
import { cardData } from './cardData';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

// Define the type for card data
type CardData = {
  image: string;
  title: string;
  text: string;
  link: string;
};

// Card component
const Card: React.FC<CardData> = ({ image, title, text, link }) => {
  return (
    <a href={link} className="block group">
      <div className="relative dark:border border-button shadow-md dark:shadow-gray-900 shadow-button-hue rounded-xl overflow-hidden">
        <img className="w-full h-auto rounded-xl" src={image} alt={title} />
        <div className="absolute bg-slate-900/30 inset-0 opacity-85 group-hover:bg-gradient-to-r from-accent-1 to-accent-2"></div>
        <div className="absolute top-0 left-0 right-0">
          <div className="p-3 space-y-3 sm:p-4">
            <div className="relative flex items-center bg-accent-1-dark px-2.5 pt-1 pb-1.5 w-fit rounded-xl"><span className="font-semibold text-lg sm:text-2xl text-outline">{title}</span></div>
            <p className="mt-1 px-1 lg:px-2 text-base text-gray-100 sm:leading-tight sm:text-lg">
              {text}
            </p>
          </div>
        </div>
        <div className='absolute hidden right-0 px-6 py-4 lg:inset-x-0 bottom-0 lg:p-14 group-hover:block'>
            <div className='text-xl flex justify-end gap-2 items-center md:text-2xl text-center'>Show project<ChevronRightIcon className='stroke-1 size-6 md:size-10'h-4/>
            </div>
        </div>
      </div>
    </a>
  );
};

// CardsList component to render multiple cards with offset layout
const CardList: React.FC = () => {
  // Example array of card data

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-10">
      <div className="space-y-6 lg:space-y-10 md:translate-y-16">
        {cardData
          .filter((_, index) => index % 2 === 0)
          .map((card, index) => (
            <Card key={index} {...card} />
          ))}
      </div>
      <div className="space-y-6 lg:space-y-10 mt-6 md:-translate-y-16 md:mt-0">
        {cardData
          .filter((_, index) => index % 2 !== 0)
          .map((card, index) => (
            <Card key={index} {...card} />
          ))}
      </div>
    </div>
  );
};
export default CardList;
