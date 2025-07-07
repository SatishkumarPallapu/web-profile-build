
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const certificationsSection = document.getElementById('certifications');
    if (certificationsSection) {
      observer.observe(certificationsSection);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      title: 'PDEA Angular Jr. & Sr. Developer Certification',
      issuer: 'Persistent System Limited',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
      description: 'Comprehensive certification covering Angular framework, component architecture, services, and advanced concepts.',
      skills: ['Angular', 'TypeScript', 'RxJs', 'Component Design'],
      credentialUrl: '#'
    },
    {
      title: 'Angular, Angular Firebase, and Material',
      issuer: 'Academind Instructors (Udemy)',
      date: '2022',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
      description: 'Advanced Angular development with Firebase integration and Material Design implementation.',
      skills: ['Angular', 'Firebase', 'Material Design', 'Authentication'],
      credentialUrl: '#'
    },
    {
      title: 'React.js Advanced Developer',
      issuer: 'Professional Development',
      date: '2022',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      description: 'Advanced React.js concepts including hooks, context API, performance optimization, and testing.',
      skills: ['React.js', 'Hooks', 'Context API', 'Performance'],
      credentialUrl: '#'
    },
    {
      title: 'Shopify Development Specialist',
      issuer: 'Shopify Partners',
      date: '2021',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      description: 'Specialized certification in Shopify theme development, Liquid templating, and headless commerce.',
      skills: ['Shopify', 'Liquid', 'GraphQL', 'E-commerce'],
      credentialUrl: '#'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 font-display transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            Continuous learning and professional development through industry-recognized certifications 
            in modern web technologies and frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className={`group hover-lift border-0 shadow-xl overflow-hidden bg-white/80 backdrop-blur-sm transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Award Icon */}
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse-glow">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                    <Calendar size={14} />
                    {cert.date}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-purple-600 font-semibold mb-3">{cert.issuer}</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {cert.description}
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View Credential Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 transition-all duration-300"
                >
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                    <ExternalLink size={16} className="mr-2" />
                    View Credential
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Certifications Note */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <Award className="w-16 h-16 mx-auto mb-4 text-purple-600" />
            <h3 className="text-2xl font-bold mb-4 font-display">Commitment to Excellence</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              I believe in continuous learning and staying updated with the latest technologies. 
              These certifications represent my dedication to professional growth and delivering 
              high-quality solutions to clients and employers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
