import React from 'react';

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
        <div className="absolute inset-0 opacity-85 group-hover:bg-gradient-to-r from-accent-1 to-accent-2"></div>
        <div className="absolute top-0 left-0 right-0">
          <div className="p-4 md:p-6">
            <div className="relative bg-button p-4 w-fit rounded-xl"><h3 className="font-bold text-type-1">{title}</h3></div>
            <p className="mt-1 text-base text-outline sm:text-lg md:text-xl text-gray-800">
              {text}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

// CardsList component to render multiple cards with offset layout
const CardList: React.FC = () => {
  // Example array of card data
  const cards: CardData[] = [
    {
      image: '/Images/UI1200x700.png',
      title: 'UI & UX Design',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      link: '#',
    },
    {
      image: '/Images/graphic_design1200x700.png',
      title: 'Graphic Design',
      text: 'Here is some more example text for the second card.',
      link: '#',
    },
    {
      image: '/Images/artwork1200x700.png',
      title: 'Artwork',
      text: 'Another example of text for a third card to make this a bit longer and detailed.',
      link: '#',
    },
    {
      image: '/Images/Additional1200x700.png',
      title: 'Additional',
      text: 'Some more details for the fourth card.',
      link: '#',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 sm:gap-x-10">
      <div className="space-y-10 sm:translate-y-16">
        {cards
          .filter((_, index) => index % 2 === 0)
          .map((card, index) => (
            <Card key={index} {...card} />
          ))}
      </div>
      <div className="space-y-10 mt-4 sm:-translate-y-16 sm:mt-0">
        {cards
          .filter((_, index) => index % 2 !== 0)
          .map((card, index) => (
            <Card key={index} {...card} />
          ))}
      </div>
    </div>
  );
};
export default CardList;
