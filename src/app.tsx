import React, { useEffect, useState } from 'react'
import { RedditRSSParser } from './model/parser'
import Parser from 'rss-parser';
import { Feed } from '~components/feed';
import { Container, Sidebar, Sidenav, Icon, Nav, Header, Content, Navbar, Dropdown } from "rsuite"


const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: '#34c3ff',
  color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
};

const iconStyles = {
  width: 56,
  height: 56,
  lineHeight: '56px',
  textAlign: 'center'
};

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Navbar.Body>
        <Nav>
          <Dropdown
            placement="topStart"
            trigger="click"
            renderTitle={children => {
              return <Icon style={iconStyles} icon="cog" />;
            }}
          >
            <Dropdown.Item>Help</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </Nav>

        <Nav pullRight>
          <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
            <Icon icon={expand ? 'angle-left' : 'angle-right'} />
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

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
      <Sidebar
        style={{ display: 'flex', flexDirection: 'column' }}
        width={260}
        collapsible
      >
        <Sidenav.Header>
          <div style={headerStyles}>
            <Icon icon="logo-analytics" size="lg" style={{ verticalAlign: 0 }} />
            <span style={{ marginLeft: 12 }}> BRAND</span>
          </div>
        </Sidenav.Header>
        <Sidenav
          expanded={true}
          defaultOpenKeys={['3']}
          appearance="subtle"
        >
          <Sidenav.Body>
            <Nav>
              <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
                Dashboard
              </Nav.Item>
              <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                User Group
              </Nav.Item>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </Sidebar>

      <Container>
        <Header>
          <h2>Page Title</h2>
        </Header>
        <Content>Content</Content>
      </Container>
    </Container>
  </div>
  // <div>
  //   <h1>Reddit Reader</h1>
  //   <div>{feeds.map((f, index) => <Feed feed={f} key={index} />)}</div>
  // </div>
}
