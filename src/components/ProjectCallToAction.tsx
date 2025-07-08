
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectCallToAction = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Want to see more of my work?</h3>
        <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base">
          Check out my GitHub profile for more projects and contributions to the development community.
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="bg-white text-purple-600 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm sm:text-base">
            <Github className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            View GitHub Profile
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCallToAction;
