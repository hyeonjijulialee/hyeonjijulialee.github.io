import React, { useState, useEffect } from 'react';
import {
    User, Lightbulb, BookOpen, FolderGit2, Briefcase, HeartHandshake,
    ArrowRight, Menu, X, Moon, Sun, Mail, Linkedin, Github, Download
} from 'lucide-react';

import profileImg from './assets/profile.jpeg';
import cvPdf from './assets/LEE_CV.pdf';

/* -------------------------------------------------------------------------- */
/* CONSTANTS                                  */
/* -------------------------------------------------------------------------- */

const ACCEPTED_PAPERS = [
    {
        id: 'jmak-2025',
        title: "Korean and Japanese Student Flows to the U.S. and International Research Collaboration Patterns.",
        authors: "Lee, H. J., Jung, Y.",
        description: "Paper and oral presentation delivered.",
        venue: "51st Japanese Modern Association of Korea (JMAK) International Conference. Osaka, Japan.",
        year: "2025",
        type: 'publication'
    }
];

const UNDER_REVIEW = [
    {
        id: 'aied-2026',
        title: " A Study on Virtual Teaching Assistants for Science Classrooms (Title masked for blind review)",
        authors: "Lee, H. J., Fox, J., Sherling, D., Liu, H., Kumar, P., He, P.",
        description: "Paper submitted and under review.",
        venue: "27th International Conference on Artificial Intelligence in Education (AIED). Seoul, Republic of Korea.",
        year: "2026",
        type: 'under-review',
        category: 'conference'
    }
];

const CONFERENCES = [
    {
        id: 'aera-2026',
        title: "Using large language model to analyze chemistry undergraduate students' self-constructed concept maps.",
        authors: "Jin, G., Li, T., Lee, H. J., Xue, Y., He, P., Adesope, O. O., Dydasco, C. G., Sunday, O. J., & Nishida, K.",
        description: "Proposal submitted and accepted.",
        venue: "2026 American Educational Research Association (AERA) Annual Meeting. Los Angeles, CA.",
        year: "2026",
        type: 'accepted',
        category: 'conference'
    },
    {
        id: 'narst-2026',
        title: "Toward Development: From Customizing Classroom Assessments with ADAPT-AI to Further Supporting 3D Learning Progression.",
        authors: "Midde, L., Lee, H. J., Wang, Z., & Li, T.",
        description: "Paper submitted and under review.",
        venue: "National Association of Research in Science Teaching (NARST). Seattle, WA.",
        year: "2026",
        type: 'under-review',
        category: 'conference'
    },
    {
        id: 'nsta-2025',
        title: "Designing 3D Assessments with Generative AI: A Hands-On Workshop for Elementary and Middle School Educators.",
        authors: "Li, T., Krajcik. J., Akgun, S., Midde, L., Lee, H. J., & Wang, Z.",
        description: "A Full day workshop accepted.",
        venue: "National Science Teacher Association (NSTA) professional learning institute (PLI). Minneapolis, MN.",
        year: "2025",
        type: 'conference',
        category: 'workshop'
    },
    {
        id: 'wsta-2025',
        title: "Designing 3D Assessments with Generative AI: A Hands-On Workshop for Elementary and Middle School Educators.",
        authors: "He, P., Li, T., Midde, L., Lee, H. J., & Wang, Z.",
        description: "A 4-hour workshop accepted.",
        venue: "Washington Science Teacher Association (WSTA). Tacoma, WA.",
        year: "2025",
        type: 'conference',
        category: 'workshop'
    }
];

