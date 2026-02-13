import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
export type Project = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
};

export type Experience = {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
};

// ================= HERO =================

//export const HERO_CONTENT = `
//Applying analytical rigor and engineering principles to solve real-world business and technology challenges.
//`;

// ================= ABOUT =================

export const ABOUT_TEXT = `
I am currently pursuing my B.Tech in Computer Science & Engineering (AI & Robotics) at VIT Chennai. My experience spans machine learning pipelines, financial analytics tools, and operational data analysis across academic and industry contexts. 

I contributed to a deep-learning research pipeline for anomaly detection in medical imaging, and have built projects involving portfolio analytics, predictive modelling, and data visualization. Professionally, I have worked on CRM analytics, KPI dashboards, and workflow automation during my internship, and led execution strategy for large-scale university events.

I enjoy collaborative environments, structured execution, and continuously expanding my technical and analytical skillset.
`;

// ================= EXPERIENCE =================

export const EXPERIENCES: Experience[] = [
  {
    year: "Sep 2025 — Dec 2025",
    role: "Business Development Intern",
    company: "Sentrix Robotics Pvt Ltd",
    description: `Analyzed CRM funnel data using SQL and Pandas to identify churn patterns and revenue gaps. Automated reporting workflows in Excel and Python, and supported cross-functional teams through KPI dashboards and data-backed insights.`,
    technologies: ["Python", "SQL", "Pandas", "Excel", "Power BI"],
  },
  {
    year: "Jun 2025 — Aug 2025",
    role: "Operations Manager",
    company: "Event Managers Club, VIT Chennai",
    description: `Led execution of 300+ large-scale events with 10,000+ participants. Built Excel-based tracking systems for budgeting and logistics while managing cross-functional teams to ensure timely delivery.`,
    technologies: ["Excel", "Operations Analytics", "Project Coordination"],
  },
  {
    year: "2025",
    role: "Research Contributor",
    company: "CINS Conference (BITS Dubai)",
    description: `Worked on a deep learning pipeline for anomaly detection in CT-guided surgical imaging using YOLO and U-Net models. Assisted preprocessing, experimentation, and evaluation workflows.`,
    technologies: ["Python", "YOLO", "U-Net", "OpenCV", "NumPy"],
  },
];

// ================= PROJECTS =================


export const PROJECTS: Project[] = [
  {
    title: "Stock Portfolio Analyzer",
    image: project1,
    description:
      "Developed an analytics tool using live market APIs and PostgreSQL to track investment portfolios. Implemented financial risk metrics including volatility, Sharpe ratio, and drawdown, and built interactive Power BI dashboards.",
    technologies: ["Python", "SQL", "Power BI", "PostgreSQL"],
  },
  {
    title: "Smart Construction Planner",
    image: project2,
    description:
      "Built regression and clustering models to optimize construction planning workflows. Conducted EDA, feature selection, and preprocessing pipelines for scenario-based resource allocation.",
    technologies: ["Python", "Machine Learning", "scikit-learn"],
  },
  {
    title: "Medical Imaging Anomaly Detection",
    image: project3,
    description:
      "Contributed to a research project developing deep learning models for detecting anomalies in CT-guided surgery imaging pipelines using YOLO and U-Net.",
    technologies: ["Python", "Deep Learning", "Computer Vision"],
  },
  {
    title: "Event Operations Analytics System",
    image: project4,
    description:
      "Designed spreadsheet-driven operational tracking and budgeting workflows supporting large-scale university events with data-backed planning and execution monitoring.",
    technologies: ["Excel", "Analytics", "Workflow Optimization"],
  },
];

// ================= CONTACT =================

export const CONTACT = {
  address: "Chennai, India",
  phoneNo: "+91-9596842411",
  email: "mahajanannie411@gmail.com",
};
