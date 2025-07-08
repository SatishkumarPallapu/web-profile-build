
import ProjectCard from './ProjectCard';
import { ShoppingCart, Briefcase, Play, BarChart3, Users, GamepadIcon, Music } from 'lucide-react';

const ProjectGrid = ({ isVisible }: { isVisible: boolean }) => {
  const projects = [
    {
      title: 'Nxt Trendz (ECommerce Clone)',
      description: 'A comprehensive eCommerce platform clone of Amazon/Flipkart with user authentication, product listings, search functionality, filters, and sorting. Features secure login, JWT token management, and protected routes.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tech: ['React.js', 'JavaScript', 'CSS', 'Bootstrap', 'REST APIs', 'JWT', 'Local Storage'],
      liveUrl: '#',
      githubUrl: '#',
      icon: ShoppingCart,
      category: 'E-Commerce'
    },
    {
      title: 'Jobby App',
      description: 'Job search platform with user authentication, job listings with advanced search and filtering by salary range and employment type. Includes detailed job views and protected routing for authenticated users.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
      tech: ['React.js', 'JavaScript', 'CSS', 'Bootstrap', 'React Router', 'JWT', 'REST APIs'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Briefcase,
      category: 'Job Portal'
    },
    {
      title: 'Nxt Watch (YouTube Clone)',
      description: 'Video streaming platform clone with features like trending videos, gaming content, saved videos, search functionality, and theme toggle (Light/Dark). Includes user authentication and protected routes.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tech: ['React.js', 'JavaScript', 'CSS', 'Bootstrap', 'React Router', 'JWT', 'Theme Toggle'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Play,
      category: 'Video Streaming'
    },
    {
      title: 'Movies App (Netflix Clone)',
      description: 'OTT platform clone with popular, trending, and top-rated movies. Features horizontal scrolling, movie search, detailed movie views, and TMDb API integration for rich movie database.',
      image: 'https://images.unsplash.com/photo-1489599763634-a2c3c6e7a3f5?w=800&h=600&fit=crop',
      tech: ['React.js', 'JavaScript', 'CSS', 'Bootstrap', 'React Slick', 'TMDb API', 'Figma'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Play,
      category: 'Entertainment'
    },
    {
      title: 'COVID-19 Dashboard',
      description: 'Responsive dashboard displaying COVID-19 statistics across Indian states with search functionality, interactive charts (bar and line charts), and state-specific detailed information using Recharts.',
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&h=600&fit=crop',
      tech: ['React.js', 'JavaScript', 'CSS', 'Recharts', 'React Router', 'COVID19 API', 'Figma'],
      liveUrl: '#',
      githubUrl: '#',
      icon: BarChart3,
      category: 'Data Visualization'
    },
    {
      title: 'Tasty Kitchens (Swiggy Clone)',
      description: 'Online food ordering platform with restaurant listings, sorting by ratings, detailed restaurant views, shopping cart functionality, and payment integration. Features carousel images and responsive design.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
      tech: ['React.js', 'JavaScript', 'CSS', 'Bootstrap', 'React Slick', 'REST APIs', 'Figma'],
      liveUrl: '#',
      githubUrl: '#',
      icon: ShoppingCart,
      category: 'Food Delivery'
    },
    {
      title: 'Spotify Remix',
      description: 'Music streaming platform with featured playlists, categories, new releases, and audio playback functionality. Integrated with Spotify Developer APIs for authentic music experience.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
      tech: ['React.js', 'JavaScript', 'CSS', 'Bootstrap', 'Spotify API', 'HTML Audio', 'Figma'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Music,
      category: 'Music Streaming'
    },
    {
      title: 'Mini Games Collection',
      description: 'Collection of memory games including Emoji Game, Rock Paper Scissors, Memory Matrix, and Card Flip Game. Features game rules modals, progress tracking, and responsive gaming experience.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
      tech: ['React.js', 'JavaScript', 'CSS', 'Bootstrap', 'React Modal', 'React Progress', 'Figma'],
      liveUrl: '#',
      githubUrl: '#',
      icon: GamepadIcon,
      category: 'Gaming'
    },
    {
      title: 'Task Manager (Trello Clone)',
      description: 'Project management tool with drag-and-drop functionality, board management, task organization, and Trello API integration. Features responsive design and collaborative workflow management.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      tech: ['React.js', 'JavaScript', 'CSS', 'Bootstrap', 'React Beautiful DND', 'Trello API', 'React Modal'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Users,
      category: 'Productivity'
    }
  ];

  console.log('ProjectGrid rendering with', projects.length, 'projects, isVisible:', isVisible);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 stagger-animation">
      {projects.map((project, index) => {
        console.log('Rendering project:', project.title, 'at index:', index);
        return (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            isVisible={isVisible}
          />
        );
      })}
    </div>
  );
};

export default ProjectGrid;
