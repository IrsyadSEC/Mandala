import React, { useState, useEffect, useRef } from "react";
import './styles.css';
import { createRoot } from "react-dom/client";
import { 
  Shield, 
  Menu, 
  X, 
  ChevronRight, 
  Terminal, 
  BookOpen, 
  Scale, 
  ArrowRight, 
  CheckCircle2, 
  Calendar,
  Linkedin,
  Mail,
  ExternalLink,
  GraduationCap,
  Check,
  Target,
  Zap,
  FileText,
  Lock,
  Briefcase,
  Cpu,
  PlayCircle,
  ClipboardList,
  FileCode,
  RefreshCw,
  Users,
  Code2,
  Heart,
  Lightbulb,
  Hammer,
  Eye,
  Clock,
  MessageCircle
} from "lucide-react";

// --- Configuration ---
const EDUCATION_DISCOUNT = 20;
const SESSION_STORAGE_KEY = 'mandala_edu_eligible';

// --- Components ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-us" },
    { name: "Services", href: "#services" },
    { name: "Timeline", href: "#timeline" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="logo-area">
           <img 
             src="/img/mandala.png" 
             alt="Mandala Siber" 
             className="logo-img-header"
             onError={(e) => {
               e.currentTarget.style.display = 'none';
               e.currentTarget.parentElement.innerHTML = '<span style="color:var(--primary);font-weight:900;">MS</span>';
             }}
           />
          <span>MANDALA SIBER</span>
        </a>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem' }}>
            Join / Contact
          </a>
        </nav>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#contact" 
          className="btn btn-primary" 
          onClick={() => setIsMenuOpen(false)}
        >
          Join / Contact
        </a>
      </div>
    </header>
  );
};

const Hero = () => {
  const logoContainerRef = useRef<HTMLDivElement>(null);

  // Parallax effect for desktop
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!logoContainerRef.current || window.innerWidth < 992) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate offset from center
      const x = (clientX - innerWidth / 2) / 25; // Division controls speed (higher = slower)
      const y = (clientY - innerHeight / 2) / 25;
      
      const logo = logoContainerRef.current.querySelector('.hero-logo-img') as HTMLElement;
      if (logo) {
        logo.style.transform = `translate(${x}px, ${y}px) perspective(1000px) rotateY(${x * 0.5}deg) rotateX(${-y * 0.5}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          
          {/* Left Box: Logo with Parallax */}
          <div className="hero-visual" ref={logoContainerRef}>
            <div className="logo-parallax-container">
              <div className="hero-bg-glow"></div>
              <img 
                src="/img/mandala.png" 
                alt="Mandala Siber Shield Logo" 
                className="hero-logo-img"
                onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    // Fallback svg
                    if(logoContainerRef.current) {
                        logoContainerRef.current.innerHTML = `
                            <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" style="filter: drop-shadow(0 0 20px rgba(59,130,246,0.5));"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        `;
                    }
                }}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="hero-content">
            <h1 className="text-gradient">Mandala Siber</h1>
            <p className="hero-tagline">
              Not just breaking things — but building what matters.
            </p>
            <p className="hero-subtext">
              Offensive security research, hands-on training, and cyberlaw consulting from Indonesian practitioners.
            </p>
            <div className="hero-actions">
              <a href="#services" className="btn btn-primary">
                Explore Services <ChevronRight size={16} style={{ marginLeft: '8px' }} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Free Consultation
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-panel)' }}>
      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>About the Collective</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Founded in 2025, Mandala Siber is an Indonesian cybersecurity collective dedicated to elevating the local information security landscape. 
            We combine technical offensive expertise with a strong ethical framework to not only identify vulnerabilities but to foster a culture of resilience. 
            Our mission is to empower organizations and individuals through actionable research and legal awareness.
          </p>
          <div className="founder-quote">
            "We don't just want to find the cracks; we want to teach the foundation how to hold."
            <span className="founder-attr">— Founder, Mandala Siber</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Why Choose Us Data ---

