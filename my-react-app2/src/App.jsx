import { useState, useEffect } from 'react';
import CardList from './components/CardList';
import './index.css';
import { BriefcaseIcon, FolderIcon, UsersIcon } from '@heroicons/react/24/solid';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Mock API response (replace with actual API fetch when available)
        const mockApiResponse = {
          totalProjects: 5, // Total Projects (V2): 5
          totalRepositories: 12, // Total Repositories: 12
          activeUsers: 6, // Active Users: 6
        };

        // Map the API response to card data
        const data = [
          { title: 'Projects', number: mockApiResponse.totalProjects, icon: BriefcaseIcon, color: 'bg-red-500' },
          { title: 'Repos', number: mockApiResponse.totalRepositories, icon: FolderIcon, color: 'bg-blue-500' },
          { title: 'Users', number: mockApiResponse.activeUsers, icon: UsersIcon, color: 'bg-red-500' },
        ];

        // Add unique IDs to each card
        const dataWithIds = data.map((card) => ({
          ...card,
          id: uuidv4(),
        }));

        setCardData(dataWithIds);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Runs once on mount

  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold text-blue-600">Hello, Tailwind!</h1>
      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">Error: {error}</p>}
      {!loading && !error && <CardList cards={cardData} />}
    </div>
  );
}

export default App;