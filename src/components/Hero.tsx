
import { ArrowDown, Github, Linkedin, Mail, Download, MapPin, Phone } from 'lucide-react';
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 animate-scale-in">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-600">
                SP
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow font-display">
            Hi, I'm{' '}
            <span className="gradient-text animate-bounce-horizontal">Satish Kumar</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-700 mb-4 h-12 font-medium">
            <span className="border-r-2 border-purple-600 animate-blink">
              {displayText}
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 text-lg text-gray-600 mb-8 animate-slide-in-left">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-purple-600" />
              <span>Hyderabad, Telangana</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-purple-600" />
              <span>8367784677</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light max-w-4xl mx-auto leading-relaxed animate-slide-in-right">
            2+ years of experience building fast, responsive, and scalable web applications. 
            Specialized in React.js, Angular, and Shopify development with a passion for creating 
            exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              View My Work
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            >
              Get In Touch
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-12 animate-fade-in-delayed">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-125 transform hover:animate-wiggle"
            >
              <Github size={28} />
            </a>
            <a
              href="http://www.linkedin.com/in/satish-pallapu-550785373"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-125 transform hover:animate-wiggle"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:pallapusatish.19@gmail.com"
              className="text-gray-600 hover:text-red-500 transition-all duration-300 hover:scale-125 transform hover:animate-wiggle"
            >
              <Mail size={28} />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 hover:text-gray-600 transition-colors duration-200 hover:scale-110 transform"
          >
            <ArrowDown size={36} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