const whyUsData = [
    {
        icon: <Shield size={32} />,
        title: "Authentic Offensive Security",
        desc: "We are not a vendor that simply runs automated scanners and copy-pastes reports. Our approach is built by practitioners who understand real-world attack vectors—logic flaws, not just surface-level bugs."
    },
    {
        icon: <Target size={32} />,
        title: "Quality Over Quantity",
        desc: "We don't compete on the number of vulnerabilities found. We focus on mapping realistic attack chains—from entry to escalation. You get remediable findings and risk prioritization, not noise."
    },
    {
        icon: <Zap size={32} />,
        title: "Real Attacker Methodology",
        desc: "Combining OWASP, PTES, Threat Modeling, and Adversary Simulation. We demonstrate exactly 'how' you can be breached, including cloud-aware attack paths (GCP/AWS)."
    },
    {
        icon: <Terminal size={32} />,
        title: "Skill-Based Training",
        desc: "90% Hands-on. Participants use real tools (Burp, Nmap, Frida) in realistic scenarios (API abuse, mobile tampering). We build practitioners, not just certificate holders."
    },
    {
        icon: <PlayCircle size={32} />,
        title: "Proven Attack Playback",
        desc: "We replay authentic attack sequences with step-by-step PoCs and logs so your team can validate fixes and close the loop fast."
    },
    {
        icon: <ClipboardList size={32} />,
        title: "Prioritized Fix Plans",
        desc: "Every finding comes with a clear ‘what to fix, why, and how’ ranked by risk to your revenue, user data, and uptime."
    },
    {
        icon: <FileCode size={32} />,
        title: "Developer-Friendly Deliverables",
        desc: "Dev-ready tickets, code snippets, and configuration examples. Reports include example patches and test cases that reduce back-and-forth and speed remediation."
    },
    {
        icon: <RefreshCw size={32} />,
        title: "Adaptive Red Teaming",
        desc: "We continuously adjust tactics based on your environment and defenses to uncover gaps that static tests miss."
    },
    {
        icon: <Users size={32} />,
        title: "Hands-On Team Upskilling",
        desc: "Training modules include live exploit labs, blue-team countermeasures, and remediation clinics tailored to your codebase and infra."
    },
    {
        icon: <FileText size={32} />,
        title: "Actionable Intelligence",
        desc: "No confusing jargon. Our reports include Proof of Concept (PoC), business risk analysis, and clear remediation guides that engineering teams can actually use."
    },
    {
        icon: <Lock size={32} />,
        title: "Independent & Objective",
        desc: "We are not hardware resellers or software affiliates. Our recommendations are 100% unbiased and focused solely on improving your security posture."
    },
    {
        icon: <GraduationCap size={32} />,
        title: "Education Sector Support",
        desc: "Schools and universities are targets too. We provide dedicated pricing for the education sector without compromising assessment quality."
    },
    {
        icon: <Cpu size={32} />,
        title: "Our Philosophy",
        desc: "'Offense teaches defense.' To secure something, you must understand how it breaks. We are a movement building a generation of disciplined, ethical engineers."
    }
];

