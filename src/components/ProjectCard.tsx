
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideProps } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tech: string[];
    liveUrl: string;
    githubUrl: string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    category: string;
  };
  index: number;
  isVisible: boolean;
}

const ProjectCard = ({ project, index, isVisible }: ProjectCardProps) => {
  const IconComponent = project.icon;

  return (
    <Card 
      className="group hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white/90 backdrop-blur-sm opacity-100 animate-scale-in" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
          <span className="bg-white/90 backdrop-blur-sm text-purple-600 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
            {project.category}
          </span>
        </div>

        {/* Project Icon */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
            <IconComponent size={16} className="sm:w-5 sm:h-5 text-purple-600" />
          </div>
        </div>

        {/* Action Button */}
        <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-2 rounded-full shadow-lg">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} className="sm:w-4 sm:h-4" />
            </a>
          </Button>
        </div>
      </div>
      
      <CardContent className="p-3 sm:p-4 lg:p-6">
        <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
          {project.tech.slice(0, 4).map((tech, techIndex) => (
            <span
              key={tech}
              className="px-2 sm:px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        {/* Project Link */}
        <div className="flex justify-center">
          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xs sm:text-sm">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
              <ExternalLink size={14} className="mr-1 sm:mr-2" />
              View Live Demo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
