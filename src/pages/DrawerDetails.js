import React from 'react';
import { Drawer, Row, Col } from 'antd';


function DrawerDetail(props) {
    const data1 = () => (
        <div>
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
        </div>
    )
    const data2 = () => (
        <span>
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
    )

    const data3 = () => (
        <span>
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
    )

    const data4 = () => (
        <span>
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
    )
    console.log(props.id)
    const getId = () => {
        if (props.id === 1) {
            return data1()
        }
        if (props.id === 2) {
            return data2()
        }
        if (props.id === 3) {
            return data3()
        }
        if (props.id === 4) {
            return data4()
        }
    }
    return (
        <>
            <Drawer
                title="Details Portofolio"
                placement="top"
                closable={true}
                onClose={props.onClose}
                visible={props.visible}
                height="100%"
            >
                <Row gutter={12} style={{ textAlign: 'center', color: '#000' }}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                        <img alt="example" width="70%" src={props.img} />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={12} className="textAbout">
                        {getId()}
                    </Col>
                </Row>
            </Drawer>
        </>
    )
}
export default DrawerDetail;
