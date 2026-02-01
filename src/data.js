/* Shared data for pages */

export const ACCEPTED_PAPERS = [
    { id: 'aied-2026', title: " A Study on Virtual Teaching Assistants for Science Classrooms (Title masked for blind review)", authors: "Lee, H. J., Fox, J., Sherling, D., Liu, H., Kumar, P., He, P.", description: "Paper submitted and under review.", venue: "27th International Conference on Artificial Intelligence in Education (AIED). Seoul, Republic of Korea.", year: "2026", type: 'under-review', category: 'conference' },
    { id: 'narst-2026', title: "Toward Development: From Customizing Classroom Assessments with ADAPT-AI to Further Supporting 3D Learning Progression.", authors: "Midde, L., Lee, H. J., Wang, Z., & Li, T.", description: "Paper submitted and accepted.", venue: "National Association of Research in Science Teaching (NARST). Seattle, WA.", year: "2026", type: 'accepted', category: 'conference' },
    { id: 'aera-2026', title: "Using large language model to analyze chemistry undergraduate students' self-constructed concept maps.", authors: "Jin, G., Li, T., Lee, H. J., Xue, Y., He, P., Adesope, O. O., Dydasco, C. G., Sunday, O. J., & Nishida, K.", description: "Paper submitted and accepted.", venue: "2026 American Educational Research Association (AERA) Annual Meeting. Los Angeles, CA.", year: "2026", type: 'accepted', category: 'conference' },
    { id: 'jmak-2025', title: "Korean and Japanese Student Flows to the U.S. and International Research Collaboration Patterns.", authors: "Lee, H. J., Jung, Y.", description: "Paper and oral presentation delivered.", venue: "51st Japanese Modern Association of Korea (JMAK) International Conference. Osaka, Japan.", year: "2025", type: 'publication' }
];

export const CONFERENCES = [
    { id: 'nsta-2025', title: "Designing 3D Assessments with Generative AI: A Hands-On Workshop for Elementary and Middle School Educators.", authors: "Li, T., Krajcik. J., Akgun, S., Midde, L., Lee, H. J., & Wang, Z.", description: "A Full day workshop accepted.", venue: "National Science Teacher Association (NSTA) professional learning institute (PLI). Minneapolis, MN.", year: "2025", type: 'conference', category: 'workshop' },
    { id: 'wsta-2025', title: "Designing 3D Assessments with Generative AI: A Hands-On Workshop for Elementary and Middle School Educators.", authors: "He, P., Li, T., Midde, L., Lee, H. J., & Wang, Z.", description: "A 4-hour workshop accepted.", venue: "Washington Science Teacher Association (WSTA). Tacoma, WA.", year: "2025", type: 'conference', category: 'workshop' }
];

export const PROJECTS = [
    {
        id: 'ms-ai', title: "Microsoft AI for Good", subprojects: [
            { id: 'adapt-ai', title: "ADAPT-AI", role: "Research Assistant", period: "August 2025 — Present", affiliation: "Prof. Li", description: "Empowering rural K–12 science teachers to develop NGSS-aligned curricula using multi-agent AI assessment tools.", details: ["Responsibilities include leading key technical initiatives such as system architecture design, frontend development, backend API implementation, data pipeline design, and cloud integration on Microsoft Azure for an AI powered adaptive assessment platform."], links: [{ label: "Learn more (News)", url: "https://ceshs.wsu.edu/2025/05/19/aiforgood-ting/" }] },
            { id: 'ai-group-coordinator', title: "AI Group Coordinator", role: "Senior Capstone Project", period: "August 2025 — Present", affiliation: "Prof. He & Prof. Kumar", description: "Developing an AI-powered multi-agent system to scaffold real-time scientific argumentation and enhance equitable learning in middle school classrooms.", details: ["Contributing to full-stack development and database design while serving as the first author of a short paper for AIED 2026 based on the system's implementation."], links: [{ label: "Learn more (News)", url: "https://ceshs.wsu.edu/2025/06/02/aiforgood-peng/" }] }
        ], meta: [
            "[5] Li, T. (PI). (2025-2027). Designing An LLM-Based Multi-Agent System for Customized Science Assessments Through Multidisciplinary Human-AI Collaboration, National Academy of Education/Spencer Postdoctoral Fellowship, $70,000",
            "[4] Li, T. (PI) & He, P. (Co-PI). (2025-2027). Leverage Multidisciplinary Human-AI Collaboration to Design an Adaptive Assessment System aligning with NGSS. Microsoft AI for Good, $50,000.",
            "[3] Li, T. (PI) & He, P. (Co-PI). (2025-2026). RAISE (Rural AI for Societal Equity): A Roadmap Linking Classrooms and Workforce Equity in the AI Economy. Microsoft AI Economy Institute (AIEI), $75,000.",
            "[2] Zhu, B. (PI), & Li, T. (Co-PI). (2025-2027). 3D Learning With ADAPT-AI: Rapid-Cycle Evaluation of Human-AI Collaboration in Science Assessment. American Institute for Research. $ 997,432.15.",
            "[1] He, P. (PI) & Li, T. (Co-PI). (2025-2027). Design a GenAI-Empowered Conversational Agent to Support Middle School Students' Productive Argumentation Practices in Science Learning. Microsoft AI for Good, $50,000."
        ]
    },
    { id: 'mice', title: "National R&D: Meetings, Incentives, Conferences and Exhibitions", role: "Backend Developer", period: "May 2022 — June 2023", affiliation: "PCN, Seoul, Republic of Korea", description: "Post-COVID MICE Industry Revitalization: Development of an Integrated Online–Offline Exhibition and Convention Support Service Platform initiative funded by the Ministry of Trade, Industry and Energy.", details: ["Project planning and development of the page, a comprehensive industry information management system implemented using Java and MySQL.", "Through open-source technologies analysis, database design, and system restructuring, developed the page to enable administrators to create and manage metaverse spaces with Java and PostgreSQL."], links: [{ label: "Learn more (News)", url: "https://www.etnews.com/20231107000213" }], meta: [] }
];

