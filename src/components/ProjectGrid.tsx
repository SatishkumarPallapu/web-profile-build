
import ProjectCard from './ProjectCard';
import { Briefcase, ShoppingCart, BarChart3, CheckSquare, Search, MessageSquare, Bookmark } from 'lucide-react';

const ProjectGrid = ({ isVisible }: { isVisible: boolean }) => {
  const projects = [
    {
      title: 'Jobby App',
      description: 'Implemented Jobby App where users can log in and can see a list of jobs with search by Job title, filters based on Salary range and Employment type, etc (Username:rahul,Password:rahul@2021)',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
      tech: ['React JS', 'JavaScript', 'CSS', 'Bootstrap', 'Routing', 'REST API Calls', 'Local Storage', 'JWT Token', 'Authorization', 'Authentication'],
      liveUrl: 'https://satishjobbyapp.ccbp.tech/',
      icon: Briefcase,
      category: 'Job Portal',
      highlights: [
        'Implemented different pages like Login, Home, Jobs, Job item details using React components, props, state, lists, event handlers, form inputs.',
        'Authenticating by taking username, password and doing login post HTTP API Call.',
        'Persisted user login state by keeping jwt token in client storage, Sending it in headers of further API calls to authorize the user.',
        'Implemented different routes for Login, Home, Jobs, Job item details pages by using React Router components Route, Switch, Link.',
        'Implemented filters and search text by sending them as query parameters to jobs API calls.',
        'Redirecting to the login page if the user tries to open Home, Jobs, Job item details routes which need authentication by implementing protected Route.'
      ]
    },
    {
      title: 'E commerce Application',
      description: 'Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc. (Username:rahul,Password:rahul@2021)',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tech: ['React JS', 'JavaScript', 'CSS', 'Bootstrap', 'Routing', 'REST API Calls', 'Local Storage', 'JWT Token', 'Authorization', 'Authentication'],
      liveUrl: 'http://ecommercesatish.ccbp.tech',
      icon: ShoppingCart,
      category: 'E-Commerce',
      highlights: [
        'Implemented Different pages and routes for Login, Products, Product details using React Router components Route, Switch, Link, props, state, lists, event handlers, form inputs.',
        'Authenticating and authorizing users by taking username, password and doing login POST HTTP API Call and implementing filters by sending them as query parameters to product api calls.',
        'Persisted user login state by keeping jwt token in local storage, Sending it in headers of further api calls to authorize the user.'
      ]
    },
    {
      title: 'IPL Dashboard Application',
      description: 'Implemented IPL Dashboard app where users can list of ipl team, individual team details and respective team matches info.',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=600&fit=crop',
      tech: ['React JS', 'Routing', 'REST API Calls', 'CSS', 'Bootstrap'],
      liveUrl: 'http://ipldbappsatish.ccbp.tech',
      icon: BarChart3,
      category: 'Sports Dashboard',
      highlights: [
        'Implemented UI such as home dashboard, individual team info routes by using React Router library components like Route, Switch, Link, props, lists & keys.',
        'Fetched teams list from server asynchronously using fetch GET HTTP API call & individual team details, matches info by sending team id as path parameter.',
        'Implemented 404 not found page for invalid paths by keeping 404 Route as last route in the Switch component with * path.'
      ]
    },
    {
      title: 'To Do List Application',
      description: 'Developed persistent todo application with CRUD operations to the tracklist of tasks. The displayed list of todos with HTML list elements, styled todo list using CSS, Bootstrap. Implemented todo crud operations by using JavaScript event listeners and updated UI dynamically by using JavaScript DOM operations.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Local Storage', 'DOM Operations'],
      liveUrl: 'https://satishtodolist.ccbp.tech/',
      icon: CheckSquare,
      category: 'Productivity',
      highlights: [
        'Displayed list of todos with HTML list elements, styled todo list using CSS, Bootstrap',
        'Implemented todo crud operations by using JavaScript event listeners and updated UI dynamically by using JavaScript DOM operations.',
        'Used Arrays, Objects and their methods during todolist CRUD Operations, Persisted todo list state on page reloads using local storage methods.'
      ]
    },
    {
      title: 'Wiki Search Application',
      description: 'Developed custom Wikipedia search application where users can search and view curated results and can see detailed explanations in Wikipedia by clicking on the specific result',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
      tech: ['HTML', 'CSS', 'JavaScript', 'REST API Calls', 'Bootstrap'],
      liveUrl: 'https://satishwiksearch.ccbp.tech/',
      icon: Search,
      category: 'Search Application',
      highlights: [
        'Displayed list of search results with HTML list elements with hyperlink as url, styled list using CSS, Bootstrap and implemented responsiveness using Flex properties and CSS Box model.',
        'Fetched search results from server asynchronously using fetch GET HTTP API call. When a user clicks on a particular result, opens the website in a new tab by using the target attribute of the anchor tag in HTML.'
      ]
    },
    {
      title: 'Feedback Response Application',
      description: 'Developed application, which shows a list of three emojis images, When a user clicks on any one of the emoji, displays the thank you response.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'JSX', 'React.js', 'Git'],
      liveUrl: 'http://satishfeedback.ccbp.tech',
      icon: MessageSquare,
      category: 'Interactive App',
      highlights: [
        'Displayed the list of emojis using JSX list elements, Implemented the functionality using functions and class components, lists and keys, styled JSX lists using CSS and published into github.'
      ]
    },
    {
      title: 'Bookmark Maker',
      description: 'Developed bookmark maker where user can add a list of websites with custom names and can visit bookmarked website later by clicking on the specific website',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      liveUrl: 'https://satishbookmark.ccbp.tech/',
      icon: Bookmark,
      category: 'Utility App',
      highlights: [
        'Displayed list of bookmarks with HTML list elements with hyperlink as url, styled todo list using CSS, Bootstrap.',
        'Displayed a new bookmark dynamically in the UI by using JavaScript DOM operations when the user submitted the form with bookmark details.',
        'Implemented add bookmark functionality by using Form inputs, JavaScript event listeners and clicking on a particular bookmark opens the website in a new tab.'
      ]
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
