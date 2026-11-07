/* ==========================================================================
   SITE CONTENT
   --------------------------------------------------------------------------
   Everything on index.html and project.html is rendered from this object,
   so this is the only file you need to edit to update your portfolio.

   - Strings are plain text (HTML is escaped), so you can't break the layout.
   - To add a project: copy one of the objects in `projects`, give it a new
     unique `id`, and it will appear on the home page with its own page at
     project.html?id=<your-id>.
   - Leave a link as "" to hide its button.
   ========================================================================== */

window.PORTFOLIO = {
  profile: {
    name: "Nischal Kharel",
    initials: "NK",
    headline: "I build reliable AI agents, backend services, and data pipelines.",
    intro:
      "Senior Computer Science student at the University of Pittsburgh with three software engineering terms at BNY: shipping agentic workflows, event-driven pipelines, and APIs that power internal AI agents.",
    // Shown as a small badge at the top of the page. Set to "" to hide it.
    status: "Open to full-time software engineering roles starting 2027",
    location: "Pittsburgh, PA",
    email: "nischalkharel7@gmail.com",
    github: "https://github.com/nischal-kharel",
    linkedin: "https://www.linkedin.com/in/nischalkharel5/",
    // Resume PDF path. Set to "" to hide the Resume buttons.
    resumePdf: "assets/Nischal_Kharel_Resume.pdf",
    // Headshot shown in the hero section (4:5 portrait works best). Set to "" to hide it.
    photo: "assets/nischal-headshot.jpg",
    photoAlt: "Headshot of Nischal Kharel",
  },

  // The little "code editor" card that overlaps the bottom of the headshot.
  // Keep it to ~3 short fields so it doesn't cover the photo.
  codeCard: {
    fileName: "nischal.ts",
    comment: "// thanks for stopping by 👋",
    variable: "nischal",
    fields: [
      ["focus", ["AI agents", "backend", "data"]],
      ["stack", ["Java", "Python", "Spring"]],
      ["building", "GraphRAG for code"],
    ],
  },

  stats: [
    { value: "3", label: "software engineering terms at BNY" },
    { value: "98%", label: "avg. accuracy on AI document extraction" },
    { value: "40+", label: "MCP tools restored for LLM tool calls" },
    { value: "340+", label: "tests written for my GraphRAG project" },
  ],

  about: {
    paragraphs: [
      "I'm a senior at the University of Pittsburgh studying Computer Science with a minor in Information Science, graduating in May 2027.",
      "Across three software engineering terms at BNY, I've designed agentic workflows in Java Spring Boot with LangChain4j, built Kafka consumers for real-time data streams, and shipped REST APIs that give internal AI agents access to enterprise financial data. Right now I'm co-developing a CGI-sponsored GraphRAG assistant that tells you who in a codebase worked on what, and shows you the commits to prove it.",
      "On campus, I spent a year as an undergraduate teaching assistant for Data Structures & Algorithms, and before that I helped build a React app that teaches data literacy as an undergraduate research assistant. I care about the parts of engineering that make systems trustworthy: validation, testing, and clean interfaces between services.",
    ],
    focus: [
      {
        icon: "cpu",
        title: "AI agents & LLM tooling",
        text: "Agentic workflows, prompt design, MCP tools, and RAG / GraphRAG pipelines with LangChain4j and LangGraph.",
      },
      {
        icon: "server",
        title: "Backend & event-driven systems",
        text: "Spring Boot microservices, REST APIs, Kafka consumers, and Camunda BPMN/DMN decision flows.",
      },
      {
        icon: "database",
        title: "Data engineering",
        text: "Pipelines that extract, transform, and load data into warehouses and graph databases like Neo4j.",
      },
    ],
  },

  experience: [
    {
      org: "BNY",
      logoImg: "assets/logos/bny.png",
      // Text badge fallback, used only if logoImg is "":
      logo: "BNY",
      logoBg: "linear-gradient(135deg, #1E3A8A, #2459E0)",
      logoFg: "#FFFFFF",
      location: "Pittsburgh, PA",
      summary: "Three terms building AI agents, APIs, and data pipelines for financial operations.",
      roles: [
        {
          title: "Software Engineer Intern",
          start: "Jun 2026",
          end: "Aug 2026",
          bullets: [
            "Streamlined legacy mainframe operations by designing and deploying Java Spring Boot agentic workflows using LangChain4j, replacing manual processes with automated, event-driven data pipelines.",
            "Architected Kafka consumer workflows to intake, transform, and normalize high-throughput real-time data streaming across microservices.",
            "Engineered intelligent decision frameworks using Camunda (BPMN/DMN) and external API integrations to parse, validate, and contextualize complex incoming data payloads.",
          ],
          tags: ["Java", "Spring Boot", "LangChain4j", "Kafka", "Camunda BPMN/DMN"],
        },
        {
          title: "Software Engineer Co-op",
          start: "Jan 2026",
          end: "Apr 2026",
          bullets: [
            "Architected and deployed 4 RESTful API endpoints within a Spring Boot microservice to expose enterprise financial data to internal AI agents, enabling seamless data retrieval for the operations team.",
            "Modernized service-to-service communication by replacing legacy RestTemplate dependencies with reactive WebClient, improving maintainability and aligning with modern Spring design patterns.",
            "Resolved 100% of LLM tool invocation failures across 40+ MCP tools by diagnosing and fixing a critical type-mapping bug, implementing a type-aware schema conversion that restored support for non-string parameters.",
            "Engineered full-stack reliability across a React, Spring Boot, and Azure OpenAI ecosystem by conducting end-to-end integration testing and resolving critical bottlenecks related to API gateway timeouts and agent retry logic.",
            "Collaborated across a large-scale ecosystem, managing integration points across multiple frontend and backend repositories within a highly distributed architecture.",
          ],
          tags: ["Spring Boot", "REST APIs", "WebClient", "MCP", "React", "Azure OpenAI"],
        },
        {
          title: "Software Engineer Co-op",
          start: "May 2025",
          end: "Aug 2025",
          bullets: [
            "Streamlined account activation by orchestrating an automated pipeline: an email listener forwards client files to an AI agent for extraction and transformation, feeding the transformed data directly into the BNY data warehouse.",
            "Engineered intricate prompts for multiple AI agents to accurately extract data from dynamic Smartform OCR documents, achieving 98% average accuracy and returning data in JSON format.",
            "Optimized document processing time by designing and implementing a parallel agent execution framework using Python's ThreadPoolExecutor and internal API calls, significantly reducing extraction latency.",
          ],
          tags: ["Python", "AI Agents", "Prompt Engineering", "OCR", "Concurrency"],
        },
      ],
    },
    {
      org: "University of Pittsburgh",
      logoImg: "assets/logos/pitt-seal.svg",
      logoPad: 3, // a round seal can fill more of the tile than the BNY arrow
      logo: "Pitt",
      logoBg: "#003594",
      logoFg: "#FFB81C",
      location: "Pittsburgh, PA",
      summary: "Teaching and research alongside my degree.",
      roles: [
        {
          title: "Undergraduate Teaching Assistant, Data Structures & Algorithms",
          start: "Aug 2025",
          end: "Apr 2026",
          bullets: [
            "Led recitation sessions and held weekly office hours to help students understand and apply fundamental data structures and algorithms concepts.",
            "Guided students through debugging and problem-solving by visualizing complex project requirements, identifying implementation issues, and developing solutions while collaborating with professors and teaching assistants.",
          ],
          tags: ["Teaching", "Data Structures", "Algorithms", "Mentoring"],
        },
        {
          title: "Undergraduate Research Assistant",
          start: "Sep 2024",
          end: "May 2025",
          bullets: [
            "Developed and maintained features across a large-scale React application for teaching data literacy through interactive, role-based learning modules (e.g., Artist, Detective), collaborating across frontend and backend codebases to improve student learning experiences.",
            "Engineered a key feature enabling users to import external images into the web application's workspace, leveraging JavaScript and React to enhance user interactivity.",
          ],
          tags: ["React", "JavaScript", "EdTech"],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------------
     PROJECTS
     cover.art: "graph" | "map" | "bars" (built-in illustrations)
     cover.image: optional screenshot path, e.g. "assets/projects/voices.png"
                  (shown on top of the illustration when set)
     sections[].bullets can be plain strings or { title, text } objects.
     sections[].pipeline renders a numbered step-by-step flow.
     ------------------------------------------------------------------------ */
  projects: [
    {
      id: "graphrag-expertise-finder",
      title: "GraphRAG Code Expertise Finder",
      tagline:
        "Ask “Who worked on Jira authentication?” and get an answer that cites the exact commits and contributors behind it, drawn as a graph.",
      period: "Sept 2026 – Present",
      context: "Sponsored by CGI · Team project",
      role: "Co-developer: Q&A pipeline, semantic search, validation & testing",
      featured: true,
      tags: ["Python", "LangGraph", "Neo4j", "PostgreSQL", "Vector search"],
      cover: { art: "graph", from: "#2459E0", to: "#0E9F8E", image: "" },
      links: { github: "", demo: "" },
      highlights: [
        { value: "340+", label: "unit & live integration tests" },
        { value: "180+", label: "commits embedded in the vector index" },
        { value: "<$0.001", label: "total cost to embed them" },
      ],
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "A CGI-sponsored chat assistant that answers natural-language questions about a GitHub repository, like “Who worked on Jira authentication?”, and backs every answer with the exact commits and contributors behind it, drawing them as a graph.",
            "I engineered the question-answering pipeline, the semantic search over Git history, and the validation and test suite that keeps the assistant's citations honest.",
          ],
        },
        {
          heading: "How a question gets answered",
          paragraphs: [
            "The question-answering pipeline is built with LangGraph. Each question flows through a short sequence of stages:",
          ],
          pipeline: [
            { title: "Classify", text: "An LLM classifies the incoming question to decide what kind of lookup it needs." },
            { title: "Retrieve", text: "Matching commits, along with their authors and the files they touched, are pulled from Neo4j." },
            { title: "Answer", text: "A second LLM writes the answer, citing the commits and contributors it drew from." },
            { title: "Validate", text: "Every citation is checked against the graph nodes that were actually retrieved." },
            { title: "Visualize", text: "The cited commits and contributors are drawn as a graph alongside the answer." },
          ],
        },
        {
          heading: "Semantic search over Git history",
          paragraphs: [
            "Instead of matching questions against raw commit messages, each commit gets an LLM-written summary, and those summaries are embedded into a Neo4j vector index (Cypher 25).",
            "Searching the summaries outperformed raw message matching, and embedding all 180+ commits cost less than a tenth of a cent.",
          ],
        },
        {
          heading: "Keeping citations trustworthy",
          bullets: [
            { title: "Grounded references.", text: "LLM citations are validated against retrieved graph nodes, so every citation shown links to a real commit or contributor." },
            { title: "Privacy by default.", text: "Contributor emails are scrubbed before any external model call." },
            { title: "Tested end to end.", text: "I authored 340+ unit and live integration tests covering the pipeline." },
          ],
        },
      ],
    },
    {
      id: "voices-united",
      title: "Voices United",
      tagline:
        "A civic web platform for organizing protests in Pittsburgh on an interactive map, with a community boycott leaderboard.",
      period: "Sept 2025",
      context: "",
      role: "Full-stack developer",
      featured: false,
      tags: ["Python", "Flask", "MySQL", "JavaScript", "HTML", "CSS"],
      cover: { art: "map", from: "#F59E0B", to: "#EF6C4D", image: "" },
      links: { github: "", demo: "" },
      highlights: [],
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "Voices United is an interactive web platform that makes community organizing in Pittsburgh more accessible. People can put protests on the map with event details, and rally around boycotts through a shared, live leaderboard.",
          ],
        },
        {
          heading: "Features",
          bullets: [
            { title: "Protest map.", text: "Users create map pins with event details, making it easier to find and coordinate community events." },
            { title: "Boycott leaderboard.", text: "Users submit their reasons for boycotting a company and see the results on a dynamic leaderboard, increasing engagement and the visibility of collective action." },
            { title: "Accounts.", text: "User accounts tie protests and boycott submissions to the people who created them." },
          ],
        },
        {
          heading: "Under the hood",
          paragraphs: [
            "A Flask backend is integrated with a MySQL database that manages user accounts, protests, and boycott data. The front end is built with JavaScript, HTML, and CSS.",
          ],
        },
      ],
    },
    {
      id: "best-pittsburgh-neighborhood",
      title: "Best Pittsburgh Neighborhood",
      tagline:
        "A data-driven ranking of Pittsburgh neighborhoods by safety, combining fire, arrest, and citation data into a single score.",
      period: "Nov – Dec 2023",
      context: "",
      role: "Data analysis & visualization",
      featured: false,
      tags: ["Python", "Pandas", "Matplotlib", "Data analysis"],
      cover: { art: "bars", from: "#1E3A8A", to: "#2459E0", image: "" },
      links: { github: "", demo: "" },
      highlights: [
        { value: "3", label: "public datasets combined" },
        { value: "1", label: "unified safety metric" },
      ],
      sections: [
        {
          heading: "The question",
          paragraphs: [
            "What's the best neighborhood in Pittsburgh? This project defined “best” as “safest” and set out to answer it with data, ranking neighborhoods using a single quantitative safety metric.",
          ],
        },
        {
          heading: "The data",
          bullets: [
            { title: "Fire hazards.", text: "Public data on fire incidents and hazards by neighborhood." },
            { title: "Police arrests.", text: "Public arrest records." },
            { title: "Citations.", text: "Public non-traffic citation data." },
          ],
        },
        {
          heading: "Approach",
          paragraphs: [
            "I wrangled and cleaned the datasets with Pandas, then analyzed and synthesized them into one combined metric for each neighborhood. Matplotlib visualizations of the data informed the ranking methodology and made the comparison between neighborhoods easy to see.",
          ],
        },
      ],
    },
  ],

  skills: [
    { group: "Languages", items: ["Java", "Python", "JavaScript", "SQL", "HTML", "CSS", "C"] },
    { group: "Frameworks", items: ["Spring Boot", "LangChain", "LangChain4j", "LangGraph", "React", "Flask"] },
    { group: "AI", items: ["RAG", "GraphRAG", "MCP", "Azure OpenAI", "Prompt Engineering"] },
    { group: "Databases", items: ["MySQL", "PostgreSQL", "Neo4j", "Snowflake"] },
    { group: "Data & Libraries", items: ["pandas", "NumPy", "Matplotlib"] },
    { group: "Tools & Platforms", items: ["Git", "Kafka", "Camunda", "VS Code", "Visual Studio"] },
  ],

  education: {
    school: "University of Pittsburgh",
    logoImg: "assets/logos/pitt-seal.svg",
    logoPad: 3, // a round seal can fill more of the tile than the BNY arrow
    logo: "Pitt",
    logoBg: "#003594",
    logoFg: "#FFB81C",
    degree: "B.S. in Computer Science",
    minor: "Minor in Information Science",
    period: "Expected May 2027",
    gpa: "3.75 / 4.0",
    coursework: [
      "Data Structures & Algorithms",
      "Artificial Intelligence",
      "Machine Learning",
      "Software Engineering",
      "Database Management",
      "Data Engineering",
    ],
    honors: [
      "Undergraduate Teaching Assistant, Data Structures & Algorithms",
      "Undergraduate Research Assistant",
      "High School Valedictorian",
    ],
  },

  contact: {
    title: "Let's build something together.",
    blurb:
      "I'm always happy to talk about software engineering roles, AI agents, or anything you saw on this page. Email is the best way to reach me.",
  },
};
