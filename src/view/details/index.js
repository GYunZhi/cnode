import React, {Component} from "react";
import TxtDetails from './TxtDetails'
import ReplyList from './ReplyList'
// import data from './data.js'
import {connect} from 'react-redux'
import http from '../../http'
import { getDetails } from '../../actions/details'

class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {
        author:{
          loginname:"",
          avatar_url:""
        },
        replies:[],
        reply_count:0,
        create_at:"",
        good: true
      },
      id: this.props.match.params.id,
      loading: false
    }
  }

  componentDidMount () {
    this._fetchData()
  }

  _fetchData(reset = true) {
    this.setState({loading: true})
    http.get(`/topic/${this.state.id}`).then(resp => {
      this.setState({
        data: resp.data.data
      })

      console.log(resp)

      // 派发一个action 函数
      this.props.dispatch(getDetails(resp.data.data))

      // 直接派发一个action 对象
      // this.props.dispatch({ type: 'SET_DETAILS', data: resp.data.data })

    }).catch(error => {
      console.error(error.response)
    }).finally(() => {
      this.setState({loading: false})
    })
  }



  render(){
    let {data, loading} = this.state
    return (
      <div className="detail">
        <TxtDetails
          loading = {false}
          data = {data}
        >
        </TxtDetails>
        <ReplyList
          loading = {loading}
          replies = {data.replies}
          replyCount={data.reply_count}
        >
        </ReplyList>
      </div>
    );
  }
}

function select (state) {
  return {
    details: state.details
  }
}

export default connect(select)(Detail)