const PROJECTS = [
    {
        id: 'ms-ai',
        title: "Microsoft AI for Good",
        subprojects: [
            {
                id: 'adapt-ai',
                title: "ADAPT-AI",
                role: "Research Assistant",
                period: "August 2025 — Present",
                affiliation: "Prof. Li",
                description: "Empowering rural K–12 science teachers to develop NGSS-aligned curricula using multi-agent AI assessment tools.",
                details: [
                    "Responsibilities include leading key technical initiatives such as system architecture design, frontend development, backend API implementation, data pipeline design, and cloud integration on Microsoft Azure for an AI powered adaptive assessment platform."
                ],
                links: [
                    { label: "Learn more (News)", url: "https://ceshs.wsu.edu/2025/05/19/aiforgood-ting/" }
                ]
            },
            {
                id: 'ai-group-coordinator',
                title: "AI Group Coordinator",
                role: "Senior Capstone Project",
                period: "August 2025 — Present",
                affiliation: "Prof. He & Prof. Kumar",
                description: "Developing an AI-powered multi-agent system to scaffold real-time scientific argumentation and enhance equitable learning in middle school classrooms.",
                details: [
                    "Contributing to full-stack development and database design while serving as the first author of a short paper for AIED 2026 based on the system's implementation."
                ],
                links: [
                    { label: "Learn more (News)", url: "https://ceshs.wsu.edu/2025/06/02/aiforgood-peng/" }
                ]
            }
        ],
        meta: [
            "[5] Li, T. (PI). (2025-2027). Designing An LLM-Based Multi-Agent System for Customized Science Assessments Through Multidisciplinary Human-AI Collaboration, National Academy of Education/Spencer Postdoctoral Fellowship, $70,000",
            "[4] Li, T. (PI) & He, P. (Co-PI). (2025-2027). Leverage Multidisciplinary Human-AI Collaboration to Design an Adaptive Assessment System aligning with NGSS. Microsoft AI for Good, $50,000.",
            "[3] Li, T. (PI) & He, P. (Co-PI). (2025-2026). RAISE (Rural AI for Societal Equity): A Roadmap Linking Classrooms and Workforce Equity in the AI Economy. Microsoft AI Economy Institute (AIEI), $75,000.",
            "[2] Zhu, B. (PI), & Li, T. (Co-PI). (2025-2027). 3D Learning With ADAPT-AI: Rapid-Cycle Evaluation of Human-AI Collaboration in Science Assessment. American Institute for Research. $ 997,432.15.",
            "[1] He, P. (PI) & Li, T. (Co-PI). (2025-2027). Design a GenAI-Empowered Conversational Agent to Support Middle School Students’ Productive Argumentation Practices in Science Learning. Microsoft AI for Good, $50,000."
        ]
    },
    {
        id: 'mice',
        title: "National R&D: Meetings, Incentives, Conferences and Exhibitions",
        role: "Backend Developer",
        period: "May 2022 — June 2023",
        affiliation: "PCN, Seoul, Republic of Korea",
        description: "“Post-COVID MICE Industry Revitalization: Development of an Integrated Online–Offline Exhibition and Convention Support Service Platform” initiative funded by the Ministry of Trade, Industry and Energy.",
        details: [
            "Project planning and development of the page, a comprehensive industry information management system implemented using Java and MySQL.",
            "Through open-source technologies analysis, database design, and system restructuring, developed the page to enable administrators to create and manage metaverse spaces with Java and PostgreSQL."
        ],
        links: [
            { label: "Learn more (News)", url: "https://www.etnews.com/20231107000213" }
        ],
        meta: [
            "2022 | Project Number: 1415181539 | Total R&D Budget: 737M KRW (≈ 546K USD)",
            "2023 | Project Number: 1415185737 | Total R&D Budget: 1.40B KRW (≈ 1.03M USD)"
        ]
    }
];

const EXPERIENCES = [
    {
        id: 'masc',
        role: "Archival Digitization Assistant",
        period: "March 2025 — Present",
        organization: "Manuscripts, Archives & Special Collections, Washington State University",
        organizationLinkText: "Manuscripts, Archives & Special Collections",
        organizationUrl: "https://libraries.wsu.edu/masc/",
        description: [
            "As part of the Kimble Project, which focuses on Northwest and state history, I digitize and catalog newspaper clippings from the 1910s to 1930s by creating metadata to support the preservation and accessibility of regional records.",
            "I also assist at the MASC front desk, supporting researchers and connecting them with the appropriate specialized librarian."
        ]
    },
    {
        id: 'ra-li',
        role: "Research Assistant to Professor Li",
        period: "October 2024 — Present",
        organization: "Center for AI Research and Education, Washington State University",
        organizationLinkText: "Center for AI Research and Education",
        organizationUrl: "https://labs.wsu.edu/caire/",
        description: [
            "Research focuses on leveraging AI to help teachers deliver high-quality, personalized instruction tailored to each student's background.",
            "Developed a pipeline that automatically evaluates student-created concept maps using the OpenAI API, comparing results with human scoring through rubric-based concept and relation extraction, image preprocessing, voting-based aggregation, and performance evaluation.",
            "Currently developing an NGSS-aligned, multi-agent assessment platform as part of a Microsoft AI for Good project to support K–12 science teachers."
        ]
    },
    {
        id: 'pcn',
        role: "Backend Developer",
        period: "May 2022 — June 2023",
        organization: "PCN, Seoul, Republic of Korea",
        description: [
            "National R&D Projects: Meetings, Incentives, Conferences and Exhibitions",
            "Skills: Java, MySQL, PostgreSQL, Databases, Data Analysis, Problem Solving, Project Management, Communication, Code Review, Spring Framework, Spring Boot, HTML, JavaScript, CSS, jQuery"
        ]
    }
];

