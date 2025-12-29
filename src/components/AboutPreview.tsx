import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
const stats = [{
  value: '50+',
  label: 'Visual Projects',
  icon: '🎨'
}, {
  value: '5+',
  label: 'Years Experience',
  icon: '⭐'
}, {
  value: '30+',
  label: 'Happy Clients',
  icon: '🌍'
}, {
  value: '100%',
  label: 'Passion Driven',
  icon: '🔥'
}];
const skills = [{
  name: 'Adobe Suite',
  level: 95
}, {
  name: 'Figma',
  level: 90
}, {
  name: 'After Effects',
  level: 85
}, {
  name: 'Blender',
  level: 75
}, {
  name: 'Illustration',
  level: 88
}];
const AboutPreview = () => {
  return <section className="py-24 px-6 bg-card/50 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image and decorations */}
          <AnimatedSection direction="left" className="relative">
            <div className="relative">
              {/* Main image container */}
              <motion.div className="relative rounded-3xl overflow-hidden" whileHover={{
              rotate: -2
            }} transition={{
              type: 'spring',
              damping: 20
            }}>
                <img alt="Designer portrait" className="w-full aspect-[3/4] object-cover" src="/lovable-uploads/0ce9ae50-f654-48d6-bbad-52202089eec0.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </motion.div>

              {/* Floating stickers */}
              <motion.div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-2xl flex items-center justify-center text-4xl rotate-12" animate={{
              rotate: [12, 20, 12],
              y: [0, -10, 0]
            }} transition={{
              duration: 4,
              repeat: Infinity
            }}>
                🎨
              </motion.div>
              <motion.div className="absolute -bottom-4 -left-4 px-6 py-3 bg-primary rounded-full font-display font-bold text-primary-foreground" animate={{
              rotate: [-5, 5, -5]
            }} transition={{
              duration: 3,
              repeat: Infinity
            }}>
                Creative Soul
              </motion.div>
              <motion.div className="absolute top-1/2 -right-8 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl" animate={{
              scale: [1, 1.1, 1]
            }} transition={{
              duration: 2,
              repeat: Infinity
            }}>
                ✨
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right side - Content */}
          <div className="space-y-8">
            <AnimatedSection>
              <span className="text-tertiary font-display font-bold text-sm tracking-wider">
                ABOUT ME
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 leading-tight">ohameM visual magic<span className="text-gradient-hero">MOHAMED SAMI</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-xl text-foreground/90 font-medium leading-relaxed mb-4">
                I turn raw ideas into clean, high-impact visuals that speak globally.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Senior Graphic Designer with 5+ years of hands-on experience, focused on creating work that feels bold, authentic, and unforgettable.
              </p>
              <Link to="/portfolio">
                <motion.button whileHover={{
                scale: 1.05,
                x: 5
              }} whileTap={{
                scale: 0.95
              }} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-bold rounded-full text-sm hover:bg-primary/90 transition-colors">
                  View My Work
                  <motion.span animate={{
                  x: [0, 4, 0]
                }} transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}>
                    →
                  </motion.span>
                </motion.button>
              </Link>
            </AnimatedSection>

            {/* Skills */}
            <AnimatedSection delay={0.2} className="space-y-4">
              {skills.map((skill, index) => <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm font-display">
                    <span>{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div className="h-full bg-gradient-hero rounded-full" initial={{
                  width: 0
                }} whileInView={{
                  width: `${skill.level}%`
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 1,
                  delay: index * 0.1
                }} />
                  </div>
                </div>)}
            </AnimatedSection>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => <AnimatedSection key={stat.label} delay={index * 0.1} direction="scale">
              <motion.div className="bg-card rounded-3xl p-6 text-center border border-border/50 hover:border-primary/50 transition-colors" whileHover={{
            y: -5,
            rotate: index % 2 === 0 ? 2 : -2
          }}>
                <span className="text-4xl mb-2 block">{stat.icon}</span>
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient-hero">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-display mt-1">
                  {stat.label}
                </div>
              </motion.div>
            </AnimatedSection>)}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-40 h-40 border-2 border-primary/20 rounded-full animate-spin-slow pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-32 h-32 border-2 border-secondary/20 rounded-full animate-spin-slow pointer-events-none" style={{
      animationDirection: 'reverse'
    }} />
    </section>;
};
export default AboutPreview;