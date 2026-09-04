import React, { useEffect, useRef, useState } from 'react';
import { 
  Github, Linkedin, Mail, ExternalLink, Code, Database, 
  Cloud, Shield, Award, GraduationCap, Briefcase, Download,
  Sparkles, ArrowRight, Wrench, Zap, Rocket, Eye
} from 'lucide-react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import emailjs from '@emailjs/browser';

function App() {
  // ===== SCROLL STATE =====
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // ===== EMAILJS STATE =====
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
  console.warn('⚠️ EmailJS keys are missing. Check your .env file.');
}
  // ===== REFS =====
  const nameRef = useRef(null);
  const titleRef = useRef(null);

  // ===== TYPING ANIMATION =====
  useEffect(() => {
    const nameTyped = new Typed(nameRef.current, {
      strings: ['Shreenidhi'],
      typeSpeed: 80,
      backSpeed: 50,
      loop: false,
      showCursor: false,
      cursorChar: '|',
    });

    const titleTyped = new Typed(titleRef.current, {
      strings: [
        'MCA Graduate from PES University',
        'Full Stack Developer at RealityArc',
        'Java · React · Angular',
        'ML Enthusiast',
        'IEEE Researcher',
        'ET-AI Hackathon Semi-Finalist'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      nameTyped.destroy();
      titleTyped.destroy();
    };
  }, []);

  // ===== SCROLL EFFECTS =====
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);
      setScrolled(window.scrollY > 50);
      setShowTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ===== SCROLL TO TOP =====
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ===== PARTICLES =====
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  // ===== COPY EMAIL =====
  const copyEmail = () => {
    navigator.clipboard.writeText('shreenidhianantbhat@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ===== SEND EMAIL =====
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formRef.current,
      EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        formRef.current.reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      },
      () => {
        setSubmitStatus('error');
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    );
  };

  // ===== DATA =====
  const projects = [
    {
      title: 'Secure Carbon-Aware Scheduler',
      tech: ['Python', 'ML', 'Optimization'],
      description: 'Published in IEEE ICSCSS 2026. ML-based carbon intensity prediction with security compliance (GDPR/HIPAA) for cloud workload scheduling.',
      link: 'https://github.com/rootsiren/Secure-carbon-aware-scheduler',
      highlight: 'IEEE Xplore'
    },
    {
      title: 'KANBAN Flow',
      tech: ['Angular', 'Node.js', 'MongoDB', 'Bootstrap'],
      description: 'Full-stack Kanban application with drag-drop task management and RESTful APIs.',
      link: 'https://github.com/rootsiren/KanBan-Flow-Angular_Based_FullStack_Project',
      highlight: 'Live Demo'
    },
    {
      title: 'Udemy Course Success Predictor',
      tech: ['Python', 'Scikit-learn', 'SVM'],
      description: 'Machine learning model achieving 89% accuracy in predicting course success.',
      link: 'https://github.com/rootsiren/Machine_Learning_model_Udemy_Course_Success_Predictor',
      highlight: '89% Accuracy'
    },
    {
      title: 'Astro11 Backend Optimization',
      tech: ['Node.js', 'Python'],
      description: 'Stabilized production backend, fixed critical bugs, and optimized API performance.',
      link: null,
      highlight: 'Production Impact'
    }
  ];

  const skills = [
    'Java', 'Python', 'Angular', 'React', 'MySQL', 'Machine Learning', 'Linux'
  ];

 
  // ===== ANIMATION VARIANTS =====
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans antialiased">
      
      {/* ===== PARTICLES BACKGROUND ===== */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="fixed inset-0 -z-10 pointer-events-none"
        options={{
          particles: {
            number: { value: 30 },
            size: { value: 2 },
            opacity: { value: 0.2 },
            move: { speed: 0.5, direction: 'none', random: true },
            color: { value: '#3b82f6' },
            links: { enable: false }
          },
          interactivity: {
            events: {
              onHover: { enable: false }
            }
          }
        }}
      />

      {/* ===== SCROLL PROGRESS BAR ===== */}
      <div 
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ===== NAVIGATION ===== */}
      <nav className={`fixed top-0 w-full bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-white/5 z-40 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span className={`font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-all duration-300 ${scrolled ? 'text-base' : 'text-xl'}`}>
            Shreenidhi
          </span>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#work" className="text-gray-400 hover:text-white transition">Work</a>
            <a href="#services" className="text-gray-400 hover:text-white transition">Services</a>
            <a href="#paper" className="text-gray-400 hover:text-white transition">Paper</a>
            <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
          </div>
          <a href="#contact" className={`px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-sm font-medium transition hidden md:block shadow-lg shadow-blue-500/20 ${scrolled ? 'py-1.5 text-xs' : ''}`}>
            Hire Me
          </a>
        </div>
      </nav>

      {/* ===== main ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen flex items-center relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                RealityArc Systems
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 text-yellow-400 text-sm">
                <Sparkles size={14} />
                Open for Freelancing
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm{' '}
              <span 
                ref={nameRef}
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              ></span>
            </h1>
            <div className="text-xl text-gray-400 mt-4 h-8">
              <span ref={titleRef}></span>
            </div>
            <p className="text-gray-500 mt-4 max-w-md leading-relaxed">
              Building secure, scalable web apps with a conscience for sustainability.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#work" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg font-medium transition flex items-center gap-2 shadow-lg shadow-blue-500/20">
                View Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="px-6 py-3 border border-white/10 hover:border-white/30 rounded-lg transition hover:bg-white/5">
                Let's Talk
              </a>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="https://github.com/rootsiren" target="_blank" className="text-gray-400 hover:text-white transition p-2 border border-white/10 rounded-lg hover:border-white/30">
                <Github size={22} />
              </a>
              <a href="https://linkedin.com/in/shreenidhi-bhat-35002127a" target="_blank" className="text-gray-400 hover:text-white transition p-2 border border-white/10 rounded-lg hover:border-white/30">
                <Linkedin size={22} />
              </a>
              <button onClick={copyEmail} className="text-gray-400 hover:text-white transition p-2 border border-white/10 rounded-lg hover:border-white/30 relative" title="Copy Email">
                {copied ? <Mail size={22} className="text-green-400" /> : <Mail size={22} />}
              </button>
              <a 
                href="/Shreenidhi_resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition p-2 border border-white/10 rounded-lg hover:border-white/30"
                title="View Resume"
              >
                <Eye size={22} />
              </a>
              <a 
                href="Shreenidhi_resume.pdf" 
                download 
                className="text-gray-400 hover:text-white transition p-2 border border-white/10 rounded-lg hover:border-white/30"
                title="Download Resume"
              >
                <Download size={22} />
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-2xl animate-pulse-glow rounded-full"></div>
              <div className="absolute -top-3 -right-3 text-yellow-400 text-xl animate-sparkle-1 z-10">✦</div>
              <div className="absolute -bottom-3 -left-3 text-blue-400 text-lg animate-sparkle-2 z-10">✦</div>
              <div className="absolute top-1/2 -right-5 text-purple-400 text-sm animate-sparkle-3 z-10">✦</div>
              <div className="absolute top-1/2 -left-5 text-pink-400 text-sm animate-sparkle-1 z-10">✦</div>
              <div className="absolute top-0 -right-6 text-emerald-400 text-xs animate-sparkle-2 z-10">✦</div>
              <div className="absolute bottom-0 -left-6 text-orange-400 text-xs animate-sparkle-3 z-10">✦</div>
              <div className="relative w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-white/5 p-1 animate-float overflow-hidden">
                <img 
                  src="/profile.png" 
                  alt="Shreenidhi" 
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-4 py-2 shadow-lg shadow-blue-500/20 animate-pulse-slow z-10">
                <span className="text-sm font-bold whitespace-nowrap">● Available</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ===== STATS ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="border-y border-white/5 py-8 px-6 relative z-10"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="group hover:scale-105 transition">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">4+</div>
            <div className="text-sm text-gray-500">Projects</div>
          </div>
          <div className="group hover:scale-105 transition">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">●</div>
            <div className="text-sm text-gray-500">Currently Working</div>
            <div className="text-xs text-gray-600">RealityArc System</div>
          </div>
          <div className="group hover:scale-105 transition">
            <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">ET</div>
            <div className="text-sm text-gray-500">Hackathon</div>
            <div className="text-xs text-gray-600">Semi-Finalist</div>
          </div>
          <div className="group hover:scale-105 transition">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">1</div>
            <div className="text-sm text-gray-500">IEEE Publication</div>
          </div>
        </div>
      </motion.section>

     
      {/* ===== SERVICES ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        id="services"
        className="py-20 px-6 max-w-6xl mx-auto border-t border-white/5 relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">How I Can <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Help You</span></h2>
          <p className="text-gray-500 mt-2">Flexible engagement models tailored to your needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="tilt-card bg-white/5 border border-white/5 rounded-xl p-8 text-center hover:border-blue-500/30 hover:bg-white/10 transition hover:scale-[1.02]">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
              <Wrench size={24} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Bug Fixing & Optimization</h3>
            <p className="text-gray-400 text-sm">Debug and fix React/Angular/Java apps with performance tuning.</p>
            <p className="text-sm text-gray-500 mt-4">Hourly or project-based</p>
            <a href="#contact" className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg text-sm font-medium transition shadow-lg shadow-blue-500/20">
              Let's Talk
            </a>
          </div>
          <div className="tilt-card bg-white/5 border border-blue-500/30 rounded-xl p-8 text-center hover:scale-[1.02] transition shadow-lg shadow-blue-500/10 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xs font-bold">POPULAR</div>
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 flex items-center justify-center mx-auto mb-4">
              <Zap size={24} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Feature Development</h3>
            <p className="text-gray-400 text-sm">Build complete features from API design to polished UI.</p>
            <p className="text-sm text-gray-500 mt-4">Fixed-price per feature</p>
            <a href="#contact" className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-sm font-medium transition shadow-lg shadow-purple-500/20">
              Let's Talk
            </a>
          </div>
          <div className="tilt-card bg-white/5 border border-white/5 rounded-xl p-8 text-center hover:border-blue-500/30 hover:bg-white/10 transition hover:scale-[1.02]">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
              <Rocket size={24} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Full MVP Build</h3>
            <p className="text-gray-400 text-sm">End-to-end web app development from scratch to deployment.</p>
            <p className="text-sm text-gray-500 mt-4">Custom quote based on scope</p>
            <a href="#contact" className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 rounded-lg text-sm font-medium transition shadow-lg shadow-emerald-500/20">
              Let's Talk
            </a>
          </div>
        </div>
      </motion.section>

      {/* ===== PAPER ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        id="paper"
        className="py-20 px-6 max-w-6xl mx-auto border-t border-white/5 relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Research Paper</span></h2>
          <p className="text-gray-500 mt-2">Published in IEEE Xplore</p>
        </div>
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-white/10 transition-all">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm shrink-0">
              IEEE
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                A Carbon-Optimal and Security-Compliant Scheduler for Cloud Workloads using Region-Specific ML Models
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                <span className="text-white font-medium">IEEE ICSCSS 2026</span> | Coimbatore, India | July 2026
              </p>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                ML-based carbon intensity prediction + security compliance (GDPR/HIPAA) for optimizing workload placement across distributed cloud data centers.
              </p>
              <div className="flex flex-wrap gap-3 mt-3">
                <a 
                  href="http://ieeexplore.ieee.org/document/11646091" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-sm font-medium transition shadow-lg shadow-blue-500/20"
                >
                  <ExternalLink size={16} /> View on IEEE Xplore
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                © 2026 IEEE. Personal use of this material is permitted. 
                Permission from IEEE must be obtained for all other uses.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ===== PROJECTS ===== */}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
  id="work"
  className="py-20 px-6 max-w-6xl mx-auto border-t border-white/5 relative z-10"
>
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold">Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span></h2>
    <p className="text-gray-500 mt-2">A selection of work I'm proud of</p>
  </div>
  <div className="grid md:grid-cols-2 gap-6">
    {projects.map((project, index) => (
      <div key={index} className="tilt-card bg-white/5 border border-white/5 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <span className="text-xs px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 whitespace-nowrap ml-2">
            {project.highlight}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-300 border border-white/5 hover:border-blue-500/20 transition">{tech}</span>
          ))}
        </div>
      
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
            View Project <ExternalLink size={14} />
          </a>
        )}
      </div>
    ))}
  </div>
</motion.section>
      {/* ===== ABOUT ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        id="about"
        className="py-20 px-6 max-w-6xl mx-auto border-t border-white/5 relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span></h2>
            <p className="text-gray-400 leading-relaxed">
              I'm a Full Stack Developer currently working at <span className="text-green-400">RealityArc System Pvt Ltd</span>. 
              I hold an MCA from PES University, Bengaluru (CGPA: 8.5) and specialize in Java, React, and Angular.
            </p>
            <p className="text-gray-400 leading-relaxed mt-4">
              I'm an <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-semibold">ET-AI Hackathon Semi-Finalist</span> and an IEEE researcher. 
              My work on carbon-aware scheduling was published at <span className="text-blue-400">IEEE ICSCSS 2026</span>.
            </p>
            <p className="text-gray-400 leading-relaxed mt-2">
              Previously: Full Stack Developer Intern at Digi Yogi · Frontend Developer Intern at Global Solution Makers.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="bg-white/5 border border-white/5 rounded-lg px-4 py-2 text-sm flex items-center gap-2 hover:border-blue-500/30 transition">
                <GraduationCap size={18} className="text-blue-400" /> MCA · PESU '26
              </span>
              <span className="bg-white/5 border border-white/5 rounded-lg px-4 py-2 text-sm flex items-center gap-2 hover:border-yellow-500/30 transition">
                <Award size={18} className="text-yellow-400" /> ET-AI Semi-Finalist
              </span>
              <span className="bg-white/5 border border-white/5 rounded-lg px-4 py-2 text-sm flex items-center gap-2 hover:border-purple-500/30 transition">
                <Award size={18} className="text-purple-400" /> CNR Award x2
              </span>
              <span className="bg-white/5 border border-white/5 rounded-lg px-4 py-2 text-sm flex items-center gap-2 hover:border-green-500/30 transition">
                <Briefcase size={18} className="text-green-400" /> 2 Internships
              </span>
              <span className="bg-white/5 border border-white/5 rounded-lg px-4 py-2 text-sm flex items-center gap-2 hover:border-blue-500/30 transition">
                <Shield size={18} className="text-blue-400" /> IEEE Paper
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <span key={i} className="bg-white/5 border border-white/5 rounded-lg px-4 py-2 text-sm text-gray-300 hover:border-blue-500/30 hover:bg-white/10 transition">
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <a 
                href="/Shreenidhi_resume.pdf" 
                download 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition shadow-lg shadow-blue-500/20"
              >
                <Download size={18} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ===== CONTACT ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        id="contact"
        className="py-20 px-6 max-w-4xl mx-auto border-t border-white/5 relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span></h2>
          <p className="text-gray-500 mt-2">Have a project? Let's talk.</p>
        </div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-center hover:border-blue-500/30 transition">
            <Mail size={20} className="text-blue-400 mx-auto mb-2" />
            <p className="text-sm text-gray-400">Email</p>
            <p className="text-sm text-white">shreenidhianantbhat@gmail.com</p>
          </div>
          <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-center hover:border-blue-500/30 transition">
            <Linkedin size={20} className="text-blue-400 mx-auto mb-2" />
            <p className="text-sm text-gray-400">LinkedIn</p>
            <a href="https://linkedin.com/in/shreenidhi-bhat-35002127a" target="_blank" className="text-sm text-blue-400 hover:text-blue-300 transition">
              Connect with me
            </a>
          </div>
          <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-center hover:border-blue-500/30 transition">
            <Github size={20} className="text-blue-400 mx-auto mb-2" />
            <p className="text-sm text-gray-400">GitHub</p>
            <a href="https://github.com/rootsiren" target="_blank" className="text-sm text-blue-400 hover:text-blue-300 transition">
              See my code
            </a>
          </div>
        </div>

        <div className="bg-white/5 border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Your Name</label>
              <input 
                type="text" 
                name="user_name" 
                required
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email Address</label>
              <input 
                type="email" 
                name="user_email" 
                required
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Subject</label>
              <input 
                type="text" 
                name="user_subject"
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition"
                placeholder="Project inquiry"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Message</label>
              <textarea 
                name="user_message" 
                required
                rows="4"
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition resize-none"
                placeholder="Tell me about your project, timeline, and budget..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition flex items-center justify-center gap-2 group disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message '}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </button>
            
            {submitStatus === 'success' && (
              <div className="flex items-center justify-center gap-2 text-green-400 text-sm bg-green-400/10 border border-green-400/20 rounded-lg py-3">
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="flex items-center justify-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg py-3">
                ❌ Something went wrong. Please try again or email me directly.
              </div>
            )}
            
            <p className="text-center text-xs text-gray-500">I'll respond within 24 hours</p>
          </form>
        </div>
      </motion.section>

      {/* ===== BACK TO TOP BUTTON ===== */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full shadow-lg shadow-blue-500/30 transition-all hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowRight size={20} className="rotate-[-90deg]" />
        </button>
      )}

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/5 py-8 px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-500">© 2026 Shreenidhi Bhat. Built with React + Tailwind</p>
          <div className="flex justify-center gap-6 mt-3 text-sm">
            <a href="https://github.com/rootsiren" target="_blank" className="text-gray-500 hover:text-white transition">GitHub</a>
            <a href="https://linkedin.com/in/shreenidhi-bhat-35002127a" target="_blank" className="text-gray-500 hover:text-white transition">LinkedIn</a>
            <a href="mailto:shreenidhianantbhat@gmail.com" className="text-gray-500 hover:text-white transition">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;