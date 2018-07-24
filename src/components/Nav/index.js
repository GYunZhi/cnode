import React, { Component } from 'react'
import {Menu, Icon} from "antd"
import {NavLink} from "react-router-dom"
import propTypes from 'prop-types'
import './index.css'

class Nav extends Component {
  static propTypes ={
    mode : propTypes.string
  }

  static defaultProps = {
    mode: "horizontal"
  }
  
  render() {
    let {mode} = this.props
    return (
      <Menu 
        className="header-nav" 
        mode={mode}
        theme="dark"
      >
        <Menu.Item>
          <NavLink to="/index" activeClassName='selected'><Icon type="home" />首页</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/book" activeClassName='selected'><Icon type="book" />教程</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/about" activeClassName='selected'><Icon type="info-circle-o" />关于</NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav
