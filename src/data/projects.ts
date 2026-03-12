export interface Project {
  id: string;
  title: string;
  summary: string;
  features: string;
  tech: string;
  github?: string;
  featured?: boolean;
  demo?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: 'drone',
    title: 'Automated Drone Platform',
    summary: `Project is still in progress. The system is being  built to be a full-stack drone operations and intelligence platform for agricultural surveying, livestock monitoring, and private-property security patrols. The platform brings together autonomous mission planning, preflight safety validation, live telemetry, video streaming, geospatial analytics, alerting, and computer-vision-assisted monitoring in a unified operational dashboard. Operators can define fields and geofences, visualize missions in 2D and 3D, launch and supervise flights in real time, monitor drone and mission health, and transform captured imagery into photogrammetry-ready map outputs. The system was designed to support practical, field-oriented drone workflows with a strong focus on automation, operational safety, geospatial awareness, and scalable backend architecture.`,
    features:
    `• Designed mission planning workflows for waypoint, grid, terrain-following, photogrammetry, and private patrol operations
    • Built a real-time operations dashboard with WebSocket telemetry, video streaming, telemetry HUD, mission tracking, and operator controls such as pause, resume, and abort
    • Implemented field and geofence management tools with interactive map drawing and route previews
    • Livestock monitoring capabilities, including GPS collar ingestion, herd tracking, and rule-based risk detection for geofence exits and isolated animals are planned to be added in the future
    • Integrated a photogrammetry processing pipeline that stages captured imagery, dispatches jobs to WebODM/NodeODM, and produces orthomosaics, Cloud-Optimized GeoTIFFs, XYZ tiles, and 3D Tiles
    • Built a patrol intelligence pipeline for anomaly detection, object tracking, geo-projection, evidence capture, incident logging, and automated alert generation`,
    tech: `• Backend: Python, FastAPI, SQLAlchemy, Alembic, PostgreSQL, pgvector, Celery, Redis, Ollama
    • Frontend: React, TypeScript, Vite, Material UI, Tailwind CSS
    • Building modern geospatial and telemetry-driven web applications
    • Designing real-time mission control systems for drone operations
    • Developing AI/computer-vision-assisted monitoring workflows
    • Integrating mapping, 3D visualization, and photogrammetry pipelines
    • Structuring production-grade backend services for mission orchestration, alerting, and asynchronous job execution
    • Creating software for high-value use cases in agriculture, security, and field operations`,
    github: 'https://github.com/oplt/drone',
    featured: true
  },
  {
    id: 'nextcloud',
    title: 'AI Document Search & Chat Workspace for Nextcloud',
    summary:
    `I developed a full-stack AI-powered document search and chat platform designed to integrate seamlessly with Nextcloud and transform private company documents into a searchable, conversational knowledge workspace.

     The application combines a FastAPI backend, a React + Vite frontend, Celery background processing, and PostgreSQL with pgvector to support secure document ingestion, semantic search, and grounded AI chat. It enables users to sync files from Nextcloud, extract and index document content, and ask natural-language questions with answers linked to relevant source snippets.

     The system was built with a strong focus on secure enterprise integration, scalable architecture, background job orchestration, and practical AI adoption for business workflows.`,
  features: `• Designed and implemented secure authentication flows, including local admin login and Nextcloud session bridge authentication
  • Built document ingestion and parsing pipelines for PDF, DOCX, ODT, TXT, and Markdown files
  • Implemented semantic search and grounded AI chat using PostgreSQL + pgvector, with cited source snippets for traceable responses
  • Created connector management workflows for Nextcloud integration, credential testing, sync triggering, and full reindex operations
  • Added document browsing and inspection features, including metadata view, inline original-file preview, and per-document reindex
  • Built background processing architecture with Celery and Redis for sync, ingestion, and reindex jobs, including job monitoring
  • Added health and readiness monitoring endpoints covering API, database, Redis, broker, and Ollama service availability
  • Integrated Ollama model lifecycle automation, including readiness checks, model pulling, and warm-up for AI-enabled deployments`,
 tech: `• Building production-oriented backend systems with FastAPI and SQLAlchemy
 • Designing modern React frontends with TypeScript, Vite, Material UI, and Tailwind CSS
 • Implementing AI/RAG-style workflows for enterprise document search and chat
 • Working with PostgreSQL, vector embeddings, and background task orchestration
 • Developing secure integrations with third-party platforms such as Nextcloud
 • Structuring systems for maintainability, scalability, and operational monitoring
 •Backend: Python, FastAPI, SQLAlchemy, Alembic, PostgreSQL, pgvector, Celery, Redis, Ollama
     • Frontend: React, TypeScript, Vite, Material UI, Tailwind CSS
  `,
    github: 'https://github.com/oplt/nextcloud_ai',
    tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'pgvector', 'LLM', 'RAG', 'Celery', 'Redis', 'AI'],
    featured: true
  },

  {
    id: 'voice-assistant',
    title: 'Appointment Voice Assistant',
    summary:
`Engineered a real-time, AI-driven Voice Assistant to automate calendar management tasks over standard phone calls. The system leverages a Python/Flask backend with a WebSocket-based architecture to stream audio from Twilio to Deepgram for live speech-to-text transcription. It processes user intent, interacts with the Google Calendar API to manage appointments, and delivers responses in real time. The project includes a full analytics suite to monitor call metrics and a containerized setup for cloud-ready deployment. This demonstrates a robust, low-latency, and scalable solution for integrating complex voice AI workflows with core business systems.`,
    features: `• Real-Time Architecture: Implemented a WebSocket-based server to manage bidirectional streaming between Twilio (telephony) and Deepgram (STT), ensuring minimal latency during live calls.
    • Backend & API Services: Developed a modular backend using Flask, with RESTful APIs for calendar operations and a PostgreSQL database for storing application data and user information.
    • AI & NLP Integration: Utilized Deepgram's streaming STT API for live transcription and implemented natural language processing to extract intent and entities (dates, times) from user speech.
    • Third-Party API Orchestration: Engineered the seamless integration of Twilio for call control, Google Calendar API for scheduling, and Deepgram for AI processing within a single, cohesive workflow.
    • Asynchronous Operations: Leveraged background workers for handling non-blocking tasks such as post-call analysis and database logging.
    • Addresses Complex Integration Challenges: Solves the engineering problem of orchestrating multiple real-time APIs (voice, AI, calendar) into a reliable service.
    • High-Demand Technology: Showcases expertise in voice AI, cloud-native applications, and API-driven architecture, which are highly sought-after skills.
    • End-to-End System Design: Represents a complete product-oriented system, from telephony and AI processing on the backend to a data-driven frontend dashboard.
    • Practical AI Application: Moves beyond theoretical models to a deployable, real-world application of AI that solves a tangible business problem.`,
    tech:
    `• Backend: Python, Twillo, Deepgram, Flask, SQLAlchemy, PostgreSQL, Google Calendar API, WebSockets
    • Frontend: Flask`,
    github: 'https://github.com/oplt/Voice2Appointment',
    featured: true
  },
  {
    id: 'tableau',
    title: 'Tableau Dashboard Suite',
    summary: `A collection of interactive Tableau dashboards published on Tableau Public, demonstrating proficiency in data storytelling, visual hierarchy, calculated fields, and BI best practices.`,
    features: `• Interactive data visualizations
• Calculated fields and parameters
• Dashboard design and storytelling
• Published on Tableau Public`,
    tech: `Tableau, Data Visualization, Business Intelligence, Dashboard Design`,
    demo: 'https://public.tableau.com/app/profile/oplt/vizzes',
    featured: false
  },
  {
    id: 'powerbi',
    title: 'Power BI Sales Analytics',
    summary: `A multi-page Power BI report featuring key KPIs on the overview page and regional drill-down on subsequent pages, with menu-based navigation. Covers time-series trends, regional comparisons, and product-level performance.`,
    features: `• Multi-page report with navigation menu
• KPI dashboard with key metrics
• Regional drill-down capabilities
• Time-series trend analysis
• Product performance tracking`,
    tech: `Power BI, DAX, Data Modeling, Data Visualization, Business Intelligence, Dashboard Design, KPI Design`,
    demo:
`https://app.powerbi.com/view?r=eyJrIjoiZGZhYzM5YjctNTg2My00MzMwLTk4YmQtZWU3Njk3ZDdjOWJmIiwidCI6ImQ5NGEzZmQ3LTVkYjAtNDhiMC1hZjRjLTNmMmRjMzc0MDg2YiIsImMiOjl9`,
    featured: false
  }
];
