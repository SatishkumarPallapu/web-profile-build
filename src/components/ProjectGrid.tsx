
import ProjectCard from './ProjectCard';
import { Briefcase, ShoppingCart, BarChart3, CheckSquare } from 'lucide-react';

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
      title: 'E commerce Application',
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
      icon: BarChart3,
      category: 'Sports Dashboard'
    },
    {
      title: 'To Do List Application',
      description: 'Developed persistent todo application with CRUD operations to the tracklist of tasks. The displayed list of todos with HTML list elements, styled todo list using CSS, Bootstrap. Implemented todo crud operations by using JavaScript event listeners and updated UI dynamically by using JavaScript DOM operations.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Local Storage', 'DOM Operations'],
      liveUrl: 'https://satishtodolist.ccbp.tech/',
      githubUrl: '#',
      icon: CheckSquare,
      category: 'Productivity'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
