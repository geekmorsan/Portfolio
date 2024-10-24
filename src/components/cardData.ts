// cardData.ts

// Define the type for card data
export type CardData = {
  image: string;
  title: string;
  text: string;
  link: string;
};

// Example array of card data
export const cardData: CardData[] = [
  {
    image: '/Images/UI1200x700.png',
    title: 'UI & UX Design',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    link: '/posts/post-1/',
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
