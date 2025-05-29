import CardList from './components/CardList'; // Adjust the import path
import './index.css';
// import { UsersIcon, FolderIcon, DocumentIcon } from '@heroicons/react/24/solid';
function App() {
  
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
  ];

  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold text-blue-600">Hello, Tailwind!</h1>
      <CardList cards={cardData} />
    </div>
  );
}

export default App;