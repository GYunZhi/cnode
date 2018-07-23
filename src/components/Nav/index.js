import React, { Component } from 'react'
import {Menu, Icon} from "antd"
import {Link} from "react-router-dom"
import propTypes from 'prop-types'
import './index.css'
class Nav extends Component {
  constructor (props) {
    super(props)
  }

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
        <Link to="/index/all"><Icon type="home" />首页</Link>
        </Menu.Item>
        <Menu.Item>
        <Link to="/book"><Icon type="book" />教程</Link>
        </Menu.Item>
        <Menu.Item>
        <Link to="/about"><Icon type="info-circle-o" />关于</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav
