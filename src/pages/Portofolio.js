import React from 'react';
import { Layout, Row, Col, Card, Divider, Image } from 'antd';
import pdk from 'asset/pdk.png'
import dnet from 'asset/dnet.png'
import dnet2 from 'asset/dnet2.png'
import antara from 'asset/antara.png'
const { Content } = Layout;
const { Meta } = Card;

function Portofolio() {

  return (
    <>

      <Content id="Portofolio" className="reposivePortofolio">

        <Divider orientation="left">
          <div className="textHeight" >
            Portofolio
            </div>
        </Divider>

        <Row gutter={34}>

          <Col xs={24} sm={24} md={24} lg={24} xl={6}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<Image alt="example" src={dnet} />}
            >
              <Meta title={<span>Admin Customer Dnet</span>}
                description={
                  <span className="textAbout">
                    <b>Teknologi</b>
                    <ul>
                      <li>React.js</li>
                      <li>Graphql</li>
                      <li>Ant Design</li>
                      <li>Javascript</li>
                    </ul>
                    <b>My Responsibilities</b>
                    <br />
                    <ul>
                      <li>Convert PDF to HTML & CSS</li>
                      <li>Create feature Login</li>
                      <li>Create CRUD</li>
                      <li>Create feature pagination dan filter</li>
                      <li>Create feature upload image</li>
                      <li>Build and maintain issues on the frontend</li>
                    </ul>
                  </span>
                } />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={6}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<Image alt="example" src={antara} />}
            >
              <Meta title={<span>antara88 Tour and Travel</span>}
                description={
                  <span className="textAbout">
                    <b>Teknologi</b>
                    <ul>
                      <li>Codeigniter</li>
                      <li>Javascript</li>
                      <li>Mysql</li>
                      <li>Jquery</li>
                      <li>Bootsrap</li>
                    </ul>

                    <b>My Responsibilities</b>
                    <br />
                    <ul>
                      <li>Convert PDF to HTML & CSS</li>
                      <li>Create feature Login</li>
                      <li>Create feature report finances</li>
                      <li>Create feature booking travel</li>
                      <li>Create feature print out PDF</li>
                      <li>Build and maintain issues on the frontend and backend</li>
                    </ul>
                  </span>
                } />
            </Card>
          </Col>
          <br />
          <Col xs={24} sm={24} md={24} lg={24} xl={6}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<Image alt="example" src={pdk} />}
            >
              <Meta title={<span>Company Profile Putra Dharma Kencana</span>}
                description=
                {
                  <span className="textAbout">
                    <b>Teknologi</b>
                    <ul>
                      <li>Codeigniter</li>
                      <li>Javascript</li>
                      <li>Mysql</li>
                      <li>Jquery</li>
                      <li>Bootsrap</li>
                    </ul>

                    <b>My Responsibilities</b>
                    <br />
                    <ul>
                      <li>Create feature Company Profile Customer</li>
                      <li>Create feature Dashboard Admin</li>
                      <li>Create feature CRUD profile</li>
                      <li>Create feature upload image</li>
                      <li>Build and maintain issues on the frontend and backend</li>
                    </ul>
                  </span>
                }
              />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={6}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<Image alt="example" src={dnet2} />}
            >
              <Meta title={<span>Announcement Apps Dnet</span>}
                description=
                {
                  <span className="textAbout">
                    <b>Teknologi</b>
                    <ul>
                      <li>React.js</li>
                      <li>Graphql</li>
                      <li>Ant Design</li>
                      <li>Javascript</li>
                    </ul>
                    <b>My Responsibilities</b>
                    <br />
                    <ul>
                      <li>Convert PDF to HTML & CSS</li>
                      <li>Add feature pagination dan filter</li>
                      <li>Maintain issues on the frontend</li>
                      <li>Add feature menu template email on the frontend</li>
                    </ul>
                  </span>
                }
              />
            </Card>
          </Col>
        </Row>

      </Content>
    </>
  )
}
export default Portofolio;
