import React from 'react'
import Parser from 'rss-parser'

export const FeedItem: React.FC<{ item: Parser.Item }> = props => {
  const { item } = props

  console.log('item', item)
  return <div>
    <a target="_blank" href={item.link}>
      <h4>{item.title}</h4>
      <p>{item.content}</p>
    </a>
  </div>
}
