export type ProjectCardProps = {
  title: string;
  description: any;
  link: string;
  stack: any;
  img: any;
};

export type ExperienceCardProps = {
  logo?: string;
  timeline: string;
  companyName: string;
  role: string;
  description: JSX.Element;
  subRole?: string;
  subDescription?: JSX.Element;
};
