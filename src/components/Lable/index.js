import React, { Component } from 'react';
import {Tag} from "antd"
import tab from "./tab";

function getTab(data){
  let nowTab = (
      data.top?
          "top":
          data.good?
              "good":data.tab
  );
  return tab.filter((item)=>(item.tab === nowTab))[0];

}
class Lable extends Component {
  render() {
    let nowTab = getTab(this.props.data);
    return <Tag color={nowTab ? nowTab.color : '#f00' }>{nowTab ? nowTab.txt : '未知'}</Tag>
  }
}

export default Lable
