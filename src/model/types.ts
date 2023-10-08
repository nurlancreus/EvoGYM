export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

// export type ClassType = Record<string, string>;

// export interface ClassType {
//   [index: string]: string
// }

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
