export interface IAuthor {
  name?: string;
}

export interface IArticle {
  id?: number;
  title?: string;
  authors?: IAuthor[];
  summary?: string;
  publishedAt?: string;
  updatedAt?: string;
  featured?: boolean;
}
