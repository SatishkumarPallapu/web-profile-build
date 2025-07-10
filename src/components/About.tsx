import { Code2, Palette, Zap, Users, Trophy, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import AnimatedEngineerKid from './AnimatedEngineerKid';

const About = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const sectionName = entry.target.getAttribute('data-section') || '';
          setVisibleSections(prev => ({
            ...prev,
            [sectionName]: entry.isIntersecting
          }));
          
          if (entry.isIntersecting) {
            setActiveSection(sectionName);
          }
        });
      },
      { threshold: 0.2, rootMargin: '20px' }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = {
    'Frontend': [
      { name: 'React.js', icon: '⚛️', level: 90 },
      { name: 'Angular 11+', icon: '🅰️', level: 85 },
      { name: 'JavaScript', icon: '🟨', level: 92 },
      { name: 'TypeScript', icon: '🔷', level: 88 },
      { name: 'HTML5/CSS3', icon: '🌐', level: 95 },
      { name: 'Tailwind CSS', icon: '🎨', level: 90 }
    ],
    'Backend & Tools': [
      { name: 'Node.js', icon: '🟢', level: 80 },
      { name: 'Express.js', icon: '🚀', level: 78 },
      { name: 'REST APIs', icon: '🔗', level: 85 },
      { name: 'GraphQL', icon: '📊', level: 75 },
      { name: 'Git', icon: '🐙', level: 88 },
      { name: 'Shopify', icon: '🛒', level: 82 }
    ],
    'Databases': [
      { name: 'MySQL', icon: '🐬', level: 80 },
      { name: 'SQLite', icon: '💾', level: 75 },
      { name: 'Firebase', icon: '🔥', level: 78 }
    ],
    'Testing & Others': [
      { name: 'Jest', icon: '🧪', level: 85 },
      { name: 'React Testing Library', icon: '🔬', level: 80 },
      { name: 'CI/CD', icon: '🔄', level: 75 },
      { name: 'SEO Optimization', icon: '📈', level: 82 }
    ]
  };

  const achievements = [
    {
      icon: Trophy,
      title: 'Performance Expert',
      description: 'Reduced API failure rates by 50% with optimized queries and implemented lazy loading for better performance.'
    },
    {
      icon: Code2,
      title: 'Component Architecture',
      description: 'Developed reusable components and maintained cross-browser compatibility across multiple projects.'
    },
    {
      icon: Zap,
      title: 'Process Optimization',
      description: 'Automated data updating processes, reducing manual effort and improving team efficiency.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Successfully collaborated with cross-functional teams to deliver user-focused digital experiences.'
    }
  ];

  const experiences = [
    {
      company: 'Persistent Systems Limited',
      role: 'Software Engineer',
      duration: 'Jan 2022 - Nov 2023',
      location: 'Hyderabad',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=center',
      logoAlt: 'Persistent Systems Logo',
      highlights: [
        'Delivered responsive, cross-browser compatible websites with faster load times',
        'Implemented lazy loading concepts improving application performance',
        'Reduced API failure rates by 50% with rate-limiting and optimized queries',
        'Developed reusable components for future projects'
      ]
    },
    {
      company: 'Urjanet Energy Solutions Limited',
      role: 'Software Engineer',
      duration: 'Dec 2019 - Aug 2020',
      location: 'Chennai',
      logo: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=64&h=64&fit=crop&crop=center',
      logoAlt: 'Urjanet Energy Solutions Logo',
      highlights: [
        'Collected and organized statistical information for business analysis',
        'Extracted performance data from CSV files in JSON format',
        'Developed data visualization tools for business insights'
      ]
    }
  ];

  const education = [
    {
      degree: 'B.Tech (Electronics and Communication Engineering)',
      institution: 'Padmashri BV Raju Institute Of Technology',
      year: '2020',
      grade: '7.5 CGPA',
      icon: '🎓'
    },
    {
      degree: 'Polytechnic (ECE)',
      institution: 'Vijay Rural Engineering College',
      year: '2017',
      grade: '65%',
      icon: '📚'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-section="header">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate Fullstack Developer (MEAN/MERN) with 2+ years of experience creating digital solutions 
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        {/* Professional Summary */}
        <div className="mb-16" data-section="summary">
          <Card className="hover-lift border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Professional Summary</h3>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Front-End Developer with 2+ years of hands-on experience in building fast, responsive, and 
                scalable web applications and eCommerce solutions. Specialized in Shopify development (themes, 
                Liquid, headless architecture) and proficient in React.js and Angular 11+ for modern SaaS and 
                front-end projects. Skilled at implementing UI/UX best practices, optimizing performance, and 
                integrating REST APIs.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-16" data-section="achievements">
          <h3 className="text-3xl font-bold text-center mb-12 font-display">Key Achievements</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg group">
                <CardContent className="p-6 text-center">
                  <achievement.icon className="w-12 h-12 mx-auto mb-4 text-purple-600 group-hover:animate-bounce" />
                  <h4 className="font-semibold mb-3 text-lg">{achievement.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience - Fixed mobile layout */}
        <div className="mb-16" data-section="experience">
          <h3 className="text-3xl font-bold text-center mb-12 font-display">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover-lift border-0 shadow-xl overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start">
                      <img 
                        src={exp.logo} 
                        alt={exp.logoAlt}
                        className="w-16 h-16 rounded-lg object-cover border-2 border-gray-200 shadow-sm"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=center';
                        }}
                      />
                    </div>
                    <div className="flex-1 w-full">
                      <div className="flex flex-col gap-4 mb-4">
                        <div className="text-center sm:text-left">
                          <h4 className="text-xl font-bold text-gray-800">{exp.role}</h4>
                          <p className="text-lg font-semibold text-purple-600">{exp.company}</p>
                        </div>
                        <div className="text-center sm:text-right">
                          <p className="text-gray-600 font-medium">{exp.duration}</p>
                          <p className="text-gray-500">{exp.location}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <span className="text-purple-600 mt-1 flex-shrink-0">•</span>
                            <span className="text-sm sm:text-base">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16" data-section="education">
          <h3 className="text-3xl font-bold text-center mb-12 font-display">Education</h3>
          <div className="grid sm:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{edu.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-base sm:text-lg mb-2">{edu.degree}</h4>
                      <p className="text-purple-600 font-semibold mb-1 text-sm sm:text-base">{edu.institution}</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <span className="text-gray-600 text-sm">{edu.year}</span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium w-fit">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl" data-section="skills">
          <h3 className="text-3xl font-bold text-center mb-12 font-display gradient-text">Skills & Technologies</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h4 className="font-bold text-gray-800 mb-6 text-base sm:text-lg border-b border-purple-200 pb-2">{category}</h4>
                <div className="space-y-4">
                  {items.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-base sm:text-lg">{skill.icon}</span>
                          <span className="text-xs sm:text-sm font-medium text-gray-700">{skill.name}</span>
                        </div>
                        <span className="text-xs text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Engineer Kid */}
      <AnimatedEngineerKid 
        isVisible={Object.values(visibleSections).some(Boolean)} 
        sectionName={activeSection}
      />
    </section>
  );
};

export default About;
