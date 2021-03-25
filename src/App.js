import React from 'react';
import './App.less';
import { Layout, Anchor } from 'antd';
import About from 'pages/About'
import Contact from 'pages/Contact'
import Resume from 'pages/Resume'
const { Header, Footer } = Layout;
const { Link } = Anchor;

class App extends React.Component {
  render() {
    return (
      <>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Anchor targetOffset="50" >
              <Link href="#Contact" title="Contact" />
              <Link href="#About" title="About" />
              <Link href="#Resume" title="Resume" />
            </Anchor>
          </Header>
          <Contact />
          <About />
          <Resume />
          <Footer style={{ textAlign: 'center' }}>Rizal Rudiantoro Portofolio ©2021</Footer>
        </Layout>
      </>
    )
  }
}
export default App;
