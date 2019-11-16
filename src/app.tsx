import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import { Container, Content, Header } from 'rsuite';
import { Feed } from '~components/feed';
import { Loader } from '~loader';

import { RedditRSSParser } from './model/parser';


export const App: React.FC = (props) => {
  let parser = new RedditRSSParser();

  const [feeds, setFeeds] = useState<Parser.Output[]>([])

  useEffect(() => {
    async function getFeedData() {
      setFeeds(await parser.getFeedData())
    }

    getFeedData()
  }, [])

  return <div>
    <Container>
      <Container>
        <Header>
          <h1>Reddit Reader</h1>
        </Header>
        <Content>
          {(feeds.length === 0) ? <Loader size={30} /> : feeds.map((f, index) => <Feed feed={f} key={index} />)}
        </Content>
      </Container>
    </Container>
  </div>
}
