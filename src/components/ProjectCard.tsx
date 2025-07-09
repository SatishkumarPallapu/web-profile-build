
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
    <Card className="group hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white backdrop-blur-sm">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-white/95 backdrop-blur-sm text-purple-600 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            {project.category}
          </span>
        </div>

        {/* Project Icon */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
            <IconComponent size={20} className="text-purple-600" />
          </div>
        </div>

        {/* Live Demo Button Overlay */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg"
            onClick={() => window.open(project.liveUrl, '_blank')}
          >
            <ExternalLink size={16} className="mr-2" />
            View Live
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map((tech, techIndex) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        {/* Live Demo Button */}
        <Button 
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium"
          onClick={() => window.open(project.liveUrl, '_blank')}
        >
          <ExternalLink size={16} className="mr-2" />
          View Live Demo
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
