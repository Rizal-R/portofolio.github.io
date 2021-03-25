import React from 'react';

import { Layout, Card, Row, Col, Progress } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faCode } from '@fortawesome/free-solid-svg-icons'

const { Content } = Layout;
function About() {

  return (
    <>
      <Content id="About" style={{ padding: 50 }}>
        <div>
          <Row gutter={12}>
            <Col xs={24} sm={24} md={24} lg={24} xl={6}>
              <Card style={{ width: "100%" }}>
                <center>
                  <FontAwesomeIcon icon={faPalette} style={{ fontSize: 48, color: "#215a58" }} />
                  <div style={{ fontSize: 25, fontWeight: "bold" }}>WEB DESIGNER</div>
                </center>
                <br />
                <div style={{ textAlign: "justify" }}>
                  Saya suka merancang tampilan website secara visual dari gambar visual dengan menyalurkan ide-ide kreatif di setiap elemen yang ada di website.
                  Mengkonversi layout visual ke dalam bentuk HTML dan CSS untuk memastikan bisa dijalankan di web browser.
              </div>
              </Card>
            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={6}>
              <Card style={{ width: "100%" }}>
                <center>
                  <FontAwesomeIcon icon={faCode} style={{ fontSize: 48, color: "#215a58" }} />
                  <div style={{ fontSize: 25, fontWeight: "bold" }}>Development</div>
                </center>
                <br />
                <div style={{ textAlign: "justify" }}>
                  Saya suka belajar dengan pemograman beberapa framework website progamming, salah satunya untuk frontend mengunakan react.js dan codeigniter dan laravel untuk fullstack.
                  Belajar pemograman adalah impian saya menuju kesuksesan dan berlatih berfikir secara logis.
              </div>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
              <Card style={{ width: "100%" }}>

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

              </Card>
            </Col>
          </Row>

        </div>
      </Content>
    </>
  )
}
export default About;
