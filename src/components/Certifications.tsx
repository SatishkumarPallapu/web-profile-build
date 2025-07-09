
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, Calendar, Building } from 'lucide-react';

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const certificationsSection = document.getElementById('certifications');
    if (certificationsSection) {
      observer.observe(certificationsSection);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      title: 'React.js Certification',
      issuer: 'NxtWave Academy',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop',
      description: 'Comprehensive certification covering React fundamentals, advanced concepts, and best practices.',
      credentialUrl: '#',
      skills: ['React.js', 'JSX', 'State Management', 'Component Lifecycle']
    },
    {
      title: 'JavaScript Certification',
      issuer: 'NxtWave Academy',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      description: 'Advanced JavaScript certification covering ES6+, asynchronous programming, and modern development practices.',
      credentialUrl: '#',
      skills: ['JavaScript ES6+', 'Async/Await', 'DOM Manipulation', 'API Integration']
    },
    {
      title: 'Full Stack Development',
      issuer: 'NxtWave Academy',
      date: '2022',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      description: 'Complete full-stack development certification covering frontend and backend technologies.',
      credentialUrl: '#',
      skills: ['MERN Stack', 'Node.js', 'Database Design', 'REST APIs']
    },
    {
      title: 'Responsive Web Design',
      issuer: 'NxtWave Academy',
      date: '2022',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      description: 'Certification focused on creating responsive, mobile-first web applications.',
      credentialUrl: '#',
      skills: ['CSS3', 'Bootstrap', 'Mobile-First Design', 'Cross-Browser Compatibility']
    }
  ];

  return (
    <section id="certifications" className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-display transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className={`text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            Continuous learning and skill development through industry-recognized certifications
            that validate my expertise in modern web development technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className={`group hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white/90 backdrop-blur-sm ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Certificate Badge */}
                <div className="absolute top-3 left-3">
                  <div className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
                    <Award size={16} className="text-yellow-600" />
                    <span className="text-sm font-semibold text-gray-800">Certified</span>
                  </div>
                </div>

                {/* View Certificate Button */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    size="sm" 
                    className="bg-white/95 backdrop-blur-sm hover:bg-white text-gray-800 shadow-lg"
                    onClick={() => window.open(cert.credentialUrl, '_blank')}
                  >
                    <ExternalLink size={14} className="mr-2" />
                    View Certificate
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Building size={14} />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-purple-200 hover:bg-purple-50 text-purple-700"
                  onClick={() => window.open(cert.credentialUrl, '_blank')}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Credential
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Committed to Continuous Learning</h3>
            <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base">
              Always staying updated with the latest technologies and industry best practices
              to deliver cutting-edge solutions.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
              onClick={() => window.open('#contact', '_self')}
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
