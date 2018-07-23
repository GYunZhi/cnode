import React, {Component} from "react";
// import {Card,Avatar} from "antd";
// import {Link} from "react-router-dom";
// import Lable from '../../components/Lable'
import TxtDetails from './TxtDetails'
import ReplyList from './ReplyList'
import data from './data.js'

class Detail extends Component {
  render(){
    return (
      <div className="detail">
        <TxtDetails
          loading = {false}
          data = {data.data}
        >
        </TxtDetails>
        <ReplyList
          loading = {false}
          replies = {data.data.replies}
          replyCount={data.data.reply_count}
        >
        </ReplyList>
      </div>
    );
  }
}

export default Detail
