import React, { Component } from 'react'
import {Layout} from "antd"
import './index.css'
class Footer extends Component {
  render() {
    return (
      <Layout.Footer>
        <div className='footer'>赣ICP备18002683号</div>
      </Layout.Footer>
    );
  }
}

export default Footer
