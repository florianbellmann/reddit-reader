let RSSParser = require('rss-parser');
import { FeedUrls } from './feed.urls';
import * as Parser from "rss-parser"

export class RedditRSSParser {
  private readonly CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
  private readonly _feedUrls: string[]
  private readonly _parser: Parser
  private _feeds: Parser.Output[] = []

  constructor() {
    this._feedUrls = FeedUrls
    this._parser = new RSSParser({ headers: { "X-Requested-With": "XMLHttpRequest" } })
  }

  public async getFeedData() {
    if (this._feeds.length === 0) await this.parseUrls()
    return this._feeds
  }

  private async parseUrls() {
    const rssPromises: Promise<unknown>[] = []

    this._feedUrls.forEach(async (feedUrl: string) => {
      rssPromises.push(
        new Promise(async (resolve, reject) => {
          try {
            const feed = await this._parser.parseURL(`${this.CORS_PROXY}${feedUrl}`)
            this._feeds.push(feed)
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
