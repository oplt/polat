export interface SkillGroup {
  id: string;
  label: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    label: 'Backend Development',
    icon: 'code',
    skills: ['Python', 'Django', 'Flask', 'FastAPI', 'Odoo', 'REST APIs', ],
  },
{
    id: 'ai',
    label: 'AI & Machine Learning',
    icon: 'psychology',
    skills: ['LLM Integration',  'RAG', 'Ollama', 'OpenAI API', 'Whisper', 'Neural Networks', 'SQLAlchemy',],
  },
  {
    id: 'devops',
    label: 'DevOps & Tooling',
    icon: 'terminal',
    skills: ['Docker', 'GitHub Actions', 'GitLab CI/CD', 'Git', 'PyCharm', 'Linux', 'Pytest', 'Unit Testing'],
  },
  {
    id: 'data',
    label: 'Data & Analytics',
    icon: 'analytics',
    skills: ['Pandas', 'NumPy', 'SciPy', 'Matplotlib', 'Seaborn', 'BeautifulSoup'],
  },

  {
    id: 'bi',
    label: 'Visualization & BI',
    icon: 'bar_chart',
    skills: ['Tableau', 'Power BI', 'DAX', 'Dashboard Design'],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: 'storage',
    skills: ['PostgreSQL', 'SQL', 'MongoDB'],
  },

  {
    id: 'frontend',
    label: 'Frontend',
    icon: 'web',
    skills: ['JavaScript', 'React', 'HTML/CSS', 'OWL', 'XML'],
  },
  {
    id: 'languages',
    label: 'Languages',
    icon: 'translate',
    skills: ['English (Advanced)', 'Dutch (A2)'],
  },
];
