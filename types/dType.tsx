export type NavLinks = {
  id: string;
  title: string;
}[];
export type Services = {
  title: string;
  icon: any;
}[];

export type Technologies = {
  name: string;
  icon: any;
}[];
export type Experiences = {
  title: string;
  company_name: string;
  icon: any;
  iconBg: any;
  date: any;
  points: string[];
}[];
export type Testimonials = {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}[];
export type Projects = {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: any;
  source_code_link: string;
}[];
