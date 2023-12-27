// Definitions
import { type TechnologyType } from '@/types/technology';

export type PortfolioType = {
  id: string;
  type: string;
  link: string;
  mainImgName: string;
  images: string[];
  technologies: TechnologyType[];
  title: string;
  description: string;
  feedback: string;
};
