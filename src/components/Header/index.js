import React, { Component } from 'react'
import {Layout, Row, Col, Divider, Icon, Dropdown, Button} from "antd"
import {Link} from "react-router-dom"
import Nav from '../Nav'
import './index.css'
class Header extends Component {
  render() {
    return (
      <Layout.Header>
       <Row className="wrap">
         <Col md={6} xs={24}><h1 className="logo">CNode</h1></Col>
         <Col md={18} xs={0}>
            <Divider className="header-divider" type="vertical"/>
            <Nav />
         </Col>
         {/* 小屏下下拉菜单导航 */}
         <Col md={0} xs={24} className="xs-wrap">
          <Dropdown
            overlay={<Nav mode='vertical'/>}
            trigger={['click']}
          >
            <Button><Icon type="bars" /></Button>
          </Dropdown>
         </Col>
       </Row>
      </Layout.Header>
    );
  }
}

export default Header
