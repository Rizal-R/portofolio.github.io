import React from 'react';
import { Layout, Row, Col, Progress } from 'antd';
import rizal from 'asset/rizal2.png';

import { WhatsAppOutlined, FacebookFilled, InstagramOutlined } from '@ant-design/icons';
const { Content } = Layout;

function Contact() {

  return (
    <>
      <Content id="Contact" className="responsive">
        <div className="site-layout-content">
          <Row gutter={24}>
            <Col xs={24} sm={24} md={24} lg={24} xl={12} style={{ textAlign: "center", padding: 30 }}>
              <img className="img" src={rizal} alt="Img" />
              <br />
              <br />
              <div className="textHeight" style={{ color: "" }}>I'M RIZAL RUDIANTORO</div>


            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
              <div className="textHeight" style={{ textAlign: "center" }}>FRONTEND DEVELOPER</div>
              <br />
              <div className="textHeight-2">
                Nama saya Rizal dan saya lahir di Trenggalek , 26 November
                1994 saya belum pernah menikah dan beragama Islam.
                Saya adalah seorang yang gemar menekuni teknologi
                informasi khususnya dalam bidang Artificial intelligence
                (AI) dan juga sering mengimplementasikan dalam bahasa
                pemrograman.
              </div>
              <br />
              <div style={{ textAlign: "left", color: '#807b7b' }}>
                <b>React.js</b>
                <Progress percent={85}
                  strokeColor={{
                    '0%': '#3aab9d',
                    '100%': '#3aab9d',
                  }}

                  status="active"
                />
                <b>RestAPI</b>
                <Progress percent={80}
                  strokeColor={{
                    '0%': '#3aab9d',
                    '100%': '#3aab9d',
                  }}

                  status="active"
                />
                <b>Graphql</b>
                <Progress percent={90} status="active" />
                <b>Codeigniter</b>
                <Progress percent={80} status="active" />
                <b>Laravel</b>
                <Progress percent={60}
                  strokeColor={{
                    '0%': '#eb2f96',
                    '100%': '#eb2f96',
                  }}

                  status="active"
                />
                <b>PHP, CSS, HTML</b>
                <Progress percent={80}
                  strokeColor={{
                    '0%': '#eb2f96',
                    '100%': '#eb2f96',
                  }}

                  status="active"
                />
                <b>Javascript</b>
                <Progress percent={70}
                  strokeColor={{
                    '0%': '#faad14',
                    '100%': '#faad14',
                  }}

                  status="active"
                />
                <b>Jquery</b>
                <Progress percent={80}
                  strokeColor={{
                    '0%': '#faad14',
                    '100%': '#faad14',
                  }}

                  status="active"
                />
              </div>
              <br />
              <br />
              <Row>
                <Col xs={6} sm={6} md={6} lg={6} xl={3} style={{ padding: 10 }}>
                  <div className="icon whatsapp">
                    <a href="https://api.whatsapp.com/send?phone=6282229355560" rel="noreferrer noopener" target="_blank"><WhatsAppOutlined style={{ color: "#fff" }} /></a>
                  </div>
                </Col>

                <Col xs={6} sm={6} md={6} lg={6} xl={3} style={{ padding: 10 }}>
                  <div className="icon facebook">
                    <a href="https://id-id.facebook.com/bajoel.icul" rel="noreferrer noopener" target="_blank"> <FacebookFilled style={{ color: "#fff" }} /></a>
                  </div>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={3} style={{ padding: 10 }}>
                  <div className="icon instagram">
                    <a href="https://www.instagram.com/rizal_rudiantoro/" rel="noreferrer noopener" target="_blank"> <InstagramOutlined style={{ color: "#fff" }} /></a>
                  </div>
                </Col>
              </Row>

            </Col>
          </Row>
        </div>
      </Content>
    </>
  )
}
export default Contact;
