import { IconName } from '@fortawesome/fontawesome-svg-core';

export type Image = {
  src: string;
  alt: string;
};

export type Favicon = {
  src: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  order: number;
  label: string;
  slug: string;
  images: any;
  thumbnail: any;
};

export type About = {
  markdown: string;
  profile: Image;
};

export type SocialLink = {
  url: string;
  name: string;
  icon: IconName;
};
