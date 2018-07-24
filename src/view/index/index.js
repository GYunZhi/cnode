import React, { Component } from 'react';
import {Menu, Row, Col} from "antd"
import {NavLink} from "react-router-dom"
import ListItem from './ListItem'
import './index.css'

class Index extends Component {
  render() {
    let tab = this.props.match.params.id;
    return (
      <div className="page-index">
        <div className="container">
          <Row>
            <Col  md={6}>
              <Menu className="index-menu">
                <Menu.Item>
                  <NavLink to="/index/all" activeClassName='selected'>全部</NavLink>
                </Menu.Item>

                <Menu.Item>
                  <NavLink to="/index/good" activeClassName='selected'>精华</NavLink>
                </Menu.Item>

                <Menu.Item>
                  <NavLink to="/index/ask" activeClassName='selected'>问题</NavLink>
                </Menu.Item>

                <Menu.Item>
                  <NavLink to="/index/share" activeClassName='selected'>分享</NavLink>
                </Menu.Item>

                <Menu.Item>
                  <NavLink to="/index/job" activeClassName='selected'>招聘</NavLink>
                </Menu.Item>

                <Menu.Item>
                  <NavLink to="/index/dev" activeClassName='selected'>测试</NavLink>
                </Menu.Item>
              </Menu>
            </Col>

            <Col className="index-list" md={18}>
                <ListItem tab= {tab}></ListItem>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Index
