export class Article {
  constructor(
    public title: string,
    public tagline: string,
    public author: string,
    public category: string,
    public body: string,
    public readtime: string,
    public isFeatured: boolean
  ) {

  }
  id: number;
  imgUrl: string;
  pubDate: string;
  readTime: string;
  tags: string[];
  claps: number;
}
