import { Experience } from "./experience.type";

export type Project = {
  title: string;
  text: string;
  techs: Experience[];
  img: string;
  link?: string;
};
