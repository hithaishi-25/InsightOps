import CardList from './components/CardList'; // Adjust the import path
import './index.css';

function App() {
  // Sample data for 6 cards
  const cardData = [
    {
      id: '1',
      image: 'https://via.placeholder.com/100?text=Card1',
      title: 'Card 1',
      number: 10,
    },
    {
      id: '2',
      image: 'https://via.placeholder.com/100?text=Card2',
      title: 'Card 2',
      number: 20,
    },
    {
      id: '3',
      image: 'https://via.placeholder.com/100?text=Card3',
      title: 'Card 3',
      number: 30,
    },
    {
      id: '4',
      image: 'https://via.placeholder.com/100?text=Card4',
      title: 'Card 4',
      number: 40,
    },
    {
      id: '5',
      image: 'https://via.placeholder.com/100?text=Card5',
      title: 'Card 5',
      number: 50,
    },
    {
      id: '6',
      image: 'https://via.placeholder.com/100?text=Card6',
      title: 'Card 6',
      number: 60,
    },
  ];

  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold text-blue-600">Hello, Tailwind!</h1>
      <CardList cards={cardData} />
    </div>
  );
}

export default App;