export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'data-science' | 'python' | 'sql' | 'bi' | 'cloud' | 'devops';
  link: string;
}

export const certifications: Certification[] = [
{
    id: 'python-ds',
    title: 'Python for Data Science & Machine Learning Bootcamp',
    issuer: 'Udemy',
    date: 'Jul 2020',
    category: 'python',
    link:'https://www.udemy.com/certificate/UC-6df5ff03-21c6-435a-a229-62c9503a9fee'
  },
  {
    id: 'ds-ml',
    title: 'Data Scientist: Machine Learning Specialist',
    issuer: 'Codecademy',
    date: 'Dec 2020',
    category: 'data-science',
    link: 'https://www.codecademy.com/profiles/polat/certificates/5b520caa1d176d21f5a65a61'
  },

  {
    id: 'powerbi',
    title: 'Master in Microsoft Power BI Desktop',
    issuer: 'Udemy',
    date: 'Apr 2021',
    category: 'bi',
    link: 'https://www.udemy.com/certificate/UC-49a4da05-be03-449c-91ca-8d42e3e33f5d/'
  },
  {
    id: 'tableau',
    title: 'The Complete Tableau Bootcamp for Data Visualization',
    issuer: 'Udemy',
    date: 'Mar 2021',
    category: 'bi',
    link: 'https://www.udemy.com/certificate/UC-bfce0637-f20e-40b8-8299-07f968994e6c/'
  },

];
