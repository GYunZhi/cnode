import React, {Component} from "react"
import {Avatar,Row,Col} from "antd"
import TopicList from "./TopicList"
import './index.css'
// import data from './data'
import {connect} from 'react-redux'
import { getUser } from '../../actions/user'
class User extends Component {

  constructor (props) {
    super(props)
    this.userName = this.props.match.params.id;
  }

  componentDidMount () {
    this.props.dispatch(getUser(this.userName))
  }

  componentWillReceiveProps (nextProp) {
    if(this.props.match.params.id !== nextProp.match.params.id) {
      this.props.dispatch(getUser(nextProp.match.params.id))
    }
  }

  render() {

    let loading = this.props.user.loading
    let {avatar_url,loginname,create_at,score,recent_topics,recent_replies} = this.props.user.data

    return (
      <div className="user container">
        <Avatar src={avatar_url} className = "user-avatar" />

        <Row className="user-info">
          <Col md={8}>
              用户名:<a>{loginname}</a>
          </Col>
          <Col md={8}>
              积分:<a>{score}</a>
          </Col>
          <Col md={8}>
              注册时间:<a>{create_at.split("T")[0]}</a>
          </Col>
        </Row>

        <TopicList
          loading = {loading}
          title = "最近创建的话题"
          data = {recent_topics}
        />

        <TopicList
          loading = {loading}
          title = "最近回复的话题"
          data = {recent_replies}
        />
      </div>
    );
  }
}

function select (state) {
  return {
    user: state.user
  }
}

export default connect(select)(User)

