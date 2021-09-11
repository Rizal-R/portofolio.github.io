import React from 'react';
import { Layout, Card, Row, Col } from 'antd';


const { Content } = Layout;
function About() {

  return (
    <>
      <Content id="About" style={{ padding: 20 }}>
        <div>
          <Row gutter={30}>
            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
              <Card className="card-about" style={{ width: "100%" }}>
                <div className="textHeight">
                  Freelance
                </div>
                <br />
                <div className="textAbout text">
                  Saya mengawali karir di dunia IT sebagai freelance WEB Development, itu membuat saya lebih mengetahui wawasan yang lebih luas tentang dunia pogramming.
                  Saya suka merancang tampilan website secara visual dari gambar visual dengan menyalurkan ide-ide kreatif di setiap elemen yang ada di website.
                  Mengkonversi layout visual ke dalam bentuk HTML dan CSS untuk memastikan bisa dijalankan di web browser.
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
              <Card className="card-about" style={{ width: "100%" }}>
                <div className="textHeight">
                  Development
                </div>
                <br />
                <div className="textAbout text">
                  Saya suka belajar dengan pemograman beberapa framework website progamming, salah satunya untuk frontend mengunakan react.js dan codeigniter dan laravel untuk fullstack.
                  Belajar pemograman adalah impian saya menuju kesuksesan dan berlatih berfikir secara logis.
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
            </Col>
          </Row>
        </div>
      </Content>
    </>
  )
}
export default About;
