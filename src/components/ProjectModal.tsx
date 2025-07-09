
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, X } from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    tech: string[];
    liveUrl: string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    category: string;
    highlights?: string[];
  };
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const IconComponent = project.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl font-bold">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <IconComponent size={20} className="text-white" />
            </div>
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                {project.category}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
            <p className="text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features & Implementation</h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center pt-4">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink size={18} />
                View Live Demo
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
