export interface Post {
  path: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  tags: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
  year: number;
}
