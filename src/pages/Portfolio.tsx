import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import CustomCursor from '../components/CustomCursor';
import FooterSection from '../components/FooterSection';
import AnimatedSection from '../components/AnimatedSection';

const categories = ['All', 'Branding', 'UI/UX', 'Motion', 'Packaging', 'Illustration'];

const projects = [
  {
    id: 1,
    title: 'Neon Dreams',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    color: 'from-primary to-accent',
    size: 'large',
  },
  {
    id: 2,
    title: 'Fresh Vibes',
    category: 'Packaging',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    color: 'from-secondary to-accent',
    size: 'small',
  },
  {
    id: 3,
    title: 'Digital Waves',
    category: 'Motion',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    color: 'from-tertiary to-primary',
    size: 'small',
  },
  {
    id: 4,
    title: 'Cosmic Play',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=800&q=80',
    color: 'from-accent to-secondary',
    size: 'medium',
  },
  {
    id: 5,
    title: 'Wild Nature',
    category: 'Illustration',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80',
    color: 'from-secondary to-tertiary',
    size: 'medium',
  },
  {
    id: 6,
    title: 'Urban Flow',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80',
    color: 'from-primary to-secondary',
    size: 'large',
  },
  {
    id: 7,
    title: 'Sweet Treats',
    category: 'Packaging',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80',
    color: 'from-tertiary to-accent',
    size: 'small',
  },
  {
    id: 8,
    title: 'Tech Fusion',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    color: 'from-accent to-primary',
    size: 'medium',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden noise-overlay">
      <CustomCursor />
      <Navigation />
      
      <main className="pt-32 pb-20">
        <section className="px-6">
          <div className="container mx-auto max-w-7xl">
            <AnimatedSection className="text-center mb-16">
              <span className="text-primary font-display font-bold text-sm tracking-wider">
                PORTFOLIO
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold mt-4">
                Creative
                <span className="text-gradient-hero"> Playground</span>
              </h1>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                A curated collection of projects that showcase my passion for 
                bold design and creative storytelling.
              </p>
            </AnimatedSection>

            {/* Filter */}
            <AnimatedSection delay={0.2} className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-display font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-foreground hover:bg-muted'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor={category}
                >
                  {category}
                </motion.button>
              ))}
            </AnimatedSection>

            {/* Masonry-style grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`group relative overflow-hidden rounded-3xl ${
                      project.size === 'large' 
                        ? 'md:col-span-2 md:row-span-2' 
                        : project.size === 'medium' 
                        ? 'md:row-span-2' 
                        : ''
                    }`}
                    data-cursor="View"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <motion.div
                        className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                      >
                        <span className="text-sm font-display text-foreground/80 bg-background/20 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                          {project.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          {project.title}
                        </h3>
                      </motion.div>
                    </div>

                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 border-2 border-foreground/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.2, rotate: 45 }}
                    >
                      <span className="text-foreground text-xl">↗</span>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default Portfolio;
