
import { Award, ExternalLink, Calendar, Eye, Shield, Code2, Database, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
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
      title: 'PDEA Sr Angular Developer',
      issuer: 'Persistent Systems',
      date: 'Oct 2023',
      credentialId: null,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
      description: 'Advanced Angular certification covering complex application architecture, performance optimization, and enterprise-level development practices.',
      skills: ['HTML5', 'JSON', 'Angular', 'HTML', 'Bootstrap', 'Git', 'HTTP', 'REST APIs', 'CSS', 'JavaScript', 'Responsive Design', 'Frontend Development'],
      credentialUrl: null,
      icon: <Code2 className="w-6 h-6" />,
      category: 'Angular Development'
    },
    {
      title: 'PDEA Jr Angular Developer',
      issuer: 'Persistent Systems',
      date: 'Jun 2023',
      credentialId: null,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
      description: 'Foundation-level Angular certification covering core concepts, component development, and modern web development practices.',
      skills: ['HTML5', 'Angular', 'HTML', 'Bootstrap', 'Git', 'HTTP', 'CSS', 'JavaScript', 'Responsive Design', 'Frontend Development'],
      credentialUrl: null,
      icon: <Code2 className="w-6 h-6" />,
      category: 'Angular Development'
    },
    {
      title: 'SQL - Intermediate',
      issuer: 'HackerRank',
      date: 'Dec 2022',
      credentialId: 'd60c8da0b0b3',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop',
      description: 'Intermediate SQL certification demonstrating proficiency in complex queries, joins, subqueries, and database optimization techniques.',
      skills: ['SQL', 'Database Management', 'Query Optimization', 'Data Analysis'],
      credentialUrl: '#',
      icon: <Database className="w-6 h-6" />,
      category: 'Database'
    },
    {
      title: 'Angular with Angular Material, Firestore & NgRx',
      issuer: 'Noble Work Foundation',
      date: 'Nov 2022',
      credentialId: 'UC-f4fd23f0-6a7b-470d-9076-7a13e252046f',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
      description: 'Comprehensive Angular certification covering Material Design, Firebase integration, and state management with NgRx.',
      skills: ['Angular', 'Material Design', 'Firebase', 'Firestore', 'NgRx', 'State Management'],
      credentialUrl: '#',
      icon: <Zap className="w-6 h-6" />,
      category: 'Full Stack Development'
    },
    {
      title: 'Software AG Certified API Management Professional',
      issuer: 'Software AG',
      date: 'Dec 2022',
      expired: 'Dec 2024',
      credentialId: null,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      description: 'Professional certification in API management, covering design, security, monitoring, and lifecycle management of enterprise APIs.',
      skills: ['REST APIs', 'API Management', 'API Security', 'Enterprise Integration'],
      credentialUrl: '#',
      icon: <Shield className="w-6 h-6" />,
      category: 'API Management'
    },
    {
      title: 'Software AG Certified webMethods.io Integration Professional',
      issuer: 'Software AG',
      date: 'Dec 2022',
      expired: 'Dec 2024',
      credentialId: null,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      description: 'Professional certification in webMethods.io integration platform for building and managing enterprise integrations.',
      skills: ['Integration Platforms', 'Enterprise Integration', 'Workflow Management', 'API Integration'],
      credentialUrl: '#',
      icon: <Users className="w-6 h-6" />,
      category: 'Integration'
    },
    {
      title: 'CCBP 4.0 Intensive Certificate - JavaScript',
      issuer: 'NxtWave',
      date: 'Feb 2022',
      credentialId: 'YVZ79V825G',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop',
      description: 'Intensive JavaScript certification covering modern ES6+ features, DOM manipulation, and advanced programming concepts.',
      skills: ['JavaScript', 'ES6+', 'DOM Manipulation', 'Asynchronous Programming'],
      credentialUrl: '#',
      icon: <Code2 className="w-6 h-6" />,
      category: 'JavaScript Development'
    },
    {
      title: 'CCBP 4.0 Intensive Certificate',
      issuer: 'NxtWave',
      date: 'Feb 2022',
      credentialId: '8IU1EGKFLX',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop',
      description: 'Comprehensive web development certification covering HTML, CSS, JavaScript, and React fundamentals.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Web Development'],
      credentialUrl: '#',
      icon: <Code2 className="w-6 h-6" />,
      category: 'Web Development'
    },
    {
      title: 'HAM Radio License',
      issuer: 'Ministry of Telecommunications India',
      date: 'Jan 2018',
      credentialId: null,
      image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?w=400&h=300&fit=crop',
      description: 'Amateur radio operator license demonstrating knowledge of radio communications, electronics, and regulations.',
      skills: ['Radio Communications', 'Electronics', 'Signal Processing'],
      credentialUrl: null,
      icon: <Zap className="w-6 h-6" />,
      category: 'Electronics'
    }
  ];

  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-display transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className={`text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            Continuous learning and professional development through industry-recognized certifications 
            in modern web technologies, databases, and enterprise solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <Card className={`group hover-lift border-0 shadow-xl overflow-hidden bg-white/80 backdrop-blur-sm transition-all duration-500 cursor-pointer ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-32 sm:h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Category Icon */}
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                      <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse-glow">
                        {cert.icon}
                      </div>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
                      <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 sm:px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 sm:gap-2">
                        <Calendar size={10} className="sm:w-3 sm:h-3" />
                        <span className="text-xs sm:text-sm">{cert.date}</span>
                        {cert.expired && (
                          <span className="text-red-600 text-xs hidden sm:inline">• Exp: {cert.expired}</span>
                        )}
                      </div>
                    </div>

                    {/* Preview Icon */}
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-6 sm:w-8 h-6 sm:h-8 bg-purple-600/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Eye size={12} className="sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-3 sm:p-4">
                    <h4 className="text-sm sm:text-lg font-bold mb-1 sm:mb-2 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                      {cert.title}
                    </h4>
                    <p className="text-purple-600 font-semibold mb-2 text-xs sm:text-sm">{cert.issuer}</p>
                    
                    {cert.credentialId && (
                      <p className="text-xs text-gray-500 mb-2 sm:mb-3 truncate">ID: {cert.credentialId}</p>
                    )}

                    {/* Skills Preview */}
                    <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                      {cert.skills.slice(0, 2).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          +{cert.skills.length - 2}
                        </span>
                      )}
                    </div>

                    {/* View Credential Button */}
                    {cert.credentialUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 transition-all duration-300 text-xs sm:text-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(cert.credentialUrl!, '_blank');
                        }}
                      >
                        <ExternalLink size={12} className="mr-1 sm:mr-2" />
                        View Credential
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              
              {/* Hover Preview Content */}
              <HoverCardContent className="w-72 sm:w-80 p-4 bg-white/95 backdrop-blur-md border-purple-200">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{cert.title}</h4>
                      <p className="text-sm text-purple-600 font-medium">{cert.issuer}</p>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                        <Calendar size={12} />
                        {cert.date}
                        {cert.expired && <span className="text-red-600">• Expires: {cert.expired}</span>}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-700 mb-3">{cert.description}</p>
                    
                    {cert.credentialId && (
                      <p className="text-xs text-gray-600 mb-3">
                        <strong>Credential ID:</strong> {cert.credentialId}
                      </p>
                    )}
                    
                    <div>
                      <p className="text-sm font-semibold text-gray-800 mb-2">Skills Covered:</p>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        {/* Statistics */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">{certifications.length}</div>
            <div className="text-gray-600 font-medium text-sm sm:text-base">Total Certifications</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">6</div>
            <div className="text-gray-600 font-medium text-sm sm:text-base">Categories</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">3+</div>
            <div className="text-gray-600 font-medium text-sm sm:text-base">Years Learning</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">15+</div>
            <div className="text-gray-600 font-medium text-sm sm:text-base">Technologies</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <Award className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4 text-purple-600" />
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-display">Commitment to Excellence</h3>
            <p className="text-gray-700 max-w-2xl mx-auto mb-4 sm:mb-6 text-sm sm:text-base">
              I believe in continuous learning and staying updated with the latest technologies. 
              These certifications represent my dedication to professional growth and delivering 
              high-quality solutions that drive business results.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base">
              View All Credentials
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
