import Card from './Card'
import '../index.css'
function CardTemplate() {
  // Sample data for 7 cards (replace with your GitHub data)
  const cardData = [
    {
      image: 'https://cdn.iconscout.com/icon/free/png-256/free-git-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-225996.png?f=webp&w=256',
      title: 'Sprint Planning',
      number: 2, // e.g., number of repositories
    },
    {
      image: 'https://via.placeholder.com/150?text=Project+2',
      title: 'Roadmap 2025',
      number: 0,
    },
    {
      image: 'https://via.placeholder.com/150?text=Repo+1',
      title: 'repo1',
      number: 10, // e.g., number of contributors
    },
    {
      image: 'https://via.placeholder.com/150?text=Repo+2',
      title: 'repo2',
      number: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        DevOpsRealPage Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            number={card.number}
          />
        ))}
      </div>
    </div>
  );
}

export default CardTemplate;