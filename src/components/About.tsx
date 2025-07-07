
import { Code, Palette, Zap, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = {
    'Frontend': ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
    'Backend': ['Node.js', 'Python', 'Express', 'Django', 'PostgreSQL'],
    'Tools': ['Git', 'Docker', 'AWS', 'Figma', 'VS Code'],
    'Other': ['UI/UX Design', 'REST APIs', 'GraphQL', 'Testing', 'Agile']
  };

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful, intuitive interfaces with attention to user experience.'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and performance across all devices.'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborating effectively with cross-functional teams to deliver results.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 5+ years of experience creating digital solutions that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className="text-gray-600 mb-4">
              Started as a curious kid who loved breaking things apart to see how they worked. That curiosity led me to programming, where I discovered the joy of building digital experiences that people love to use.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, I've worked with startups and established companies, helping them bring their ideas to life through code. I believe in the power of technology to solve real-world problems and create meaningful connections.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-8 h-8 mx-auto mb-4 text-purple-600" />
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">Skills & Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h4 className="font-semibold text-gray-800 mb-3">{category}</h4>
                <div className="space-y-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