const LEADERSHIP = [
    {
        id: 'sbc',
        organization: "Students Book Corporation (SBC)",
        organizationUrl: "https://sbcboard.wsu.edu/",
        period: "August 2024 — Present",
        entries: [
            {
                id: 'sbc-chair',
                role: "Undergraduate Student Director, Chair",
                description: "Presides over executive meetings to define semester goals and cultivates strategic partnerships with campus organizations.\nPR Committee Chair: Leads the end-to-end planning and execution of campus-wide tabling events and outreach initiatives to maximize student engagement."
            },
            {
                id: 'sbc-secretary',
                role: "Undergraduate Student Director, Secretary",
                description: "Documented official meeting minutes and streamlined internal communication for the organization.\nPR Committee Chair: Spearheaded outreach initiatives and hosted campus-wide tabling events to boost student engagement.\nSearch Committee: Provided strategic guidance and mentorship to the current chair to ensure a seamless leadership transition and operational continuity."
            },
            {
                id: 'sbc-alt-director',
                role: "Alternate Undergraduate Student Director",
                description: "Served as the Search Committee Chair, organizing documents/folders for the committee and managing communications with candidates to support a smooth recruitment process."
            }
        ]
    },
    {
        id: 'swe',
        organization: "Society of Women Engineers (SWE)",
        organizationUrl: "https://swe.wsu.edu/",
        period: "August 2023 — Present",
        entries: [
            {
                id: 'swe-committee-chair2',
                role: "2026 KSED Club Coordinators Committee Chair",
                description: "Recruit STEM and architecture student clubs to volunteer and host activities at KSED. Ensure clear communication of event details for PreKSED and KSED. Manage club safety training certificates, t-shirt distribution, and room assignments. Oversee club check-in process on the day of the event."
            },
            {
                id: 'swe-mentor-coordinator',
                role: "Officer, Industry Mentor Coordinator & Committee for EWI/KSED",
                description: "Administering the program structure, actively reaching out to professionals and companies to recruit mentors, and facilitating meaningful connections between students and industry leaders.\n(Served for Financial Committee for 2024 EWI and Club Coordinators Committee for 2025 KSED.)"
            },
            {
                id: 'swe-committee-chair1',
                role: "2023 EWI & 2024 KSED Committee Chair",
                description: "Registration Committee for EWI: Manages the end-to-end check-in process by coordinating name tags, volunteers, and logistics to ensure a seamless entry for students and industry representatives.\nOperations/Set-up/Volunteers Committee for KSED: Manages the event’s logistics by planning the schedule, sourcing decorations, and leading the physical setup and volunteer supervision on the day of the event."
            }
        ]
    },
    {
        id: 'mentorship',
        organization: "Mentorship Programs",
        period: "August 2023 — April 2025",
        entries: [
            {
                id: 'mentorship-vpnm',
                role: "Voiland Peer Network Mentorship",
                description: "Joined as a mentee and later served as a mentor, supporting students with similar backgrounds (international, adult, or transfer students) through the transition to college."
            },
            {
                id: 'mentorship-tmp',
                role: "Team Mentoring Program (TMP)",
                description: "Recognized for active involvement; nominated for and received the TMP Mentee Scholarship (Boeing-sponsored)."
            }
        ]
    }
];

const NAV_ITEMS = [
    { id: 'about', label: 'About', icon: User },
    { id: 'publications', label: 'Publications & Conferences', icon: BookOpen },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'experience', label: 'Experiences', icon: Briefcase },
    { id: 'leadership', label: 'Leadership & Service', icon: HeartHandshake },
];


