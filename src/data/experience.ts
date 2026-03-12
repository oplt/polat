export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'full-time' | 'research' | 'academic';
  highlights: string[];
  tags: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 'fks',
    role: 'Python Developer',
    company: 'FKS',
    location: 'Hasselt, Belgium',
    period: 'Jan 2023 – Feb 2025',
    type: 'full-time',
    current: false,
    highlights: [
      'Developed and optimized scalable Python applications and custom Odoo modules, ensuring high performance and alignment with client requirements across diverse industries.',
      'Designed and deployed RESTful APIs with OAuth 2.0 authentication for secure third-party integrations, enhancing data interoperability.',
      'Optimized PostgreSQL queries for in-depth data analysis and generation of actionable business insights.',
      'Containerized applications using Docker and implemented CI/CD pipelines via GitHub Actions and GitLab CI/CD for automated testing and deployments.',
      'Delivered full-stack solutions using Python, SQL, JavaScript, HTML/CSS, OWL, and XML.',
      'Conducted code reviews enforcing PEP 8 standards; utilized PyCharm for rigorous debugging and performance tuning.',
    ],
    tags: ['Python', 'Odoo', 'PostgreSQL', 'REST APIs', 'Docker', 'CI/CD', 'JavaScript', 'OWL', 'Github', 'Gitlab', 'PyCharm', 'PEP 8',],
  },
  {
    id: 'self-employed',
    role: 'Data Analyst',
    company: 'Self-Employed',
    location: 'Turkey',
    period: 'Nov 2017 – May 2019',
    type: 'full-time',
    highlights: [
      'Collected, cleaned, and validated raw datasets from multiple heterogeneous sources, ensuring data integrity and analytical reliability.',
      'Performed statistical analysis and data visualization using Excel, SPSS, and Tableau to surface business insights.',
    ],
    tags: ['Excel', 'SPSS', 'Statistical Analysis'],
  },
  {
    id: 'selahaddin',
    role: 'Data Analyst & Researcher',
    company: 'Selahaddin Eyyubi University',
    location: 'Turkey',
    period: 'Mar 2014 – Jul 2016',
    type: 'academic',
    highlights: [
      'Cleaned, analyzed, and visualized educational, social, and economic datasets using Excel and Tableau.',
      'Processed complex raw datasets of 2,000+ records using advanced SQL querying with results communicated through Tableau dashboards.',
      'Delivered undergraduate and graduate lectures in Economics; managed cross-functional administrative responsibilities.',
    ],
    tags: ['Data Analysis', 'Research', 'Excel', 'Tableau', 'Stata',],
  },
  {
    id: 'dicle',
    role: 'Data Analyst & Researcher',
    company: 'Dicle University',
    location: 'Turkey',
    period: 'Mar 2010 – Jul 2014',
    type: 'academic',
    highlights: [
      'Conducted quantitative research on educational, social, and economic issues; published findings in international scientific journals using advanced statistical and econometric techniques.',
      'Applied statistical methods (SPSS, Stata) to derive conclusions from large observational datasets.',
      'Delivered lectures in Economics and held multiple institutional roles.',
    ],
    tags: ['Data Analysis', 'Research', 'SPSS', 'Stata', 'Excel', 'Econometrics'],
  },
  {
    id: 'tuik',
    role: 'Data Analyst & Researcher',
    company: 'Turkish Statistical Institute (TÜİK)',
    location: 'Turkey',
    period: 'Nov 2004 – Mar 2010',
    type: 'full-time',
    highlights: [
      'Researched and analyzed macroeconomic data; implemented forecasting models using Artificial Neural Networks and published findings.',
      'Extracted, processed, and analyzed complex datasets using visualization and analytics tools to derive predictive insights.',
      'Developed statistical predictive models supporting data-driven policy decisions.',
      'Managed collection, cleaning, and quality control of large-scale household and enterprise survey data across multiple regions.',
      'Planned and organized field research projects and coordinated regional data collection campaigns.',
    ],
    tags: ['Data Analysis', 'Research', 'Neural Networks', 'Forecasting', 'Excel', 'Statistical Modeling', 'Data Collection'],
  },
];
