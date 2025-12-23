import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    id: 1,
    title: 'Neon Dreams',
    category: 'Brand Identity',
    color: 'from-primary to-accent',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
  },
  {
    id: 2,
    title: 'Fresh Vibes',
    category: 'Packaging Design',
    color: 'from-secondary to-accent',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
  },
  {
    id: 3,
    title: 'Digital Waves',
    category: 'Motion Graphics',
    color: 'from-tertiary to-primary',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
  },
  {
    id: 4,
    title: 'Cosmic Play',
    category: 'Web Design',
    color: 'from-accent to-secondary',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=800&q=80',
  },
];

const FeaturedWork = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <motion.span 
              className="text-secondary font-display font-bold text-sm tracking-wider"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              SELECTED WORKS
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mt-2">
              Creative
              <span className="text-gradient-hero"> Playground</span>
            </h2>
          </div>
          <Link 
            to="/portfolio"
            className="text-muted-foreground hover:text-foreground transition-colors font-display inline-flex items-center gap-2 group"
            data-cursor="View All"
          >
            View all projects
            <motion.span
              className="inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              delay={index * 0.1}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <motion.div
                className="group relative overflow-hidden rounded-3xl bg-card aspect-[4/3]"
                whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                transition={{ type: 'spring', damping: 20 }}
                data-cursor="View"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <span className="text-sm font-display text-foreground/80 bg-background/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-display font-bold text-foreground mt-3">
                      {project.title}
                    </h3>
                  </motion.div>
                </div>

                {/* Corner accent */}
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 border-2 border-foreground/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.2, rotate: 45 }}
                >
                  <span className="text-foreground text-xl">↗</span>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Decorative blob */}
      <div className="absolute -right-40 top-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-40 bottom-0 w-60 h-60 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default FeaturedWork;
