import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    name: 'Twitter',
    url: '#',
    icon: '𝕏'
  }, {
    name: 'Instagram',
    url: '#',
    icon: '📸'
  }, {
    name: 'Dribbble',
    url: '#',
    icon: '🏀'
  }, {
    name: 'Behance',
    url: '#',
    icon: '🎨'
  }];
  return <footer className="py-20 px-6 bg-card relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* CTA Section */}
        <AnimatedSection className="text-center mb-20">
          <motion.div className="inline-block mb-4" animate={{
          rotate: [0, 5, -5, 0]
        }} transition={{
          duration: 4,
          repeat: Infinity
        }}>
            <span className="text-6xl">👋</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
            Let's create
            <br />
            <span className="text-gradient-hero">something wild</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Got a project in mind? Let's make it happen. 
            I'm always excited to work on something new and creative!
          </p>
          <Link to="/contact">
            <motion.button whileHover={{
            scale: 1.05,
            rotate: -2
          }} whileTap={{
            scale: 0.95
          }} className="px-10 py-5 bg-gradient-hero text-primary-foreground font-display font-bold rounded-full text-xl glow-primary" data-cursor="Let's Go!">
              Start a Project
            </motion.button>
          </Link>
        </AnimatedSection>

        {/* Footer links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12 border-t border-border/30">
          <AnimatedSection delay={0.1}>
            <Link to="/" className="inline-block mb-4">
              <span className="text-3xl font-display font-bold text-gradient-hero">M.SAMI</span>
            </Link>
            <p className="text-muted-foreground text-sm">Creating bold, playful, and unforgettable designs since 2020.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h4 className="font-display font-bold mb-4">Pages</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Services', 'Process', 'Contact'].map(item => <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {item}
                  </Link>
                </li>)}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h4 className="font-display font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:hello@pixel.design" className="hover:text-primary transition-colors">nadersamy178@gmail.com</a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">+201067649551</a>
              </li>
              <li>Egypt. Gharbia Governorate . Tanta</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <h4 className="font-display font-bold mb-4">Social</h4>
            <div className="flex gap-3">
              {socialLinks.map(social => <motion.a key={social.name} href={social.url} whileHover={{
              scale: 1.2,
              rotate: 10
            }} whileTap={{
              scale: 0.9
            }} className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-xl hover:bg-primary/20 transition-colors" data-cursor={social.name}>
                  {social.icon}
                </motion.a>)}
            </div>
          </AnimatedSection>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} PIXEL. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Made with <motion.span animate={{
            scale: [1, 1.2, 1]
          }} transition={{
            duration: 1,
            repeat: Infinity
          }}>❤️</motion.span> and lots of coffee
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
    </footer>;
};
export default FooterSection;