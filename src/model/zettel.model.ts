export interface ZettelModel {
  id: number;
  title: string;
  body: string;
  tags: string[];
  links: string[];
  createdAt: Date;
  updatedAt: Date;
}