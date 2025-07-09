
import ProjectCard from './ProjectCard';
import { Briefcase, ShoppingCart, Trophy, CheckSquare, User } from 'lucide-react';

const ProjectGrid = ({ isVisible }: { isVisible: boolean }) => {
  const projects = [
    {
      title: 'Jobby App',
      description: 'Implemented Jobby App where users can log in and can see a list of jobs with search by Job title, filters based on Salary range and Employment type, etc (Username:rahul,Password:rahul@2021)',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
      tech: ['React JS', 'JavaScript', 'CSS', 'Bootstrap', 'Routing', 'REST API Calls', 'Local Storage', 'JWT Token'],
      liveUrl: 'https://satishjobbyapp.ccbp.tech/',
      githubUrl: '#',
      icon: Briefcase,
      category: 'Job Portal'
    },
    {
      title: 'E-commerce Application',
      description: 'Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc. (Username:rahul,Password:rahul@2021)',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tech: ['React JS', 'JavaScript', 'CSS', 'Bootstrap', 'Routing', 'REST API Calls', 'Local Storage', 'JWT Token'],
      liveUrl: 'http://ecommercesatish.ccbp.tech',
      githubUrl: '#',
      icon: ShoppingCart,
      category: 'E-Commerce'
    },
    {
      title: 'IPL Dashboard Application',
      description: 'Implemented IPL Dashboard app where users can list of ipl team, individual team details and respective team matches info.',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=600&fit=crop',
      tech: ['React JS', 'Routing', 'REST API Calls', 'CSS', 'Bootstrap'],
      liveUrl: 'http://ipldbappsatish.ccbp.tech',
      githubUrl: '#',
      icon: Trophy,
      category: 'Sports Dashboard'
    },
    {
      title: 'To Do List Application',
      description: 'Developed persistent todo application with CRUD operations to track list of tasks. Implemented todo crud operations using JavaScript event listeners and updated UI dynamically.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Local Storage', 'DOM Operations'],
      liveUrl: 'https://satishtodolist.ccbp.tech/',
      githubUrl: '#',
      icon: CheckSquare,
      category: 'Productivity'
    },
    {
      title: 'Portfolio',
      description: 'Personal portfolio website showcasing my projects, skills, and professional experience. Built with modern web technologies and responsive design.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tech: ['React JS', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      liveUrl: 'https://www.pskportfolio.ccbp.tech',
      githubUrl: '#',
      icon: User,
      category: 'Portfolio'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          index={index}
          isVisible={isVisible}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
