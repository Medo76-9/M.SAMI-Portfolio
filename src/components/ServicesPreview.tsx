import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    icon: '🎨',
    title: 'Brand Identity',
    problem: 'Your brand feels invisible?',
    description: 'From concept to a complete visual system that builds trust and recognition.',
    color: 'bg-primary/10 hover:bg-primary/20',
    accent: 'bg-primary',
  },
  {
    icon: '✨',
    title: 'UI/UX Design',
    problem: 'Users leave your product confused?',
    description: 'Interfaces that feel smooth, modern, and intuitive — designed for real people.',
    color: 'bg-secondary/10 hover:bg-secondary/20',
    accent: 'bg-secondary',
  },
  {
    icon: '🎬',
    title: 'Motion Graphics',
    problem: 'Static content not engaging?',
    description: 'Animations that bring your message to life with cinematic personality.',
    color: 'bg-accent/10 hover:bg-accent/20',
    accent: 'bg-accent',
  },
  {
    icon: '📦',
    title: 'Packaging Design',
    problem: 'Products getting overlooked?',
    description: 'Packaging that jumps off the shelf and tells your brand story at first glance.',
    color: 'bg-tertiary/10 hover:bg-tertiary/20',
    accent: 'bg-tertiary',
  },
  {
    icon: '🖼️',
    title: 'Illustration',
    problem: 'Need a unique visual voice?',
    description: 'Custom illustrations that tell your story in a distinctive, memorable way.',
    color: 'bg-primary/10 hover:bg-primary/20',
    accent: 'bg-primary',
  },
  {
    icon: '🌐',
    title: 'Web Design',
    problem: 'Website not converting?',
    description: 'Websites that captivate visitors and turn them into loyal customers.',
    color: 'bg-accent/10 hover:bg-accent/20',
    accent: 'bg-accent',
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection className="text-center mb-16">
          <span className="text-accent font-display font-bold text-sm tracking-wider">
            WHAT I DO
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-2">
            Services that
            <span className="text-gradient-lime"> spark joy</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From concept to completion, I offer a range of creative services 
            to help your brand shine brighter than ever.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              delay={index * 0.1}
              direction="scale"
            >
              <motion.div
                className={`relative p-8 rounded-3xl ${service.color} border border-border/30 transition-colors duration-300 group h-full`}
                whileHover={{ y: -8, rotate: index % 2 === 0 ? 1 : -1 }}
                transition={{ type: 'spring', damping: 20 }}
                data-cursor={service.title}
              >
                {/* Icon */}
                <motion.div
                  className="text-5xl mb-6"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                >
                  {service.icon}
                </motion.div>

                <p className="text-sm text-primary/80 font-medium mb-2">
                  {service.problem}
                </p>
                <h3 className="text-2xl font-display font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>

                {/* Hover accent line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 ${service.accent} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className="block text-2xl"
                  >
                    ⭐
                  </motion.span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />
    </section>
  );
};

export default ServicesPreview;
