import React from 'react';
import { Layout, Row, Col } from 'antd';
import rizal from 'asset/rizal.png';

import { WhatsAppOutlined, FacebookFilled, InstagramOutlined, MailOutlined } from '@ant-design/icons';
const { Content } = Layout;

function Contact() {

  return (
    <>
      <Content id="Contact" style={{ paddingBottom: 50, paddingLeft: 50, paddingRight: 50 }}>
        <div className="site-layout-content">
          <Row gutter={24}>
            <Col xs={24} sm={24} md={24} lg={24} xl={12} style={{ textAlign: "center" }}>
              <img className="img" src={rizal} alt="Logo" width="50%" />
              <br />
              <div className="textHeight" style={{ fontSize: 20 }}>Teknik Informatika</div>
              <div className="textHeight" >Universitas Brawijaya</div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
              <div className="textHeight">HEY</div>
              <div className="textHeight" style={{ color: "#126984" }}>I'M RIZAL RUDIANTORO</div>
              <div className="textHeight" style={{ color: "#faad14" }}>WEB DEVELOPER & DESIGNER</div>
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
              <Row>
                <Col xs={6} sm={6} md={6} lg={6} xl={3} style={{ padding: 10 }}>
                  <div className="icon">
                    <a href="https://api.whatsapp.com/send?phone=6282229355560" rel="noreferrer noopener" target="_blank"><WhatsAppOutlined style={{ color: "#118060" }} /></a>
                  </div>
                </Col>
                <Col xs={18} sm={18} md={18} lg={18} xl={9}>
                  <div className="textIcon">082229355560</div>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={3} style={{ padding: 10 }}>
                  <div className="icon">
                    <a href="https://id-id.facebook.com/bajoel.icul" rel="noreferrer noopener" target="_blank"> <FacebookFilled style={{ color: "blue" }} /></a>
                  </div>
                </Col>
                <Col xs={18} sm={18} md={18} lg={18} xl={9}>
                  <div className="textIcon">Rizal Rudianto</div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={6} sm={6} md={6} lg={6} xl={3} style={{ padding: 10 }}>
                  <div className="icon">
                    <a href="https://www.instagram.com/rizal_rudiantoro/" rel="noreferrer noopener" target="_blank"> <InstagramOutlined style={{ color: "#ff00b1" }} /></a>
                  </div>
                </Col>
                <Col xs={18} sm={18} md={18} lg={18} xl={9}>
                  <div className="textIcon">rizal_rudiantoro</div>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={3} style={{ padding: 10 }}>
                  <div className="icon">
                    <MailOutlined style={{ color: "red" }} />
                  </div>
                </Col>
                <Col xs={18} sm={18} md={18} lg={18} xl={9}>
                  <div className="textIcon">rizalrudiantoro@gmail.com</div>
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
