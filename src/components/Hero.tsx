import { ArrowDown, Linkedin, Mail, Download, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Frontend Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // Create a link to download resume
    const link = document.createElement('a');
    link.href = '/Satish Resume.pdf'; // Corrected path to match public folder
    link.download = 'Satish_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 sm:px-6 lg:px-8 pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-6 sm:mb-8 animate-scale-in">
            <div className="w-32 sm:w-40 h-32 sm:h-40 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-2xl sm:text-4xl font-bold text-gray-600">
                SK
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-shadow font-display">
            Hi, I'm{' '}
            <span className="gradient-text animate-bounce-horizontal">Satish Kumar</span>
          </h1>
          
          <div className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-4 h-8 sm:h-12 font-medium">
            <span className="border-r-2 border-purple-600 animate-blink">
              {displayText}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 text-sm sm:text-lg text-gray-600 mb-6 sm:mb-8 animate-slide-in-left">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="sm:w-5 sm:h-5 text-purple-600" />
              <span>Hyderabad, Telangana</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="sm:w-5 sm:h-5 text-purple-600" />
              <span>8367784677</span>
            </div>
          </div>
          
          <p className="text-base sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 font-light max-w-4xl mx-auto leading-relaxed animate-slide-in-right px-4">
            2+ years of experience building fast, responsive, and scalable web applications. 
            Specialized in React.js, Angular, and Shopify development with a passion for creating 
            exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 animate-scale-in px-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl text-sm sm:text-base"
            >
              View My Work
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white text-sm sm:text-base"
            >
              Get In Touch
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleResumeDownload}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-sm sm:text-base"
            >
              <Download className="mr-2 sm:w-5 sm:h-5" size={16} />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-8 sm:mb-12 animate-fade-in-delayed">
            <a
              href="http://www.linkedin.com/in/satish-pallapu-550785373"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-125 transform hover:animate-wiggle"
            >
              <Linkedin size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a
              href="mailto:pallapusatish.19@gmail.com"
              className="text-gray-600 hover:text-red-500 transition-all duration-300 hover:scale-125 transform hover:animate-wiggle"
            >
              <Mail size={24} className="sm:w-7 sm:h-7" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 hover:text-gray-600 transition-colors duration-200 hover:scale-110 transform"
          >
            <ArrowDown size={28} className="sm:w-9 sm:h-9" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
