import React from 'react';
import { Layout, Row, Col, Timeline } from 'antd';
const { Content } = Layout;

function Resume() {

  return (
    <>
      <Content id="Resume" style={{ padding: 50 }}>
        <div className="site-layout-content">
          <Row gutter={12}>
            <Col xs={24} sm={24} md={24} lg={24} xl={12} style={{ padding: 30 }}>
              <div className="textHeight">EXPERIENCE</div>
              <hr />
              <br />
              <br />
              <Timeline style={{ fontSize: 20 }}>
                <Timeline.Item color="blue">
                  <p><b>MAGANG</b></p>
                  <p>PT. PUTRA DHARMA KENCANA</p>
                  <p>2016</p>
                </Timeline.Item>
                <Timeline.Item color="blue">
                  <p><b>PROJEK</b></p>
                  <p>YAYASAN PENDIDIKAN PERINTIS</p>
                  <p>Membangun website sekolah</p>
                  <p>2016</p>
                </Timeline.Item>
                <Timeline.Item color="blue">
                  <p><b>PROJEK</b></p>
                  <p><a href="http://www.putradharmakencana.com/" rel="noreferrer noopener" target="_blank">PT. PUTRA DHARMA KENCANA</a></p>
                  <p>Membangun website perusahaan</p>
                  <p>2019</p>
                </Timeline.Item>
                <Timeline.Item color="blue">
                  <p><b>PROJEK</b></p>
                  <p><a href="http://antara88.com/" rel="noreferrer noopener" target="_blank">www.antara88.com</a></p>
                  <p>Membangun website penjadwalan travel dan cetak nota, admin private</p>
                  <p>2020</p>
                </Timeline.Item>
                <Timeline.Item color="blue">
                  <p><b>FRONTEND</b></p>
                  <p>PT. DUTAKOM WIBAWA PUTRA</p>
                  <p>React.js, Graphql, RestAPI</p>
                  <p>09 - November 2020 -  09 Mei 2021</p>
                </Timeline.Item>
              </Timeline>

            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={12} style={{ padding: 30 }}>
              <div className="textHeight">EDUCATION</div>
              <hr />
              <br />
              <br />
              <Timeline style={{ fontSize: 20 }}>
                <Timeline.Item color="blue">
                  <p><b>SDN 2 KERJO</b></p>
                  <p>Trenggalek</p>
                  <p>2001-2007</p>
                </Timeline.Item>
                <Timeline.Item color="blue">
                  <p><b>SMPN 1 KARANGAN</b></p>
                  <p>Trenggalek</p>
                  <p>2007-2010</p>
                </Timeline.Item>
                <Timeline.Item color="blue">
                  <p><b>SMAN 1 KARANGAN</b></p>
                  <p>Jurusan IPA</p>
                  <p>Trenggalek</p>
                  <p>2010-2013</p>
                </Timeline.Item>
                <Timeline.Item color="blue">
                  <p><b>UNIVERSITAS BRAWIJAYA</b></p>
                  <p>Jurusan Teknik Informatika</p>
                  <p>Malang</p>
                  <p>2013-2019</p>
                </Timeline.Item>
              </Timeline>
            </Col>
          </Row>
        </div>
      </Content>
    </>
  )
}
export default Resume;
