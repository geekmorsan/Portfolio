
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
         <a href={link}><div className="relative border shadow-sm rounded-xl">
            <img
              className="w-full h-auto rounded-xl"
              src={image}
              alt={title}
            />
            <div className="absolute top-0 left-0 right-0">
              <div className="p-4 md:p-5">
                <h3 className="font-bold text-gray-800">
                {title}
                </h3>
                <p className="mt-1 text-base sm:text-lg md:text-xl text-gray-800">
                {text}
                </p>
              </div>
            </div>
          </div></a>
        );
      }


// CardsList component to render multiple cards
const CardList: React.FC = () => {
  // Example array of card data
  const cards: CardData[] = [
    {
      image: '/Images/graphic_design1200x700.png',
      title: 'Card 1',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      link: '#'
    },
    {
      image: '/Images/graphic_design1200x700.png',
      title: 'Card 2',
      text: 'Here is some more example text for the second card.',
      link: '#'
    },
    {
      image: '/Images/graphic_design1200x700.png',
      title: 'Card 3',
      text: 'Another example of text for a third card to make this a bit longer and detailed.',
      link: '#'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          text={card.text}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CardList;
