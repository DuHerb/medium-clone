export class Article {
  id: number;
  imgUrl: string;
  pubDate: string;
  readTime: string;
  tags: string[];
  claps: number;

  constructor(
    public title: string,
    public tagline: string,
    public author: string,
    public category: string,
    public body: string,
    public readtime: string,
    public isFeatured: boolean,
    ) {
      this.id = 0;
      this.imgUrl = './../assets/img/seedImage.jpeg';
      this.pubDate = 'Default';
      this.claps = 0;
      this.tags = [];
    }

    getData(): object {
      const result = {};
      Object.keys(this).map(key => result[key] = this[key]);
      return result;
  }
}
