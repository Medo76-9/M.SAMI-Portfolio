import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navItems = [{
  name: 'Home',
  path: '/'
}, {
  name: 'About',
  path: '/about'
}, {
  name: 'Portfolio',
  path: '/portfolio'
}, {
  name: 'Services',
  path: '/services'
}, {
  name: 'Process',
  path: '/process'
}, {
  name: 'Contact',
  path: '/contact'
}];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Track scroll for logo visibility
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return <>
      {/* Desktop Navigation */}
      <motion.nav initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      type: 'spring',
      damping: 20,
      stiffness: 100
    }} className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" data-cursor="Home" className="relative group">
            <motion.span 
              className="text-2xl font-display font-bold text-gradient-hero"
              initial={{ opacity: 1, y: 0 }}
              animate={{ 
                opacity: isScrolled ? 0 : 1, 
                y: isScrolled ? -20 : 0,
                pointerEvents: isScrolled ? 'none' : 'auto'
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }}
            >
              M.SAMI
              <motion.span className="text-secondary" animate={{
                rotate: [0, 10, -10, 0]
              }} transition={{
                repeat: Infinity,
                duration: 2
              }}>
                *
              </motion.span>
            </motion.span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => <Link key={item.path} to={item.path} data-cursor={item.name} className="relative px-4 py-2 group">
                <motion.span className={`relative z-10 font-display font-medium transition-colors ${location.pathname === item.path ? 'text-primary' : 'text-foreground/70 group-hover:text-foreground'}`} initial={{
              opacity: 0,
              y: -20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }}>
                  {item.name}
                </motion.span>
                {location.pathname === item.path && <motion.div layoutId="activeNav" className="absolute inset-0 bg-primary/10 rounded-full" transition={{
              type: 'spring',
              damping: 20,
              stiffness: 300
            }} />}
              </Link>)}
          </div>

          {/* Mobile Menu Button */}
          <motion.button className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5" onClick={() => setIsOpen(!isOpen)} whileTap={{
          scale: 0.9
        }} data-cursor="Menu">
            <motion.span className="w-6 h-0.5 bg-foreground rounded-full" animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 6 : 0
          }} />
            <motion.span className="w-6 h-0.5 bg-foreground rounded-full" animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? 20 : 0
          }} />
            <motion.span className="w-6 h-0.5 bg-foreground rounded-full" animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -6 : 0
          }} />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 z-40 md:hidden">
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setIsOpen(false)} />
            <motion.div initial={{
          x: '100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '100%'
        }} transition={{
          type: 'spring',
          damping: 25,
          stiffness: 200
        }} className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-card p-8 pt-24">
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => <motion.div key={item.path} initial={{
              opacity: 0,
              x: 50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: index * 0.1
            }}>
                    <Link to={item.path} onClick={() => setIsOpen(false)} className={`block text-4xl font-display font-bold py-3 transition-colors ${location.pathname === item.path ? 'text-gradient-hero' : 'text-foreground/60 hover:text-foreground'}`}>
                      {item.name}
                    </Link>
                  </motion.div>)}
              </div>

              {/* Decorative elements */}
              <motion.div className="absolute bottom-8 left-8 right-8" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.5
          }}>
                <div className="text-sm text-muted-foreground">
                  Let's create something amazing together
                </div>
                <div className="mt-2 text-primary font-display font-bold">
                  hello@pixel.design
                </div>
              </motion.div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </>;
};
export default Navigation;