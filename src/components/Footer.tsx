
import { Heart, Github, Linkedin, Mail, MapPin, Phone, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = ['Home', 'About', 'Projects', 'Certifications', 'Contact'];
  const services = [
    'React.js Development',
    'Angular Development', 
    'Shopify Development',
    'Frontend Consulting',
    'Performance Optimization'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-8 h-8 text-purple-400" />
              <div className="text-2xl font-bold gradient-text font-display">Satish Kumar</div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Frontend Developer with 2+ years of experience in React.js, Angular, and Shopify development. 
              Passionate about creating exceptional digital experiences that drive business results.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={18} className="text-purple-400" />
                <a href="mailto:satishkumarpallapu.16@gmail.com" className="hover:text-white transition-colors duration-200">
                  pallapusatish.19@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={18} className="text-blue-400" />
                <span>+91 8367784677</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={18} className="text-green-400" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-2 transform"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Services</h3>
            <ul className="space-y-3 text-gray-300">
              {services.map((service) => (
                <li key={service} className="hover:text-white transition-colors duration-200">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 transform"
          >
            <Github size={24} />
          </a>
          <a
            href="http://www.linkedin.com/in/satish-pallapu-550785373"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:pallapusatish.19@gmail.com"
            className="text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-125 transform"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Satish Kumar. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart size={16} className="mx-2 text-red-500 animate-pulse" /> and lots of ☕
          </p>
        </div>

        {/* Portfolio Link */}
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            Current Portfolio: 
            <a 
              href="https://pskportfolio.ccbp.tech/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 ml-2 underline transition-colors duration-200"
            >https://satish-portfolio-rho.vercel.app/
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
