import React, { useState } from 'react';
import { Layout, Row, Col, Card, Divider, Image, Button } from 'antd';
import pdk from 'asset/pdk.png'
import dnet from 'asset/dnet.png'
import dnet2 from 'asset/dnet2.png'
import antara from 'asset/antara.png'
import payment from 'asset/payment.png'
import dashby from 'asset/dashby.png'
import xinau from 'asset/xinau.png'
import DrawerDetail from './DrawerDetails';
const { Content } = Layout;
const { Meta } = Card;

function Portofolio() {
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState();
  const [img, setImg] = useState();
  const showDrawer = (id, img) => {
    setId(id);
    setImg(img);
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Content id="Portofolio" className="reposivePortofolio">

        <Divider orientation="left">
          <div className="textHeight" >
            Portofolio
          </div>
        </Divider>

        <Row>

          <Col xs={24} sm={24} md={24} lg={24} xl={6} style={{ padding: 10 }}>
            <Card
              style={{ width: "100%", textAlign: 'center' }}
              cover={<Image alt="example" src={dnet} />}
            >
              <Meta title={<span>Admin Customer Dnet</span>}
                description={
                  <span>
                    <Button className="detailButton" onClick={() => showDrawer(1, dnet)}>Details</Button>
                  </span>
                } />
            </Card>
          </Col>

          <Col xs={24} sm={24} md={24} lg={24} xl={6} style={{ padding: 10 }}>
            <Card
              style={{ width: "100%", textAlign: 'center' }}
              cover={<Image alt="example" src={antara} />}
            >
              <Meta title={<span>antara88 Tour and Travel</span>}
                description={
                  <span>
                    <Button className="detailButton" onClick={() => showDrawer(2, antara)}>Details</Button>
                  </span>
                } />
            </Card>
          </Col>

          <Col xs={24} sm={24} md={24} lg={24} xl={6} style={{ padding: 10 }}>
            <Card
              style={{ width: "100%", textAlign: 'center' }}
              cover={<Image alt="example" src={pdk} />}
            >
              <Meta title={<span>Company Profile Putra Dharma Kencana</span>}
                description=
                {
                  <span>
                    <Button className="detailButton" onClick={() => showDrawer(3, pdk)}>Details</Button>
                  </span>
                }
              />
            </Card>
          </Col>

          <Col xs={24} sm={24} md={24} lg={24} xl={6} style={{ padding: 10 }}>
            <Card
              style={{ width: "100%", textAlign: 'center' }}
              cover={<Image alt="example" src={dnet2} />}
            >
              <Meta title={<span>Announcement Apps Dnet</span>}
                description={
                  <span >
                    <Button className="detailButton" onClick={() => showDrawer(4, dnet2)}>Details</Button>
                  </span>
                }
              />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={6} style={{ padding: 10 }}>
            <Card
              style={{ width: "100%", textAlign: 'center' }}
              cover={<Image alt="example" src={payment} />}
            >
              <Meta title={<span>Payment D~NET</span>}
                description={
                  <span >
                    <Button className="detailButton" onClick={() => showDrawer(5, payment)}>Details</Button>
                  </span>
                }
              />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={6} style={{ padding: 10 }}>
            <Card
              style={{ width: "100%", textAlign: 'center' }}
              cover={<Image alt="example" src={dashby} />}
            >
              <Meta title={<span>Dashby D~NET</span>}
                description={
                  <span >
                    <Button className="detailButton" onClick={() => showDrawer(6, dashby)}>Details</Button>
                  </span>
                }
              />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={6} style={{ padding: 10 }}>
            <Card
              style={{ width: "100%", textAlign: 'center' }}
              cover={<Image alt="example" src={xinau} />}
            >
              <Meta title={<span>Xinau</span>}
                description={
                  <span >
                    <Button className="detailButton" onClick={() => showDrawer(7, xinau)}>Details</Button>
                  </span>
                }
              />
            </Card>
          </Col>
        </Row>
      </Content>
      <DrawerDetail
        visible={visible}
        onClose={onClose}
        id={id}
        img={img}
      />
    </>
  )
}
export default Portofolio;
