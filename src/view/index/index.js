import React, { Component } from 'react';
import {Menu, Row, Col} from "antd"
import {Link} from "react-router-dom"
import './index.css'
class Index extends Component {
  render() {
    return (
      <div className="page-index">
        <div className="container">
          <Row>
            <Col  md={6}>
              <Menu className="index-menu">
                <Menu.Item>
                  <Link to="/index/all">全部</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/index/good">精华</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/index/ask">问题</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/index/share">分享</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/index/job">招聘</Link>
                </Menu.Item>
                <Menu.Item>
                <Link to="/index/dev">测试</Link>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Index