const WhyChooseUs = () => {
    return (
        <section id="why-us" className="section-padding">
            <div className="container">
                <h2 className="text-gradient" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>Why Partner with Mandala Siber?</h2>
                <div className="why-grid">
                    {whyUsData.map((item, index) => (
                        <div key={index} className="why-card">
                            <div className="why-icon">{item.icon}</div>
                            <h3 className="why-title">{item.title}</h3>
                            <p className="why-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Service Data & Types ---

interface ServiceItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  checklist: string[];
  fullDetail: string;
  comingSoon?: boolean;
}

const servicesData: ServiceItem[] = [
  {
    id: 'offensive',
    title: 'Offensive Security',
    icon: <Terminal size={40} />,
    description: 'Advanced penetration testing and red teaming operations designed to simulate real-world adversaries.',
    fullDetail: 'Our offensive security team uses adversarial simulation to test your defenses against sophisticated attacks. We go beyond automated scans to find logic flaws and complex vulnerabilities.',
    checklist: [
      'Infrastructure & Network Penetration Testing',
      'Web & Mobile Application Assessment',
      'Cloud Security Configuration Review',
      'Red Teaming & Adversary Emulation'
    ]
  },
  {
    id: 'secure-dev',
    title: 'Secure Development & Engineering',
    icon: <Code2 size={40} />,
    description: 'Building robust web applications and systems with security baked into the code from day one.',
    fullDetail: 'We don’t just break code; we write it. Our Secure Development service creates high-performance, secure-by-design web applications and infrastructure using modern frameworks and hardened practices.',
    checklist: [
      'Secure Web Application Development',
      'Secure SDLC Implementation',
      'Code Review & Remediation',
      'Post-Deployment Hardening'
    ]
  },
  {
    id: 'training',
    title: 'Training & Education',
    icon: <BookOpen size={40} />,
    description: 'Hands-on workshops and knowledge sharing for the next generation of ethical hackers.',
    fullDetail: 'We believe in open knowledge. Our training programs are built by practitioners for practitioners, focusing on real-world scenarios rather than theory alone.',
    checklist: [
      'Offensive Security Fundamentals',
      'Advanced Web Exploitation Workshops',
      'Corporate Security Awareness Programs',
      'Mentorship for Aspiring Researchers'
    ]
  },
  {
    id: 'cyberlaw',
    title: 'Cyberlaw Consulting',
    icon: <Scale size={40} />,
    description: 'Navigating the legal complexities of cybersecurity in Indonesia.',
    fullDetail: 'Cybersecurity is not just technical; it is legal. We help organizations navigate Indonesian regulations like UU PDP (PDP Law) and UU ITE.',
    comingSoon: true,
    checklist: [
      'Regulatory Compliance Assessment (UU PDP)',
      'Incident Response Legal Frameworks',
      'Policy Development & Governance',
      'Digital Forensics Support'
    ]
  }
];

const Services = ({ 
  isEduEligible, 
  onPrefillRequest 
}: { 
  isEduEligible: boolean, 
  onPrefillRequest: (subject: string, message: string) => void 
}) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle modal focus trap and escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    if (activeModal) {
        window.addEventListener('keydown', handleKeyDown);
        // Simple focus set
        setTimeout(() => modalRef.current?.focus(), 100);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal]);

  const openModal = (id: string) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  const handleDiscountCheck = (serviceName: string) => {
    closeModal();
    const subject = `Request: ${serviceName} — Education Discount Inquiry`;
    const msg = `Hello Mandala Siber,\n\nWe are an Education organization and would like to inquire about ${serviceName}.\n\nPlease advise on eligibility and discounted pricing.`;
    onPrefillRequest(subject, msg);
  };

  const handleFreeConsultation = (serviceName: string) => {
    closeModal();
    const subject = `Claim: Free 20-Min Consultation (${serviceName})`;
    const msg = `I am interested in claiming the free 20-minute consultation for ${serviceName}. Please contact me to schedule.`;
    onPrefillRequest(subject, msg);
  };

  const activeService = servicesData.find(s => s.id === activeModal);

  return (
    <section id="services" className="section-padding" style={{ background: 'var(--bg-panel)' }}>
      <div className="container">
        <h2 className="text-gradient">Core Competencies</h2>
        <div className="services-grid">
          
          {servicesData.map((service) => (
            <button 
                key={service.id}
                className="card" 
                onClick={() => openModal(service.id)}
                style={service.comingSoon ? { borderStyle: 'dashed' } : {}}
                aria-label={`View details for ${service.title}`}
            >
                {isEduEligible && (
                    <div className="badge-edu">
                        <GraduationCap size={12} /> Edu Eligible
                    </div>
                )}
                
                <div className="card-icon">
                    {service.icon}
                </div>
                <h3>
                    {service.title} 
                    {service.comingSoon && <span className="coming-soon-badge">Coming Soon</span>}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', textAlign: 'left', marginBottom: '1rem' }}>
                    {service.description}
                </p>
                <ul className="card-list">
                    {service.checklist.slice(0, 2).map((item, i) => (
                        <li key={i}><CheckCircle2 size={16} color="var(--primary)" style={{minWidth:'16px'}} /> {item}</li>
                    ))}
                </ul>
                <div className="card-cta">
                    View Details <ArrowRight size={16} />
                </div>
            </button>
          ))}

        </div>
      </div>

      {/* Modal Overlay */}
      {activeModal && activeService && (
        <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div 
                className="modal-content" 
                onClick={e => e.stopPropagation()}
                ref={modalRef}
                tabIndex={-1}
            >
                <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                    <X size={24} />
                </button>

                {isEduEligible && (
                    <div className="modal-header-badge">
                        <GraduationCap size={18} />
                        <span>Education discount available</span>
                    </div>
                )}

                <h3 id="modal-title" style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    {activeService.title}
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{activeService.fullDetail}</p>

                <ul className="modal-checklist">
                    {activeService.checklist.map((item, i) => (
                        <li key={i}>
                            <Check size={18} color="var(--primary)" style={{ marginTop: '4px' }} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="modal-pricing-note">
                    <p style={{ marginBottom: '0.5rem' }}>
                        {isEduEligible ? (
                            <>
                                <span className="highlight-discount">Education Discount — {EDUCATION_DISCOUNT}% off</span> on selected services (T&C apply).
                                <br />
                                <span style={{ fontSize: '0.8rem' }}>Discount applies to accredited educational institutions; Mandala Siber reserves the right to verify status.</span>
                            </>
                        ) : (
                            "Contact us for a tailored quote. Education Discount — 20% off for qualifying institutions."
                        )}
                    </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
                    <a 
                        href="#contact" 
                        onClick={closeModal}
                        className="btn btn-primary"
                    >
                        Get Proposal
                    </a>
                    
                    {activeService.id !== 'cyberlaw' && (
                        <button 
                            className="btn"
                            style={{ 
                                background: 'var(--success)', 
                                color: '#0f172a', 
                                border: 'none',
                                fontWeight: '700',
                                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                            }}
                            onClick={() => handleFreeConsultation(activeService.title)}
                        >
                            <Clock size={18} style={{ marginRight: '6px' }} /> 
                            Claim Free Consultation
                        </button>
                    )}

                    {isEduEligible && (
                        <button 
                            className="btn btn-secondary"
                            onClick={() => handleDiscountCheck(activeService.title)}
                        >
                            Check Education Discount
                        </button>
                    )}
                </div>
            </div>
        </div>
      )}

    </section>
  );
};

const VisionMission = () => {
  const missionPoints = [
    "Provide security testing and advisory work that’s honest, thorough, and grounded in real attacker behavior, not automated noise.",
    "Help teams strengthen their skills through practical, scenario based training that reflects the challenges they face every day.",
    "Support organizations in meeting industry and national regulations without losing sight of what actually matters to their business.",
    "Offer clarity during security incidents through structured guidance, clear priorities, and calm decision-making.",
    "Maintain full independence in every recommendation, ensuring our clients get advice that’s genuinely in their best interest.",
    "Contribute to the cybersecurity community through research, collaboration, and open sharing of knowledge."
  ];

  const values = [
    {
        title: "Clarity",
        text: "Security should be understandable, not overwhelming.",
        icon: <Lightbulb size={24} />
    },
    {
        title: "Trust",
        text: "We say what we mean and stand by our work.",
        icon: <Shield size={24} />
    },
    {
        title: "Craftsmanship",
        text: "Every engagement is handled with care and attention to detail.",
        icon: <Hammer size={24} />
    },
    {
        title: "Curiosity",
        text: "We keep learning, experimenting, and improving, always.",
        icon: <RefreshCw size={24} />
    },
    {
        title: "Responsibility",
        text: "We help build safer systems because people rely on them.",
        icon: <Heart size={24} />
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="text-gradient" style={{ marginBottom: '2rem' }}>Vision, Mission & Values</h2>
        
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <Eye size={24} /> Vision
          </h3>
          <div style={{ background: 'rgba(30, 41, 59, 0.4)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent)' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem', fontStyle: 'italic' }}>
              "To become the cornerstone of ethical hacking and security research in Southeast Asia. A digital ecosystem where security is proactive, not reactive."
            </p>
            <p style={{ fontSize: '1.1rem' }}>
              To shape a safer digital world where organizations can grow, build, and innovate with confidence, knowing their security foundation is strong, reliable, and built with purpose.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: '3rem' }}>
           <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <Target size={24} /> Mission
           </h3>
           <ul className="card-list" style={{ display: 'grid', gap: '0.5rem' }}>
             {missionPoints.map((point, idx) => (
                <li key={idx} style={{ fontSize: '1.05rem', alignItems: 'start', lineHeight: '1.5' }}>
                    <ChevronRight size={20} color="var(--accent)" style={{ marginRight: '10px', marginTop: '2px', flexShrink: 0 }}/> 
                    {point}
                </li>
             ))}
           </ul>
        </div>

        <div>
           <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <Heart size={24} /> Core Values
           </h3>
           <div className="values-grid">
              {values.map((val, idx) => (
                <div key={idx} className="value-card">
                    <div className="value-icon">{val.icon}</div>
                    <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>{val.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{val.text}</p>
                </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

const Timeline = () => {
  return (
    <section id="timeline" className="section-padding">
      <div className="container">
        
        {/* Latest Insights Mini Card */}
        <a 
          href="https://medium.com/mandala-siber" 
          target="_blank" 
          rel="noopener noreferrer"
          className="insights-card"
        >
           <div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>Latest Insights</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Read our latest research and analysis on Medium.</p>
           </div>
           <ExternalLink size={20} color="var(--text-muted)" />
        </a>

        <div className="launch-badge">
          <Calendar size={14} style={{ display: 'inline', marginRight: '6px' }} />
          Launch Q4 2025
        </div>
        <h2>Roadmap</h2>
        <div className="milestones">
          <div className="milestone-item">
            <h4 style={{ color: 'var(--primary)' }}>Q2 2025: Formation</h4>
            <p style={{ color: 'var(--text-muted)' }}>Core team assembly and legal entity establishment.</p>
          </div>
          <div className="milestone-item">
            <h4 style={{ color: 'var(--primary)' }}>Q3 2025: Beta Programs</h4>
            <p style={{ color: 'var(--text-muted)' }}>Closed pilot training sessions and partnership acquisition.</p>
          </div>
          <div className="milestone-item">
            <h4 style={{ color: 'white' }}>Q4 2025: Official Launch</h4>
            <p style={{ color: 'var(--text-muted)' }}>Public release of service catalog and first major community event.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactProps {
  onEligibilityChange: (isEligible: boolean) => void;
  isEduEligible: boolean;
  prefillData: { subject: string, message: string };
}

const Contact = ({ onEligibilityChange, isEduEligible, prefillData }: ContactProps) => {
  const [sector, setSector] = useState("");
  const [isNonProfit, setIsNonProfit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const formRef = useRef<HTMLFormElement>(null);

  // Prefill effect
  useEffect(() => {
    if (prefillData.message || prefillData.subject) {
        setFormData(prev => ({
            ...prev,
            subject: prefillData.subject,
            message: prefillData.message || prev.message
        }));
        if (prefillData.message.includes("Education")) {
             setSector("Education");
        }
        
        // Scroll to form
        const formEl = document.getElementById('contact-form');
        if(formEl) {
            formEl.scrollIntoView({ behavior: 'smooth' });
        }
    }
  }, [prefillData]);

  // Discount Logic Effect
  useEffect(() => {
    const checkEligibility = () => {
        const isSectorEdu = sector === 'Education';
        const isEligible = isSectorEdu || isNonProfit;
        
        if (isEligible) {
            sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
        } else {
            // Only remove if we explicitly changed to a non-eligible state
            sessionStorage.removeItem(SESSION_STORAGE_KEY);
        }
        onEligibilityChange(isEligible);
    };
    checkEligibility();
  }, [sector, isNonProfit, onEligibilityChange]);

  const handleClaimOffer = () => {
      setFormData(prev => ({
          ...prev,
          subject: "Claim: Free 20-Min Consultation & Mini Assessment",
          message: "I am interested in the free consultation and preliminary attack surface scan. Please contact me to schedule."
      }));
      const formEl = document.getElementById('contact-form');
      if(formEl) {
          formEl.scrollIntoView({ behavior: 'smooth' });
          const nameInput = document.getElementById('name');
          if (nameInput) nameInput.focus();
      }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest in Mandala Siber. We will be in touch shortly.");
  };

  const whatsappUrl = "https://wa.me/6285210503110?text=Hello,%20I%20would%20like%20to%20consult%20regarding%20Mandala%20Siber%E2%80%99s%20services.%20Could%20you%20share%20details%20about%20your%20Offensive%20Security,%20Secure%20Development%20%26%20Engineering,%20or%20Training%20%26%20Education%20programs%3F";
  const linkedinUrl = "https://www.linkedin.com/company/mandalasiber/";

  return (
    <section id="contact" className="contact-strip section-padding">
      <div className="container">
        
        {/* Special Promo Banner */}
        <div className="promo-banner">
            <div className="promo-content">
                <div style={{display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'0.5rem'}}>
                    <Clock className="text-accent" size={28} />
                    <h3 style={{margin:0, fontSize: '1.25rem'}}>Free 20-Min Consultation & Mini Assessment</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', margin: 0, maxWidth: '600px' }}>
                    Not ready to commit? Claim a complimentary discovery session and a preliminary External Attack Surface Scan. No strings attached.
                </p>
            </div>
            <button onClick={handleClaimOffer} className="btn btn-primary">
                Claim Now <Zap size={16} style={{ marginLeft: '6px' }} />
            </button>
        </div>

        <div className="contact-grid">
          <div>
            <h2 style={{ marginBottom: '1rem' }}>Ready to Secure the Future?</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Whether you need offensive security services, want to attend a training, or are looking to collaborate — we want to hear from you.
            </p>

            {/* Prominent WhatsApp Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                    backgroundColor: '#25D366',
                    color: '#fff',
                    width: '100%',
                    maxWidth: '350px',
                    marginBottom: '2rem',
                    fontSize: '1.1rem',
                    padding: '1rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.75rem',
                    boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                    border: 'none'
                }}
            >
                <MessageCircle size={28} />
                Chat via WhatsApp
            </a>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Follow us on:</span>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--primary)' }}>
                  <Linkedin size={28} />
              </a>
            </div>
          </div>
          
          <form
  id="contact-form"
  ref={formRef}
  action="https://formspree.io/f/xyzappwk"
  method="POST"
  // optional: target="_blank" to open Formspree response in new tab
>
  <div className="form-group">
    <label className="form-label" htmlFor="name">Name</label>
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Your Name"
      className="form-input"
      required
      value={formData.name}
      onChange={e => setFormData({ ...formData, name: e.target.value })}
    />
  </div>

  <div className="form-group">
    <label className="form-label" htmlFor="email">Email</label>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Email Address"
      className="form-input"
      required
      value={formData.email}
      onChange={e => setFormData({ ...formData, email: e.target.value })}
    />
  </div>

  {/* Sector Selection */}
  <div className="form-group">
    <label className="form-label" htmlFor="sector">Organization / Sector</label>
    <select
      id="sector"
      name="sector"
      className="form-input"
      required
      value={sector}
      onChange={(e) => setSector(e.target.value)}
      style={{ color: sector ? 'white' : '#94a3b8' }}
    >
      <option value="" disabled>Select Sector...</option>
      <option value="Education">Education / Academia</option>
      <option value="Government">Government</option>
      <option value="Healthcare">Healthcare</option>
      <option value="Finance">Finance</option>
      <option value="Technology">Technology</option>
      <option value="Other">Other</option>
    </select>
  </div>

  {/* Non-profit Checkbox */}
  <div className="form-group">
    <div className="form-checkbox-group">
      <input
        type="checkbox"
        id="nonprofit"
        name="nonprofit"
        className="form-checkbox"
        checked={isNonProfit}
        onChange={(e) => setIsNonProfit(e.target.checked)}
      />
      <label htmlFor="nonprofit" style={{ fontSize: '0.9rem', cursor: 'pointer' }}>
        Is this a non-profit / academic institution?
      </label>
    </div>
    {isEduEligible && (
      <div className="discount-notice">
        <GraduationCap size={16} />
        <span>Education Discount Eligible ({EDUCATION_DISCOUNT}% off on selected services)</span>
      </div>
    )}
  </div>

  <div className="form-group">
    <label className="form-label" htmlFor="subject">Subject</label>
    <input
      type="text"
      name="subject"
      id="subject"
      placeholder="General Inquiry"
      className="form-input"
      value={formData.subject}
      onChange={e => setFormData({ ...formData, subject: e.target.value })}
    />
  </div>

  <div className="form-group">
    <label className="form-label" htmlFor="message">Message</label>
    <textarea
      id="message"
      name="message"
      placeholder="How can we help you?"
      className="form-input"
      value={formData.message}
      onChange={e => setFormData({ ...formData, message: e.target.value })}
    ></textarea>
  </div>

  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
    Get Involved <Mail size={16} style={{ marginLeft: '8px' }} />
  </button>
</form>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ fontWeight: '700', color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>MANDALA SIBER</div>
            <p>Building what matters. Securing Indonesia's digital frontier through offensive research and education.</p>
          </div>
          
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#timeline">Timeline</a></li>
              <li><a href="./logo_preview.html">Logo Assets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Code of Ethics</a></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <span>&copy; 2025 Mandala Siber Collective.</span>
          <span>Jakarta, Indonesia</span>
          <a 
            href="https://medium.com/mandala-siber" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}
          >
            <ExternalLink size={14} /> Medium
          </a>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [isEduEligible, setIsEduEligible] = useState(false);
  const [prefillData, setPrefillData] = useState({ subject: '', message: '' });

  // Check session storage on load
  useEffect(() => {
    const stored = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (stored === 'true') {
        setIsEduEligible(true);
    }
  }, []);

  const handlePrefillRequest = (subject: string, message: string) => {
    setPrefillData({ subject, message });
  };

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services 
        isEduEligible={isEduEligible} 
        onPrefillRequest={handlePrefillRequest}
      />
      <VisionMission />
      <Timeline />
      <Contact 
        onEligibilityChange={setIsEduEligible} 
        isEduEligible={isEduEligible}
        prefillData={prefillData}
      />
      <Footer />
    </main>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);