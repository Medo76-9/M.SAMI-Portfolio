import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import Scene3D from './Scene3D';
const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Scroll-based animations for background image only
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const imageBlur = useTransform(scrollYProgress, [0, 0.5], [0, 8]);
  return <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />
      
      {/* Cinematic background image layer */}
      <motion.div className="absolute inset-0 z-[1] pointer-events-none" style={{
      opacity: imageOpacity,
      scale: imageScale,
      filter: useTransform(imageBlur, v => `blur(${v}px)`)
    }}>
        {/* Replace src with your portrait image */}
        <div className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-20" style={{
        backgroundImage: `url('/lovable-uploads/eb4a14f4-623d-4aa0-8425-6a1730a55511.png')`,
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 70%)'
      }} />
      </motion.div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none z-[2]" />
      
      <div className="relative z-10 container mx-auto px-6 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating badge */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8,
          rotate: -5
        }} animate={{
          opacity: 1,
          scale: 1,
          rotate: 0
        }} transition={{
          delay: 0.2,
          type: 'spring'
        }} className="inline-block mb-8">
            <span className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-display font-bold border border-secondary/30">
              ✨ Available for freelance work
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1 initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3,
          duration: 0.8
        }} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-6">
            <span className="block">Visual</span>
            <motion.span className="text-gradient-hero inline-block" animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }} transition={{
            duration: 5,
            repeat: Infinity
          }} style={{
            backgroundSize: '200% 200%'
          }}>designs</motion.span>
            <span className="block">that tell</span>
            <span className="block">your</span>
            <motion.span className="inline-block text-secondary" animate={{
            rotate: [0, 5, -5, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }}>story</motion.span>
            <span className="text-accent">!</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5,
          duration: 0.6
        }} className="text-xl md:text-2xl font-display font-medium text-foreground/90 max-w-2xl mx-auto mb-4">
            I design visual identities that people <span className="text-primary">remember</span>, not just see.
          </motion.p>
          
          {/* Subheading */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.6
        }} className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-12">
            Senior Graphic Designer crafting bold, meaningful visuals for brands that dare to stand out.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.7
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/portfolio">
              <motion.button whileHover={{
              scale: 1.05,
              rotate: -1
            }} whileTap={{
              scale: 0.95
            }} className="px-8 py-4 bg-gradient-hero text-primary-foreground font-display font-bold rounded-full text-lg glow-primary" data-cursor="View Work">
                See my work
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button whileHover={{
              scale: 1.05,
              rotate: 1
            }} whileTap={{
              scale: 0.95
            }} className="px-8 py-4 border-2 border-foreground/20 text-foreground font-display font-bold rounded-full text-lg hover:border-secondary hover:text-secondary transition-colors" data-cursor="Let's Talk">Let's chat!</motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div className="absolute top-1/4 left-10 w-4 h-4 bg-secondary rounded-full z-[3]" animate={{
      scale: [1, 1.5, 1],
      opacity: [0.5, 1, 0.5]
    }} transition={{
      duration: 2,
      repeat: Infinity
    }} />
      <motion.div className="absolute bottom-1/3 right-10 w-6 h-6 bg-accent rounded-sm rotate-45 z-[3]" animate={{
      rotate: [45, 90, 45],
      scale: [1, 1.2, 1]
    }} transition={{
      duration: 3,
      repeat: Infinity
    }} />
      <motion.div className="absolute top-1/3 right-1/4 w-3 h-3 bg-tertiary rounded-full z-[3]" animate={{
      y: [0, -20, 0],
      x: [0, 10, 0]
    }} transition={{
      duration: 4,
      repeat: Infinity
    }} />
    </section>;
};
export default HeroSection;