/* -------------------------------------------------------------------------- */
/* COMPONENTS                                 */
/* -------------------------------------------------------------------------- */

// --- Sidebar (Refreshed) ---
const Sidebar = ({
    activeSection,
    onNavigate,
    isMobileOpen,
    setIsMobileOpen,
    isDark,
    toggleTheme
}) => {

    const NavContent = () => (
        <div className="flex flex-col min-h-full p-4 md:p-10 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-100 items-center text-center">
            {/* Profile Header */}
            <div className="mb-6 md:mb-8 w-full">
                <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 md:mb-8 group cursor-pointer">
                    <div className="absolute inset-0 rounded-full bg-brand-300/50 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                        src={profileImg}
                        alt="Hyeonji Julia Lee"
                        className="w-full h-full rounded-full object-cover border-[6px] border-white dark:border-slate-800 shadow-blue hover:shadow-lemon relative z-10 transition-transform duration-500 group-hover:scale-[1.02] group-hover:border-brand-200 dark:group-hover:border-brand-800"
                        onError={(e) => {
                            e.target.src = "https://ui-avatars.com/api/?name=Hyeonji+Lee&background=66CCFF&color=fff";
                        }}
                    />
                </div>

                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight mb-3">
                    Hyeonji <span className="relative inline-block">
                        Julia
                        <span className="absolute bottom-1 left-0 w-full h-3 bg-accent-300/60 -z-10 transform -rotate-2"></span>
                    </span> Lee
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-base font-medium leading-relaxed">
                    B.S. Computer Science
                </p>
                <p className="inline-block px-3 py-1 bg-brand-100 dark:bg-brand-900/40 text-brand-800 dark:text-brand-200 border border-brand-200 dark:border-brand-800 text-xs font-bold uppercase tracking-widest rounded-full">
                    PhD Applicant Information Science
                </p>

                {/* Social Links */}
                <div className="flex gap-3 mt-6 justify-center">
                    <a href="mailto:hyeonjijulialee@gmail.com" className="p-2.5 text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-slate-800 rounded-full transition-all" aria-label="Email">
                        <Mail size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/hyeonji-julia-lee/" className="p-2.5 text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-slate-800 rounded-full transition-all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://github.com/hyeonjijulialee" className="p-2.5 text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-slate-800 rounded-full transition-all" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github size={20} />
                    </a>
                </div>
            </div>

            {/* Settings Row (Theme) */}
            <div className="flex items-center gap-3 mb-6 justify-center w-full border-t border-b border-slate-100 dark:border-slate-800 py-4">
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-300 transition-colors"
                    aria-label="Toggle Dark Mode"
                >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 w-full space-y-1 mb-8">
                {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    const Icon = item.icon;
                    return (
                        <button
                            key={item.id}
                            onClick={() => {
                                onNavigate(item.id);
                                setIsMobileOpen(false);
                            }}
                            className={`
                w-full text-left flex items-center gap-4 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300
                ${isActive
                                    ? 'bg-brand-100 dark:bg-brand-900/40 text-brand-900 dark:text-brand-100 font-bold shadow-sm'
                                    : 'text-slate-500 dark:text-slate-400 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-700 dark:hover:text-slate-200'}
              `}
                        >
                            <Icon size={18} className={isActive ? 'text-brand-700 dark:text-brand-300' : 'text-slate-400 dark:text-slate-500'} strokeWidth={isActive ? 2.5 : 2} />
                            {item.label}
                        </button>
                    );
                })}
            </nav>

            {/* Footer / CV */}
            <div className="mt-auto w-full pb-8">
                <a
                    href={cvPdf}
                    download
                    className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-slate-900 dark:bg-brand-500 text-white dark:text-black text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-brand-600 hover:text-white dark:hover:bg-brand-400 transition-all hover:shadow-lg hover:shadow-brand-500/20"
                >
                    <Download size={14} /> Download CV
                </a>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block fixed left-0 top-0 w-96 h-screen overflow-y-auto no-scrollbar bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 z-50 transition-colors duration-300">
                <NavContent />
            </aside>

            {/* Mobile Toggle */}
            <div className="lg:hidden fixed top-0 left-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-[60] px-6 py-4 flex justify-between items-center border-b border-slate-100 dark:border-slate-800 shadow-sm transition-colors duration-300">
                <span className="font-bold text-lg text-slate-900 dark:text-slate-100">Hyeonji Julia Lee</span>
                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="p-2 text-slate-600 dark:text-slate-300 hover:text-brand-600"
                >
                    {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <div className={`
        lg:hidden fixed inset-0 z-[55] bg-white dark:bg-slate-900 transition-transform duration-300 pt-16 overflow-y-auto pb-10
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
                <NavContent />
            </div>
        </>
    );
};

// --- Section ---
const Section = ({ id, title, className = '', children }) => {
    return (
        <section
            id={id}
            className={`py-16 md:py-24 scroll-mt-10 ${className}`}
        >
            {title && (
                <div className="mb-10 flex items-baseline gap-4">
                    <h2 className="text-3xl md:text-4xl text-stone-900 dark:text-stone-100 font-medium">
                        {title}
                    </h2>
                    <div className="h-px flex-1 bg-stone-200 dark:bg-stone-800"></div>
                </div>
            )}
            {children}
        </section>
    );
};

// --- Timeline (Refreshed) ---
const Timeline = ({ items }) => {
    return (
        <div className="relative space-y-12">
            {items.map((item, index) => (
                <div key={item.id} className="relative group">
                    {/* Decorative Line & Dot - Blue Brand Color */}
                    <div className="absolute left-0 top-3 bottom-0 w-px bg-slate-200 dark:bg-slate-800 group-last:hidden"></div>
                    <div className="absolute left-[-5px] top-3 w-3 h-3 rounded-full border-2 border-brand-500 dark:border-brand-400 bg-white dark:bg-slate-900 group-hover:scale-125 group-hover:bg-brand-300 transition-all duration-300 shadow-sm"></div>

                    <div className="ml-8 w-full p-8 md:p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-blue hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">
                                {item.role}
                            </h3>
                            <span className="text-xs font-bold text-brand-800 dark:text-brand-200 uppercase tracking-wider mb-3 sm:mb-0 bg-brand-100 dark:bg-brand-900/40 px-3 py-1.5 rounded-md">
                                {item.period}
                            </span>
                        </div>

                        <div className="text-base md:text-lg font-semibold text-brand-600 dark:text-brand-400 mb-5">
                            {item.organizationUrl ? (
                                (() => {
                                    const linkText = item.organizationLinkText;
                                    const orgText = item.organization ?? '';

                                    if (linkText && orgText.includes(linkText)) {
                                        const startIndex = orgText.indexOf(linkText);
                                        const before = orgText.slice(0, startIndex);
                                        const after = orgText.slice(startIndex + linkText.length);

                                        return (
                                            <>
                                                {before}
                                                <a
                                                    href={item.organizationUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline underline-offset-4"
                                                >
                                                    {linkText}
                                                </a>
                                                {after}
                                            </>
                                        );
                                    }

                                    return (
                                        <a
                                            href={item.organizationUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline underline-offset-4"
                                        >
                                            {orgText}
                                        </a>
                                    );
                                })()
                            ) : (
                                item.organization
                            )}
                        </div>

                        <ul className="space-y-4">
                            {item.description.map((desc, i) => (
                                <li key={i} className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-light pl-5 relative before:content-[''] before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-brand-300 dark:before:bg-brand-600 before:rounded-full">
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};


/* -------------------------------------------------------------------------- */
/* MAIN APP                                    */
/* -------------------------------------------------------------------------- */

const App = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    // Toggle Dark Mode
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    // ScrollSpy
    useEffect(() => {
        const handleScroll = () => {
            const sectionIds = NAV_ITEMS.map(item => item.id);
            let current = 'about';

            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200) {
                        current = id;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const isMobile = window.innerWidth < 1024;
            const offset = isMobile ? 80 : 0;

            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(id);
        }
    };

    const formatAuthors = (authors) => {
        const parts = authors.split(/(Lee, H\. J\.)/g);
        return (
            <span>
                {parts.map((part, i) =>
                    part === 'Lee, H. J.' ? (
                        <strong key={i} className="font-bold text-slate-900 dark:text-white">{part}</strong>
                    ) : (
                        <span key={i}>{part}</span>
                    )
                )}
            </span>
        );
    };

    const PublicationItem = ({ pub }) => (
        <div className="w-full p-8 md:p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-blue hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300 group">
            <div className="flex flex-col gap-2 mb-2">
                <div className="flex flex-col md:flex-row md:items-start gap-3 justify-between">
                    <h4 className="text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-200 mb-2 leading-relaxed opacity-90">
                        {pub.title}
                    </h4>

                    <div className="flex items-center gap-2 shrink-0 self-start mt-1 md:mt-0">
                        {pub.type === 'accepted' && (
                            <span className="px-3 py-1 bg-brand-100 dark:bg-brand-900/40 text-brand-800 dark:text-brand-200 border border-brand-200 dark:border-brand-800 text-sm font-bold rounded-full">
                                Accepted
                            </span>
                        )}
                        {pub.type === 'under-review' && (
                            <span className="px-3 py-1 bg-brand-100 dark:bg-brand-900/40 text-brand-800 dark:text-brand-200 border border-brand-200 dark:border-brand-800 text-sm font-bold rounded-full">
                                Under Review
                            </span>
                        )}
                        {pub.year && (
                            <span className="px-3 py-1 bg-brand-100 dark:bg-brand-900/40 text-brand-800 dark:text-brand-200 border border-brand-200 dark:border-brand-800 text-sm font-bold rounded-full">
                                {pub.year}
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <div className="text-slate-600 dark:text-slate-300 text-lg mb-2 leading-relaxed font-light">
                {formatAuthors(pub.authors)}
            </div>
            <div className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                {pub.description}
            </div>
            <div className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                {pub.venue}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">

            <Sidebar
                activeSection={activeSection}
                onNavigate={scrollToSection}
                isMobileOpen={isMobileOpen}
                setIsMobileOpen={setIsMobileOpen}
                isDark={isDark}
                toggleTheme={() => setIsDark(!isDark)}
            />

            {/* Main Content */}
            <main className="lg:ml-96 transition-all duration-300">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-20 lg:pt-0">

                    {/* HERO (ABOUT) */}
                    <Section id="about" className="min-h-screen flex flex-col justify-center !py-0">
                        <div className="space-y-16">

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 dark:text-white leading-tight mb-12">
                                Designing Inclusive and Trustworthy <br />
                                Information Centered AI
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-800 dark:text-slate-100 italic leading-relaxed mb-8">
                                "Research focuses on human information behavior, AI-supported information literacy education, information retrieval systems, and user-centered systems/services."
                            </p>

                            <div className="space-y-6 text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-16">
                                <p>
                                    <span className="font-medium text-slate-900 dark:text-white">Hello!</span> I am <strong className="font-semibold text-brand-600 dark:text-brand-400">Hyeonji (usually go by Julia) Lee</strong>, an undergraduate student majoring in Computer Science at Washington State University. I am applying to graduate programs in Information Schools (iSchools) for Fall 2026.
                                </p>
                                <p>
                                    I study how information influences autonomy and quality of life, especially when unequal access, literacy gaps, and socioeconomic barriers create disparities. My goal is to design systems and learning approaches that help people access information fairly, understand it accurately, and use it meaningfully in daily life.
                                </p>
                                <p>
                                    Through my PhD, I hope to advance information science with research that strengthens equity, improves information practices, and creates positive impact on society.
                                </p>
                                <p>
                                    Thanks again for visiting! If you have any questions, feel free to reach out through the contact information.
                                </p>
                            </div>
                        </div>
                    </Section>

                    {/* PUBLICATIONS */}
                    <Section id="publications" title="Publications & Conferences">
                        <div className="space-y-16">

                            {/* Subsections: Publications / Conference Presentations / Workshops */}
                            {(() => {
                                const statusRank = (item) => (item?.type === 'under-review' ? 0 : 1);

                                const publications = [...ACCEPTED_PAPERS, ...UNDER_REVIEW].sort(
                                    (a, b) => statusRank(a) - statusRank(b)
                                );
                                const conferencePresentations = [...CONFERENCES.filter((item) => (item.category ?? 'conference') === 'conference')].sort(
                                    (a, b) => statusRank(a) - statusRank(b)
                                );
                                const workshops = [...CONFERENCES.filter((item) => item.category === 'workshop')].sort(
                                    (a, b) => statusRank(a) - statusRank(b)
                                );

                                return (
                                    <>
                                        {publications.length > 0 && (
                                            <div>
                                                <div className="flex items-center gap-4 mb-8">
                                                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Publications</h3>
                                                    <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                                                </div>
                                                <div className="space-y-10">
                                                    {publications.map((pub) => (
                                                        <PublicationItem key={pub.id} pub={pub} />
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {conferencePresentations.length > 0 && (
                                            <div>
                                                <div className="flex items-center gap-4 mb-8">
                                                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Conference Presentations</h3>
                                                    <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                                                </div>
                                                <div className="space-y-10">
                                                    {conferencePresentations.map((pub) => (
                                                        <PublicationItem key={pub.id} pub={pub} />
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {workshops.length > 0 && (
                                            <div>
                                                <div className="flex items-center gap-4 mb-8">
                                                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Workshops</h3>
                                                    <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                                                </div>
                                                <div className="space-y-10">
                                                    {workshops.map((pub) => (
                                                        <PublicationItem key={pub.id} pub={pub} />
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                );
                            })()}
                        </div>
                    </Section>

                    {/* PROJECTS */}
                    <Section id="projects" title="Projects">
                        <div className="grid gap-24">
                            {PROJECTS.map((proj) => (
                                <div key={proj.id} className="w-full p-8 md:p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-blue hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300 group">
                                    {/* Title Block */}
                                    <div className="mb-6">
                                        <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-tight">
                                            {proj.title}
                                        </h3>
                                        {(proj.role || proj.affiliation) && (
                                            <div className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">
                                                {[proj.role, proj.affiliation].filter(Boolean).join(' · ')}
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="pl-0 md:pl-4 border-l-0 md:border-l-2 border-slate-100 dark:border-slate-800 md:group-hover:border-brand-400 dark:md:group-hover:border-brand-800 transition-colors">
                                        {proj.subprojects ? (
                                            <>
                                                <div className="relative space-y-12">
                                                    {proj.subprojects.map((sp, index) => (
                                                        <div key={sp.id} className="relative pl-8 group">
                                                            <div className="absolute left-0 top-3 bottom-0 w-px bg-slate-200 dark:bg-slate-800 group-last:hidden"></div>
                                                            <div className="absolute left-[-5px] top-3 w-3 h-3 rounded-full border-2 border-brand-500 dark:border-brand-400 bg-white dark:bg-slate-900 group-hover:scale-125 group-hover:bg-brand-300 transition-all duration-300 shadow-sm"></div>

                                                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3">
                                                                <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">
                                                                    {sp.title}
                                                                </h4>
                                                                {sp.period && (
                                                                    <span className="text-xs font-bold text-brand-800 dark:text-brand-200 uppercase tracking-wider mb-3 sm:mb-0 bg-brand-100 dark:bg-brand-900/40 px-3 py-1.5 rounded-md">
                                                                        {sp.period}
                                                                    </span>
                                                                )}
                                                            </div>

                                                            {(sp.role || sp.affiliation) && (
                                                                <div className="text-base md:text-lg font-semibold text-brand-600 dark:text-brand-400 mb-5">
                                                                    {[sp.role, sp.affiliation].filter(Boolean).join(' · ')}
                                                                </div>
                                                            )}

                                                            {sp.description && (
                                                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8 font-light text-lg">
                                                                    {sp.description}
                                                                </p>
                                                            )}

                                                            {sp.details && (
                                                                <ul className="space-y-3 mb-8">
                                                                    {sp.details.map((detail, i) => (
                                                                        <li key={i} className="text-lg text-slate-600 dark:text-slate-400 flex items-start gap-3">
                                                                            <span className="mt-2 w-1.5 h-1.5 bg-brand-500 dark:bg-brand-400 rounded-full shrink-0"></span>
                                                                            <span>{detail}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}

                                                            {sp.links && (
                                                                <div className="flex gap-6">
                                                                    {sp.links.map((link, i) => (
                                                                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors border-b-2 border-transparent hover:border-brand-400">
                                                                            {link.label} <ArrowRight size={16} />
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>

                                                {proj.meta && (
                                                    <div className="mt-8 text-sm text-slate-400 dark:text-slate-500 space-y-1 bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                                                        {proj.meta.map((m, i) => <div key={i}>{m}</div>)}
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8 font-light text-lg">
                                                    {proj.description}
                                                </p>

                                                {proj.details && (
                                                    <ul className="space-y-3 mb-8">
                                                        {proj.details.map((detail, i) => (
                                                            <li key={i} className="text-lg text-slate-600 dark:text-slate-400 flex items-start gap-3">
                                                                <span className="mt-2 w-1.5 h-1.5 bg-brand-500 dark:bg-brand-400 rounded-full shrink-0"></span>
                                                                <span>{detail}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}

                                                <div className="flex flex-col gap-6">
                                                    {proj.links && (
                                                        <div className="flex gap-6">
                                                            {proj.links.map((link, i) => (
                                                                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors border-b-2 border-transparent hover:border-brand-400">
                                                                    {link.label} <ArrowRight size={16} />
                                                                </a>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {proj.meta && (
                                                        <div className="text-sm text-slate-400 dark:text-slate-500 space-y-1 bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                                                            {proj.meta.map((m, i) => <div key={i}>{m}</div>)}
                                                        </div>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* EXPERIENCE */}
                    <Section id="experience" title="Experiences">
                        <Timeline items={EXPERIENCES} />
                    </Section>

                    {/* LEADERSHIP */}
                    <Section id="leadership" title="Leadership & Service">
                        <div className="flex flex-col gap-10">
                            {LEADERSHIP.map((org) => (
                                <div key={org.id} className="w-full p-8 md:p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-blue hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300 group">
                                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8">
                                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                            {org.organizationUrl ? (
                                                <a
                                                    href={org.organizationUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline underline-offset-4"
                                                >
                                                    {org.organization}
                                                </a>
                                            ) : (
                                                org.organization
                                            )}
                                        </h3>
                                        {org.period && (
                                            <span className="text-xs font-bold text-brand-800 dark:text-brand-200 uppercase tracking-wider bg-brand-100 dark:bg-brand-900/40 px-3 py-1.5 rounded-md">
                                                {org.period}
                                            </span>
                                        )}
                                    </div>

                                    <div className="relative space-y-10">
                                        {org.entries.map((entry) => (
                                            <div key={entry.id} className="relative pl-8 group/entry">
                                                <div className="absolute left-0 top-3 bottom-0 w-px bg-slate-200 dark:bg-slate-800 group-last:hidden"></div>
                                                <div className="absolute left-[-5px] top-3 w-3 h-3 rounded-full border-2 border-brand-500 dark:border-brand-400 bg-white dark:bg-slate-900 group-hover/entry:scale-125 group-hover/entry:bg-brand-300 transition-all duration-300 shadow-sm"></div>

                                                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                                                    <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 group-hover/entry:text-brand-700 dark:group-hover/entry:text-brand-400 transition-colors">
                                                        {entry.role}
                                                    </h4>
                                                    {entry.period && (
                                                        <span className="text-xs font-bold text-brand-800 dark:text-brand-200 uppercase tracking-wider mb-3 sm:mb-0 bg-brand-100 dark:bg-brand-900/40 px-3 py-1.5 rounded-md">
                                                            {entry.period}
                                                        </span>
                                                    )}
                                                </div>

                                                {entry.description && (
                                                    <p className="text-slate-600 dark:text-slate-300 font-light text-lg leading-relaxed whitespace-pre-line">
                                                        {Array.isArray(entry.description)
                                                            ? entry.description.join('\n')
                                                            : entry.description}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <footer className="py-24 border-t border-slate-200 dark:border-slate-800 mt-24 text-slate-500 dark:text-slate-400 text-base flex flex-col md:flex-row justify-between items-center gap-6">
                        <a href="https://clustrmaps.com/site/1c8k8" title="Visit tracker" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}>
                            <img src="//clustrmaps.com/map_v2.pngcl=ffffff&w=a&t=n&d=y0RyCbVYEvHg9sXrZymX6vg3nggzG7Z3RuNkQ3vV1Rg" alt="" />
                        </a>
                        <p>© {new Date().getFullYear()} Hyeonji Julia Lee</p>
                        <div className="flex gap-8 font-medium">
                            <a href="mailto:hyeonjijulialee@gmail.com" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Email</a>
                            <a href="https://www.linkedin.com/in/hyeonji-julia-lee/" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">LinkedIn</a>
                            <a href="https://github.com/hyeonjijulialee" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">GitHub</a>
                        </div>
                    </footer>

                </div>
            </main>
        </div>
    );
};

export default App;
