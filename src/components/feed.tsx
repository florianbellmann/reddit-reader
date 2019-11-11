import React from 'react'
import Parser from 'rss-parser'
import { Table } from 'rsuite'
const { Column, HeaderCell, Cell } = Table


function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}


export const Feed: React.FC<{ feed: Parser.Output }> = props => {
  const { feed } = props
console.log('feed', feed)

  let tableItems = []
  if (feed.items) {
    for (let index = 0; index < feed.items.length; index++) {
      if (index > 4) break
      const item = feed.items[index]
      tableItems.push(
        {
          title: item.title,
          link: item.link
        }
      )
    }
  }

  return <div>
    <h2>{feed.title}</h2>
    {feed.items ?
      <Table
        height={400}
        wordWrap={true}
        data={tableItems}
        onRowClick={data => {
          openInNewTab(data.link)
        }}
      >
        <Column flexGrow={1}>
          <HeaderCell>
            Title
            </HeaderCell>
          <Cell dataKey="title" />
        </Column>
      </Table>
      : null}
  </div>
}
