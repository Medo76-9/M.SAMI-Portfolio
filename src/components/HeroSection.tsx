import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for natural movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  // Transform mouse position to rotation and movement values
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);
  const translateX = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]);
  const translateY = useTransform(smoothMouseY, [-0.5, 0.5], [-15, 15]);
  
  // Parallax layers for depth effect
  const layer1X = useTransform(smoothMouseX, [-0.5, 0.5], [-25, 25]);
  const layer1Y = useTransform(smoothMouseY, [-0.5, 0.5], [-25, 25]);
  const layer2X = useTransform(smoothMouseX, [-0.5, 0.5], [15, -15]);
  const layer2Y = useTransform(smoothMouseY, [-0.5, 0.5], [15, -15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Normalize to -0.5 to 0.5 range
      const x = (e.clientX - centerX) / rect.width;
      const y = (e.clientY - centerY) / rect.height;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated background contour lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.svg 
          className="absolute w-full h-full"
          style={{ x: layer2X, y: layer2Y }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.ellipse
              key={i}
              cx="50%"
              cy="50%"
              rx={200 + i * 80}
              ry={150 + i * 60}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-muted-foreground"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: i * 0.1 }}
            />
          ))}
        </motion.svg>
      </div>

      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-1/4 left-[10%] w-3 h-3 bg-secondary rounded-full"
        style={{ x: layer1X, y: layer1Y }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-1/3 right-[15%] w-4 h-4 bg-accent rounded-sm rotate-45"
        style={{ x: layer2X, y: layer2Y }}
        animate={{ rotate: [45, 90, 45] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-[20%] w-2 h-2 bg-primary rounded-full"
        style={{ x: layer1X, y: layer1Y }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-8">
          
          {/* Text above portrait */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-display font-bold border border-secondary/20 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
            >
              ✨ Available for freelance work
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="block text-foreground">Visual</span>
              <motion.span 
                className="text-gradient-hero inline-block"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                designs
              </motion.span>
              <span className="block text-foreground">that tell your</span>
              <motion.span 
                className="inline-block text-secondary"
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                story
              </motion.span>
              <span className="text-accent">!</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Senior Graphic Designer crafting bold, playful, and unforgettable visual stories.
            </motion.p>
          </motion.div>

          {/* Interactive Portrait with 3D effect */}
          <motion.div
            className="relative perspective-1000"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, type: 'spring' }}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Glow effect behind portrait */}
            <motion.div 
              className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            {/* Decorative rings */}
            <motion.div 
              className="absolute -inset-4 border-2 border-secondary/20 rounded-full"
              style={{ x: layer1X, y: layer1Y, transform: 'translateZ(-20px)' }}
            />
            <motion.div 
              className="absolute -inset-8 border border-accent/10 rounded-full"
              style={{ x: layer2X, y: layer2Y, transform: 'translateZ(-40px)' }}
            />
            
            {/* Portrait container */}
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl"
              style={{
                x: translateX,
                y: translateY,
                transformStyle: 'preserve-3d',
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Light overlay that follows cursor */}
              <motion.div 
                className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent pointer-events-none z-10"
                style={{
                  x: useTransform(smoothMouseX, [-0.5, 0.5], [-100, 100]),
                  y: useTransform(smoothMouseY, [-0.5, 0.5], [-100, 100]),
                }}
              />
              
              {/* The portrait image */}
              <motion.img
                src="/lovable-uploads/0ce9ae50-f654-48d6-bbad-52202089eec0.png"
                alt="Portrait"
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
              />
              
              {/* Subtle overlay on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/portfolio">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-hero text-primary-foreground font-display font-bold rounded-full text-lg shadow-lg"
                data-cursor="View Work"
              >
                See my work
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-foreground/20 text-foreground font-display font-bold rounded-full text-lg hover:border-secondary hover:text-secondary transition-colors"
                data-cursor="Let's Talk"
              >
                Let's chat!
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm font-display">Scroll</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full p-1">
              <motion.div 
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-primary rounded-full mx-auto" 
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;