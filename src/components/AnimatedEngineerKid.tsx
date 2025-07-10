
import { useEffect, useState } from 'react';
import { Wrench, Hammer, Cog, Zap } from 'lucide-react';

interface AnimatedEngineerKidProps {
  isVisible: boolean;
  sectionName?: string;
}

const AnimatedEngineerKid = ({ isVisible, sectionName = "content" }: AnimatedEngineerKidProps) => {
  const [currentTool, setCurrentTool] = useState(0);
  const tools = [Wrench, Hammer, Cog, Zap];

  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentTool(prev => (prev + 1) % tools.length);
    }, 800);

    return () => clearInterval(interval);
  }, [isVisible, tools.length]);

  const CurrentTool = tools[currentTool];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 pointer-events-none">
      <div className="relative animate-bounce">
        {/* Engineer Kid Character */}
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
          {/* Kid Face */}
          <div className="relative w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center">
            {/* Eyes */}
            <div className="absolute top-3 left-2 w-1.5 h-1.5 bg-black rounded-full animate-pulse"></div>
            <div className="absolute top-3 right-2 w-1.5 h-1.5 bg-black rounded-full animate-pulse"></div>
            {/* Smile */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-black rounded-full"></div>
          </div>
          
          {/* Hard Hat */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-orange-500 rounded-t-full border-2 border-orange-600"></div>
        </div>
        
        {/* Tool Animation */}
        <div className="absolute -top-8 -right-2 animate-spin">
          <CurrentTool className="w-6 h-6 text-orange-500" />
        </div>
        
        {/* Work Sparks */}
        <div className="absolute -top-4 -left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute -bottom-2 -right-4 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute -top-6 left-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-500"></div>
        
        {/* Speech Bubble */}
        <div className="absolute -top-16 -left-20 bg-white rounded-lg px-3 py-2 shadow-lg border-2 border-gray-200 animate-pulse">
          <div className="text-xs font-bold text-gray-700">Building {sectionName}...</div>
          <div className="absolute bottom-0 left-8 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white transform translate-y-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedEngineerKid;
