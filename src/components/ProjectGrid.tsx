
import ProjectCard from './ProjectCard';
import { ShoppingCart, Briefcase, Play, BarChart3, Users, GamepadIcon, Music } from 'lucide-react';

const ProjectGrid = ({ isVisible }: { isVisible: boolean }) => {
  const projects = [
    {
      title: 'Nxt Trendz (ECommerce Clone - Amazon, Flipkart)',
      description: 'Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc. Features authentication, authorization, JWT tokens and protected routes.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tech: ['React JS', 'JavaScript', 'CSS', 'Bootstrap', 'REST API', 'JWT Token', 'Local Storage'],
      liveUrl: 'https://nxttrendz.ccbp.tech/',
      githubUrl: 'https://github.com/satish-pallapu/nxt-trendz',
      icon: ShoppingCart,
      category: 'E-Commerce'
    },
    {
      title: 'Jobby App',
      description: 'Implemented Jobby App where users can log in and can see a list of jobs with search by Job title, filters based on Salary range and Employment type. Features authentication, protected routes and JWT token management.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
      tech: ['React JS', 'JavaScript', 'CSS', 'Bootstrap', 'React Router', 'JWT Token', 'REST API'],
      liveUrl: 'https://jobbyapp.ccbp.tech/',
      githubUrl: 'https://github.com/satish-pallapu/jobby-app',
      icon: Briefcase,
      category: 'Job Portal'
    },
    {
      title: 'Nxt Watch (YouTube Clone)',
      description: 'Implemented Nxt Watch application which is a clone for YouTube where users can log in and can see a list of videos like Trending, Gaming, Saved videos, search videos and toggle theme (Light/Dark).',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tech: ['React JS', 'JavaScript', 'CSS', 'Bootstrap', 'React Router', 'JWT Token', 'Theme Toggle'],
      liveUrl: 'https://nxtwatch.ccbp.tech/',
      githubUrl: 'https://github.com/satish-pallapu/nxt-watch',
      icon: Play,
      category: 'Video Streaming'
    },
    {
      title: 'Movies App (Netflix/Amazon Prime Clone)',
      description: 'Implemented responsive OTT platform app like Netflix/Amazon Clone where users can see movies like popular, trending, top-rated, search movies and view specific movie details using TMDb APIs.',
      image: 'https://images.unsplash.com/photo-1489599763634-a2c3c6e7a3f5?w=800&h=600&fit=crop',
      tech: ['React JS', 'JavaScript', 'CSS', 'Bootstrap', 'React Slick', 'TMDb API', 'Figma'],
      liveUrl: 'https://moviesapp.ccbp.tech/',
      githubUrl: 'https://github.com/satish-pallapu/movies-app',
      icon: Play,
      category: 'Entertainment'
    },
    {
      title: 'COVID-19 Dashboard',
      description: 'Implemented responsive Covid Dashboard where users can see confirmed, active, recovered and deceased cases in India state wise with search functionality and interactive charts using Recharts.',
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&h=600&fit=crop',
      tech: ['React JS', 'JavaScript', 'CSS', 'Recharts', 'React Router', 'COVID19 API', 'Figma'],
      liveUrl: 'https://covid19dashboard.ccbp.tech/',
      githubUrl: 'https://github.com/satish-pallapu/covid-dashboard',
      icon: BarChart3,
      category: 'Data Visualization'
    },
    {
      title: 'Tasty Kitchens (Swiggy/Zomato Clone)',
      description: 'Implemented responsive Online Food Ordering System like Swiggy/Zomato where users can see popular restaurants with sort by rating, specific restaurant details, adding food items to cart and payments.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
      tech: ['React JS', 'JavaScript', 'CSS', 'Bootstrap', 'React Slick', 'REST API', 'Figma'],
      liveUrl: 'https://tastykitchens.ccbp.tech/',
      githubUrl: 'https://github.com/satish-pallapu/tasty-kitchens',
      icon: ShoppingCart,
      category: 'Food Delivery'
    },
    {
      title: 'Spotify Remix (Spotify Clone)',
      description: 'Implemented responsive music streaming app like Spotify Clone where users can see featured playlists, categories, new releases, specific playlist details and can play songs using Spotify Developer APIs.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
      tech: ['React JS', 'JavaScript', 'CSS', 'Bootstrap', 'Spotify API', 'HTML Audio', 'Figma'],
      liveUrl: 'https://spotifyremix.ccbp.tech/',
      githubUrl: 'https://github.com/satish-pallapu/spotify-remix',
      icon: Music,
      category: 'Music Streaming'
    },
    {
      title: 'Mini Games (Collection of Memory Games)',
      description: 'Implemented responsive Mini Games app with collection of memory games like Emoji Game, Rock Paper Scissors, Memory Matrix, and Card Flip Game with rules modal and progress tracking.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
      tech: ['React JS', 'JavaScript', 'CSS', 'Bootstrap', 'React Modal', 'React Progress', 'Figma'],
      liveUrl: 'https://minigames.ccbp.tech/',
      githubUrl: 'https://github.com/satish-pallapu/mini-games',
      icon: GamepadIcon,
      category: 'Gaming'
    },
    {
      title: 'Task Manager (Trello Clone)',
      description: 'Implemented responsive Task manager app like Trello Clone where users can log in and see list of boards, collection of Lists in specific board, and list of tasks with drag and drop functionality.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      tech: ['React JS', 'JavaScript', 'CSS', 'Bootstrap', 'React Beautiful DND', 'Trello API', 'React Modal'],
      liveUrl: 'https://taskmanager.ccbp.tech/',
      githubUrl: 'https://github.com/satish-pallapu/task-manager',
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