export const EXPERIENCES = [
    { id: 'masc', role: "Archival Digitization Assistant", period: "March 2025 — Present", organization: "Manuscripts, Archives & Special Collections, Washington State University", organizationLinkText: "Manuscripts, Archives & Special Collections", organizationUrl: "https://libraries.wsu.edu/masc/", description: ["As part of the Kimble Project, which focuses on Northwest and state history, I digitize and catalog newspaper clippings from the 1910s to 1930s by creating metadata to support the preservation and accessibility of regional records.", "I also assist at the MASC front desk, supporting researchers and connecting them with the appropriate specialized librarian."], tags: ["Digitization", "Metadata Creation", "Archival Research", "Cataloging"] },
    { id: 'ra-li', role: "Research Assistant to Professor Li", period: "October 2024 — Present", organization: "Center for AI Research and Education, Washington State University", organizationLinkText: "Center for AI Research and Education", organizationUrl: "https://labs.wsu.edu/caire/", description: ["Research focuses on leveraging AI to help teachers deliver high-quality, personalized instruction tailored to each student's background.", "Developed a pipeline that automatically evaluates student-created concept maps using the OpenAI API, comparing results with human scoring through rubric-based concept and relation extraction, image preprocessing, voting-based aggregation, and performance evaluation.", "Currently developing an NGSS-aligned, multi-agent assessment platform as part of a Microsoft AI for Good project to support K–12 science teachers."], tags: ["OpenAI API", "Python", "Multi-Agent Systems", "Educational AI"] },
    { id: 'pcn', role: "Backend Developer", period: "May 2022 — June 2023", organization: "PCN, Seoul, Republic of Korea", description: ["National R&D Projects: Meetings, Incentives, Conferences and Exhibitions", "Skills: Java, MySQL, PostgreSQL, Databases, Data Analysis, Problem Solving, Project Management, Communication, Code Review, Spring Framework, Spring Boot, HTML, JavaScript, CSS, jQuery"], tags: ["Java", "MySQL", "PostgreSQL", "Spring Boot", "Database Design"] }
];

export const LEADERSHIP = [
    {
        id: 'sbc', organization: "Students Book Corporation (SBC)", organizationUrl: "https://sbcboard.wsu.edu/", period: "August 2024 — Present", entries: [
            { id: 'sbc-chair', role: "Chair, Undergraduate Student Director", description: "Presides over executive meetings to define semester goals and cultivates strategic partnerships with campus organizations.\nPR Committee Chair: Leads the end-to-end planning and execution of campus-wide tabling events and outreach initiatives to maximize student engagement." },
            { id: 'sbc-secretary', role: "Secretary, Undergraduate Student Director", description: "Documented official meeting minutes and streamlined internal communication for the organization.\nPR Committee Chair: Spearheaded outreach initiatives and hosted campus-wide tabling events to boost student engagement.\nSearch Committee: Provided strategic guidance and mentorship to the current chair to ensure a seamless leadership transition and operational continuity." },
            { id: 'sbc-alt-director', role: "Alternate Undergraduate Student Director", description: "Served as the Search Committee Chair, organizing documents/folders for the committee and managing communications with candidates to support a smooth recruitment process." }
        ]
    },
    {
        id: 'swe', organization: "Society of Women Engineers (SWE)", organizationUrl: "https://swe.wsu.edu/", period: "August 2023 — Present", entries: [
            { id: 'swe-committee-chair2', role: "2026 KSED Club Coordinators Committee Chair", description: "Recruit STEM and architecture student clubs to volunteer and host activities at KSED. Ensure clear communication of event details for PreKSED and KSED. Manage club safety training certificates, t-shirt distribution, and room assignments. Oversee club check-in process on the day of the event." },
            { id: 'swe-mentor-coordinator', role: "Officer, Industry Mentor Coordinator & Committee for EWI/KSED", description: "Administering the program structure, actively reaching out to professionals and companies to recruit mentors, and facilitating meaningful connections between students and industry leaders.\nServed for Financial Committee for 2024 EWI and Club Coordinators Committee for 2025 KSED." },
            { id: 'swe-committee-chair1', role: "2023 EWI & 2024 KSED Committee Chair", description: "Registration Committee for EWI: Manages the end-to-end check-in process by coordinating name tags, volunteers, and logistics to ensure a seamless entry for students and industry representatives.\nOperations/Set-up/Volunteers Committee for KSED: Manages the event's logistics by planning the schedule, sourcing decorations, and leading the physical setup and volunteer supervision on the day of the event." }
        ]
    },
    {
        id: 'mentorship', organization: "Mentorship Programs", period: "August 2023 — April 2025", entries: [
            { id: 'mentorship-vpnm', role: "Voiland Peer Network Mentorship", description: "Joined as a mentee and later served as a mentor, supporting students with similar backgrounds (international, adult, or transfer students) through the transition to college." },
            { id: 'mentorship-tmp', role: "Team Mentoring Program (TMP)", description: "Recognized for active involvement; nominated for and received the TMP Mentee Scholarship (Boeing-sponsored)." }
        ]
    }
];

export const RESEARCH_FOCUS = [
    "Human Information Behavior",
    "AI in Information Literacy Education",
    "Information Retrieval Systems",
    "User-Centered Systems & Services",
];

export const NAV_ITEMS = [
    { path: '/', label: 'About' },
    { path: '/publications', label: 'Publications' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/leadership', label: 'Leadership' },
    { path: '/contact', label: 'Contact' },
];
