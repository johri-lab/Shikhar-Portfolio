import { mlTrading, genAIJudge, mtaCommutePal, fraudDetection } from './hero.const';
import tradingImg from '../images/roommatetinder.png';
import genAIJudgeImg from '../images/speaksphere.png';
import commutePalImg from '../images/queryfuel.png';
import fraudDetectionImg from '../images/queryfuel.png';
import barclays from '../images/barclays.jpeg';
import tcs from '../images/tcs.png';
import nebdhub from '../images/nebdhub.jpeg';
import thapar from '../images/thapar.png';
import peloton from '../images/Peloton.png';

export const introData = {
  introLine: `Hi, I'm Shikhar Johri. A Machine Learning Engineer based in New York.📍`,
  gitHubLink: 'https://github.com/johri-lab',
  linkedInLink: 'https://www.linkedin.com/in/shikhar-johri/',
  sequence: [
    '👨‍💻 Machine Learning Engineer',
    2000,
    '👨‍💻 Data Scientist',
    2000,
    '👨‍💻 AI Engineer',
    2000,
    '👨‍💻 Quant Analyst',
    2000,
  ],
  gitHubUsername: 'johri-lab',
};

export const aboutData = {
  aboutLine: 'A Machine Learning Engineer building personalization & LLM systems 📍',
  aboutDescription: `I build production-grade ML systems across personalization, ranking, retrieval, and LLM-powered experiences. At Peloton, I work on agentic AI workflows, recommendation quality, and system reliability at scale. Previously, I focused on data quality, analytics automation, and NLP systems at Barclays and Tata Consultancy Services.`,
};

export const experienceData = [
  {
    timeline: 'Feb 2025 - Present, New York - NY',
    companyName: 'Peloton Interactive, Inc.',
    role: 'Machine Learning Engineer',
    logo: peloton,
    description: [
      'Owned and productionized an agentic AI instructor using LangGraph, enabling multi-step, guardrailed LLM workflows for personalized training plan generation.',
      'Shipped onboarding personalization using GPT-4 and XGBoost to capture user mood and intent, improving early-session engagement and reducing cold-start friction.',
      'Improved ranking and retrieval quality via transformer-based candidate generation combined with Neo4j graph signals, driving measurable MAP@K gains.',
      'Led a cross-service redesign of plan and insight invalidation pipelines (Kafka, DynamoDB, gRPC), improving data correctness, system reliability, and long-term maintainability.',
      'Raised team velocity by standardizing evaluation, monitoring, and error-handling across personalization services, while also driving cloud cost savings through infra cleanup.',
    ],
  },
  {
    timeline: 'Jun 2024 - Dec 2024, New York - NY',
    companyName: 'Barclays',
    role: 'Data Scientist Co-op',
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
    role: 'AI Engineer',
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

export const publicationsData = [
  {
    title: 'Two-Stage Semantic GAN for Image Super-Resolution',
    venue: 'Computer Vision and Image Understanding',
    year: '2025',
    description: 'Designed a GAN-based framework for semantic-aware image super-resolution.',
    link: 'https://doi.org/10.1016/j.cviu.2024.104226',
  },
  {
    title: 'TENSOPIT: Tensor-Structured Bloom Filters for Real-Time Data Caching',
    venue: 'Under Review',
    year: '2024',
    description: 'Introduced a tensor-based Bloom Filter with Kalman forecasting for adaptive caching.',
  },
  {
    title: 'Machine Learning Framework for COVID-19 Auto-Detection',
    venue: 'International Journal of Imaging Systems & Technology',
    year: '2021',
    description: 'Proposed an adaptive ensemble learning framework for automated COVID-19 diagnosis from medical imaging.',
    link: 'https://doi.org/10.1002/ima.22613',
  },
  {
    title: 'Serum and CSF Cytokine Biomarkers for Multiple Sclerosis Diagnosis',
    venue: 'Mediators of Inflammation',
    year: '2020',
    description: 'Identified predictive biomarker signatures using statistical modeling and feature analysis.',
    link: 'https://doi.org/10.1155/2020/2727042',
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
