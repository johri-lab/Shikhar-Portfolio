import { mlTrading, genAIJudge, mtaCommutePal, fraudDetection } from './hero.const';
import tradingImg from '../images/roommatetinder.png';
import genAIJudgeImg from '../images/speaksphere.png';
import commutePalImg from '../images/queryfuel.png';
import fraudDetectionImg from '../images/queryfuel.png';
import barclays from '../images/barclays.jpeg';
import tcs from '../images/tcs.png';
import nebdhub from '../images/nebdhub.jpeg';
import thapar from '../images/thapar.png';

export const introData = {
  introLine: `Hi, I'm Shikhar Johri. A passionate Data Scientist based in New York.📍`,
  gitHubLink: 'https://github.com/johri-lab',
  linkedInLink: 'https://www.linkedin.com/in/shikhar-johri/',
  sequence: [
    '👨‍💻 Data Scientist',
    2000,
    '👨‍💻 AI Researcher',
    2000,
    '👨‍💻 Quantitative Analyst',
    2000,
  ],
  gitHubUsername: 'johri-lab',
};

export const aboutData = {
  aboutLine: 'An innovative Data Scientist exploring AI and Quantitative Research 📍',
  aboutDescription: `Specialized in leveraging Machine Learning, AI, and statistical tools to solve complex challenges. Experienced across finance, healthcare, and research, with impactful roles at Barclays and TCS. At Columbia University, I focus on fraud detection, algorithmic trading, and personalized AI assistants.`,
};

export const experienceData = [
  {
    timeline: 'Jun 2024 - Present, New York - NY',
    companyName: 'Barclays',
    role: 'Data Science Intern',
    logo: barclays,
    description: [
      'Automated quality validation for 10K+ datasets, improving efficiency.',
      'Developed a LLaMA-based metadata analysis tool, ensuring $100K savings.',
      'Streamlined Monthly Business Review process, reducing analyst effort by a week.',
    ],
  },
  {
    timeline: 'Sep 2021 - Jul 2023, Karnataka - IN',
    companyName: 'Tata Consultancy Services',
    role: 'Data Scientist',
    logo: tcs,
    description: [
      'Accelerated blood sample analysis to 800ms using YOLOv4, saving $400K annually.',
      'Developed catheter inspection system with Meta Detectron2, increasing precision by 25%.',
      'Built tools to convert 2D CT scans into 3D visualizations, enhancing diagnostics.',
    ],
  },
  {
    timeline: 'Nov 2020 - Sep 2021, Karnataka - IN',
    role: 'Data Engineer',
    description: [
      'Deployed a 40TB AWS data lake with ETL pipelines for Genentech.',
      'Developed a sales analysis tool generating $2M+ in revenue within one quarter.',
      'Reduced storage costs by 90% through tiered data distribution.',
      'Led research in NLP-based report summarization and employee recommender systems.',
    ],
  },
  {
    timeline: 'Jun 2019 - Oct 2019, Punjab - IN',
    companyName: 'Thapar University',
    role: 'Data Science Research Intern',
    logo: thapar,
    description: [
      'Published Adaptive Ensemble Model for COVID-19 diagnosis with 98% accuracy.',
      'Discovered genetic biomarkers for Multiple Sclerosis using feature analysis.',
      'Introduced a TensoPIT Bloom Filter with Kalman forecasting for real-time data caching.',
    ],
  },
  {
    timeline: 'Sep 2023 - Present, New York - NY',
    companyName: 'NE Big Data Hub',
    role: 'Graduate Student Assistant',
    logo: nebdhub,
    description: [
      'Led the Covid Information Commons team on pandemic policy response inference.',
      'Developed dashboards and visualizations to advance data science research.',
    ],
  },
];


export const projectData = [
  {
    img: tradingImg,
    title: 'Algorithmic ML Trading Strategy',
    description: [
      'Backtested a model achieving a 29.48% ROI for ETF stock prediction.',
    ],
    link: 'https://github.com/johri-lab/Algorithmic-ML-Trading-Strategy',
    stack: mlTrading,
  },
  {
    img: fraudDetectionImg,
    title: 'Credit Card Fraud Detection',
    description: [
      'Explainable AI-based model using AutoML and NLP techniques.',
    ],
    link: 'https://github.com/johri-lab/Credit_card_fraud_detection_explainableAI',
    stack: fraudDetection,
  },
  {
    img: genAIJudgeImg,
    title: 'GenAIJudge',
    description: [
      'GPT-4 powered policy evaluation tool for sustainability efforts.',
    ],
    link: 'https://github.com/johri-lab/GenAIJudge',
    stack: genAIJudge,
  },
  {
    img: commutePalImg,
    title: 'MTA-Commute-Pal',
    description: [
      'Optimized travel with predictive modeling using NYC MTA data.',
    ],
    link: 'https://github.com/johri-lab/MTA-Commute-Pal',
    stack: mtaCommutePal,
  },
];

export const contactData = {
  place: 'New York, NY',
  email: 'sj3327@columbia.edu',
};

export const footerData = {
  linkedIn: 'https://www.linkedin.com/in/shikhar-johri/',
  github: 'https://github.com/johri-lab',
};
