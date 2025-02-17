export interface CreateArticle {
  article: ArticleForCreate;
}

export interface ArticleForCreate {
  title: string;
  description: string;
  body: string;
  tags: string;
}
export interface CreateArticleBIO {
  article: ArticleForBIO;
}

export interface ArticleForBIO {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}
