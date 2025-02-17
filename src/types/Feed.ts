export interface Feed {
  articles: ArticleFeeds[];
  articlesCount: number;
}

export interface ArticleFeeds {
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

export interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}
export interface PageChangeData {
  selected: number;
}
