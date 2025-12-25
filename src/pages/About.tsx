import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import CustomCursor from '../components/CustomCursor';
import FooterSection from '../components/FooterSection';
import AnimatedSection from '../components/AnimatedSection';
const About = () => {
  const timeline = [{
    year: '2016',
    title: 'Started the Journey',
    description: 'Fresh out of design school, armed with dreams and a MacBook.'
  }, {
    year: '2018',
    title: 'First Big Client',
    description: 'Landed my first Fortune 500 project. Mind = Blown.'
  }, {
    year: '2020',
    title: 'Went Freelance',
    description: 'Took the leap into full-time freelancing. Best decision ever!'
  }, {
    year: '2022',
    title: 'Award Season',
    description: 'Won multiple design awards and grew an amazing client base.'
  }, {
    year: 'Now',
    title: 'Creating Magic',
    description: 'Still pushing boundaries and making designs that pop!'
  }];
  const funFacts = [{
    emoji: '🎮',
    fact: 'Avid gamer - design inspiration comes from everywhere!'
  }, {
    emoji: '🌱',
    fact: 'Plant parent to 23 houseplants (and counting)'
  }, {
    emoji: '🎸',
    fact: 'Learning guitar, annoying my neighbors'
  }, {
    emoji: '☕',
    fact: 'Oat milk latte enthusiast'
  }, {
    emoji: '🐕',
    fact: 'Dog person with 2 golden retrievers'
  }, {
    emoji: '📚',
    fact: 'Design book collector with 200+ titles'
  }];
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden noise-overlay">
      <CustomCursor />
      <Navigation />
      
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="px-6 mb-20">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left">
                <span className="text-secondary font-display font-bold text-sm tracking-wider">
                  ABOUT ME
                </span>
                <h1 className="text-5xl md:text-7xl font-display font-bold mt-4 leading-tight">
                  Designer by day,
                  <br />
                  <span className="text-gradient-hero">dreamer by night</span>
                </h1>
                <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                  I'm a creative soul who believes that great design should evoke emotions, 
                  tell stories, and most importantly—make people smile. With a background in 
                  fine arts and a passion for digital experiences, I bridge the gap between 
                  artistic expression and functional design.
                </p>
                <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                  When I'm not pushing pixels, you'll find me exploring new coffee shops, 
                  sketching in my notebook, or getting way too competitive at board games.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="right" className="relative">
                <motion.div whileHover={{
                rotate: 2,
                scale: 1.02
              }} className="relative rounded-3xl overflow-hidden mx-0 px-0 py-0 mb-[11px]">
                  <img alt="Designer portrait" src="/lovable-uploads/79cda72e-9104-4019-9203-0f1556847cab.png" className="w-full aspect-square object-cover border-0 border-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </motion.div>

                {/* Floating elements */}
                <motion.div className="absolute -top-6 -left-6 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-display font-bold" animate={{
                rotate: [-5, 5, -5]
              }} transition={{
                duration: 3,
                repeat: Infinity
              }}>
                  Hello! 👋
                </motion.div>
                <motion.div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-4xl" animate={{
                rotate: [0, 10, 0]
              }} transition={{
                duration: 4,
                repeat: Infinity
              }}>
                  🎨
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-6 py-20 bg-card/50">
          <div className="container mx-auto max-w-4xl">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                My <span className="text-gradient-hero">Journey</span>
              </h2>
            </AnimatedSection>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

              {timeline.map((item, index) => <AnimatedSection key={item.year} delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
                  <motion.div className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} whileHover={{
                scale: 1.02
              }}>
                    {/* Content */}
                    <div className={`flex-1 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <span className="text-primary font-display font-bold text-xl">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-display font-bold mt-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Dot */}
                    <motion.div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10" whileHover={{
                  scale: 1.5
                }} />

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                </AnimatedSection>)}
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="px-6 py-20">
          <div className="container mx-auto max-w-7xl">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                Fun <span className="text-gradient-lime">Facts</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                A few things that make me, well... me!
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {funFacts.map((item, index) => <AnimatedSection key={index} delay={index * 0.1} direction="scale">
                  <motion.div className="p-6 bg-card rounded-3xl border border-border/50 hover:border-primary/50 transition-colors" whileHover={{
                y: -5,
                rotate: index % 2 === 0 ? 1 : -1
              }}>
                    <span className="text-4xl">{item.emoji}</span>
                    <p className="text-foreground mt-4 font-display">
                      {item.fact}
                    </p>
                  </motion.div>
                </AnimatedSection>)}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>;
};
export default About;