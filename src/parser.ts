import { FeedUrls } from './feed.urls';
let Parser = require('rss-parser');


export class RedditRSSParser {
  private readonly CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
  private readonly _feedUrls
  private readonly _parser

  constructor() {
    this._feedUrls = FeedUrls
    this._parser = new Parser()
  }

  public getFeedData(){
    return  this.parseUrls()
  }

  private async parseUrls() {
    const rssPromises: Promise<unknown>[] = []

    this._feedUrls.forEach(async (feedUrl: string) => {
      rssPromises.push(
        new Promise(async (resolve, reject) => {
          try {
            await this._parser.parseURL(`${this.CORS_PROXY}${feedUrl}`)
            resolve()
          } catch (error) {
            reject(error)
          }
        })
      )
    });

    await Promise.all(rssPromises)
  }
}
