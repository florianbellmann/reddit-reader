import React from 'react'
import Parser from 'rss-parser'
import { FeedItem } from './feed.item'

export const Feed: React.FC<{ feed: Parser.Output }> = props => {
  const { feed } = props

  return <div>
    <h2>{feed.title}</h2>
    {feed.items ?
      <ul>
        {feed.items.map((i, index) => <FeedItem item={i} key={index} />)}
      </ul>
      : null}
  </div>
}
