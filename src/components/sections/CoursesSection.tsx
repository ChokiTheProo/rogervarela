import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Terminal, ShoppingCart, Award, CheckCircle, BookOpen, Code, Globe, Brain, GraduationCap, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Course {
  id: string;
  title: { pt: string; en: string };
  subtitle: { pt: string; en: string };
  description: { pt: string; en: string };
  features: { pt: string[]; en: string[] };
  icon: typeof Terminal;
  gradient: string;
  buyUrl?: string;
  comingSoon?: boolean;
}

const courses: Course[] = [
  {
    id: 'windows-commands',
    title: { pt: 'Comandos Windows', en: 'Windows Commands' },
    subtitle: { pt: 'Do básico ao avançado', en: 'From basics to advanced' },
    description: {
      pt: 'Domine o terminal do Windows e aumente sua produtividade. Aprenda comandos essenciais, automação de tarefas e técnicas avançadas de administração de sistemas.',
      en: 'Master the Windows terminal and boost your productivity. Learn essential commands, task automation, and advanced system administration techniques.'
    },
    features: {
      pt: [
        'Comandos essenciais do Windows',
        'Automação de tarefas com scripts',
        'Gerenciamento de arquivos e pastas',
        'Configurações avançadas do sistema',
        'Dicas de produtividade',
        'Certificado de conclusão',
      ],
      en: [
        'Essential Windows commands',
        'Task automation with scripts',
        'File and folder management',
        'Advanced system settings',
        'Productivity tips',
        'Completion certificate',
      ]
    },
    icon: Terminal,
    gradient: 'from-primary to-violet-500',
    buyUrl: 'https://pay.hotmart.com/V99843637T?checkoutMode=10',
  },
  {
    id: 'web-development',
    title: { pt: 'Desenvolvimento Web', en: 'Web Development' },
    subtitle: { pt: 'HTML, CSS e JavaScript', en: 'HTML, CSS and JavaScript' },
    description: {
      pt: 'Aprenda a criar websites modernos e responsivos do zero. Domine as tecnologias fundamentais da web e construa projetos incríveis.',
      en: 'Learn to create modern and responsive websites from scratch. Master the fundamental web technologies and build amazing projects.'
    },
    features: {
      pt: [
        'HTML5 semântico e acessível',
        'CSS3 moderno e Flexbox/Grid',
        'JavaScript ES6+',
        'Projetos práticos reais',
        'Boas práticas de código',
        'Certificado de conclusão',
      ],
      en: [
        'Semantic and accessible HTML5',
        'Modern CSS3 and Flexbox/Grid',
        'JavaScript ES6+',
        'Real practical projects',
        'Code best practices',
        'Completion certificate',
      ]
    },
    icon: Code,
    gradient: 'from-blue-500 to-cyan-500',
    comingSoon: true,
  },
  {
    id: 'ai-fundamentals',
    title: { pt: 'Fundamentos de IA', en: 'AI Fundamentals' },
    subtitle: { pt: 'Inteligência Artificial na prática', en: 'AI in practice' },
    description: {
      pt: 'Entenda os conceitos fundamentais de Inteligência Artificial e aprenda a utilizar ferramentas de IA no seu dia a dia profissional.',
      en: 'Understand the fundamental concepts of Artificial Intelligence and learn to use AI tools in your professional daily life.'
    },
    features: {
      pt: [
        'Conceitos de Machine Learning',
        'Uso prático de ChatGPT e IA',
        'Automação com ferramentas de IA',
        'Ética e responsabilidade em IA',
        'Projetos práticos',
        'Certificado de conclusão',
      ],
      en: [
        'Machine Learning concepts',
        'Practical use of ChatGPT and AI',
        'Automation with AI tools',
        'Ethics and responsibility in AI',
        'Practical projects',
        'Completion certificate',
      ]
    },
    icon: Brain,
    gradient: 'from-purple-500 to-pink-500',
    comingSoon: true,
  },
];

export function CoursesSection() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCourse, setActiveCourse] = useState(courses[0].id);

  const currentCourse = courses.find(c => c.id === activeCourse) || courses[0];
  const IconComponent = currentCourse.icon;

  const handleBuyClick = (url?: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">
              {language === 'pt' ? 'Meus Cursos' : 'My Courses'}
            </span>
          </h2>
          <p className="section-subtitle mx-auto">
            {language === 'pt' 
              ? 'Aprenda habilidades práticas com meus cursos online'
              : 'Learn practical skills with my online courses'}
          </p>
        </motion.div>

        {/* Course Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <Tabs value={activeCourse} onValueChange={setActiveCourse} className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0">
              {courses.map((course) => {
                const CourseIcon = course.icon;
                return (
                  <TabsTrigger
                    key={course.id}
                    value={course.id}
                    className="relative data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full border border-border/50 bg-card/50 hover:border-primary/50 transition-all"
                  >
                    <CourseIcon className="w-4 h-4 mr-2" />
                    {course.title[language]}
                    {course.comingSoon && (
                      <span className="absolute -top-2 -right-2 px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-accent text-accent-foreground">
                        {language === 'pt' ? 'EM BREVE' : 'SOON'}
                      </span>
                    )}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Course Card */}
        <motion.div
          key={activeCourse}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-8 rounded-3xl bg-gradient-card border border-primary/30 overflow-hidden">
            {/* Background decoration */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${currentCourse.gradient} opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`} />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Course info */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                  <Award className="w-4 h-4" />
                  {language === 'pt' ? 'Curso Online' : 'Online Course'}
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentCourse.gradient} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-foreground">
                      {currentCourse.title[language]}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {currentCourse.subtitle[language]}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  {currentCourse.description[language]}
                </p>

                {currentCourse.comingSoon ? (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-accent/10 border border-accent/20">
                    <GraduationCap className="w-6 h-6 text-accent" />
                    <div>
                      <p className="font-medium text-foreground">
                        {language === 'pt' ? 'Em Desenvolvimento' : 'In Development'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {language === 'pt' ? 'Disponível em breve!' : 'Available soon!'}
                      </p>
                    </div>
                  </div>
                ) : (
                  <Button 
                    onClick={() => handleBuyClick(currentCourse.buyUrl)}
                    size="lg"
                    className={`w-full md:w-auto gap-2 bg-gradient-to-r ${currentCourse.gradient} hover:opacity-90 shadow-lg shadow-primary/25`}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {language === 'pt' ? 'Comprar Agora' : 'Buy Now'}
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                )}
              </div>

              {/* Right side - Features */}
              <div className="space-y-3">
                {currentCourse.features[language].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border/50"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { value: '3+', label: language === 'pt' ? 'Cursos' : 'Courses', icon: BookOpen },
            { value: '100+', label: language === 'pt' ? 'Horas de Conteúdo' : 'Hours of Content', icon: Award },
            { value: '∞', label: language === 'pt' ? 'Acesso Vitalício' : 'Lifetime Access', icon: GraduationCap },
            { value: '100%', label: language === 'pt' ? 'Online' : 'Online', icon: Globe },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="text-center p-4 rounded-xl bg-card/50 border border-border/30"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
