export interface ArticleHeadMeta {
  title?: string;
  description?: string;
  image: string;
}
export interface Article extends MarkdownParsedContent {
  title: string;
  description: string;
  topic: string;
  createdAt: number;
  category: string;
  image: string;
  head: ArticleHeadMeta;
  alt: string;
  author: Author;
  tags: string[];
}


export interface Author {
  name: string;
  bio: string;
  img: string;
}
