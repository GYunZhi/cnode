import React, { Component } from 'react';
import {List, Avatar} from "antd"
import {Link} from "react-router-dom"
import './ListItem.css'
// import data from './data.js'
import Lable from '../../components/Lable'
import {connect} from 'react-redux'
import http from '../../http'
import { getTopicList } from '../../actions/list'
import propTypes from 'prop-types'

class ListItem extends Component {

  static contextTypes = {
    color: propTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {
      page: 1,
      data: [],
      tab: this.props.tab,
      loading: false
    }
  }

  componentDidMount () {
    // console.log(this)
    // console.log(this.props)
    // console.log(this.context)
    this._fetchData()
  }

  componentWillReceiveProps (nextProp) {
    if(this.props.tab !== nextProp.tab) {
      this.setState({
        page: 1,
        tab: nextProp.tab
      }, () => {
        this._fetchData()
      })
    }
  }

  shouldComponentUpdate(nextProps,nextState){
    return true;
  }

  _fetchData(reset = true) {
    this.setState({loading: true})
    http.get(`/topics?tab=${this.state.tab}&page=${this.state.page}&limit=15`).then(resp => {
      this.setState({
        data: resp.data.data
      })

      // 派发一个action 函数
      this.props.dispatch(getTopicList(resp.data.data))

      // 直接派发一个action 对象
      // this.props.dispatch({ type: 'SET_LIST', data: resp.data.data })

    }).catch(error => {
      console.error(error.response)
    }).finally(() => {
      this.setState({loading: false})
    })
  }

  _onChange (current) {
    this.setState({
      page: current
    }, () => {
      this._fetchData()
    })
  }

  render() {
    return (
      <List
        className="list-item"
        loading = {this.state.loading}
        dataSource = {this.state.data}
        pagination = {
          {
            current: this.state.page,
            pageSize: 15,
            total: 1000,
            onChange: (current) => {
              this._onChange(current)
            }
          }
        }
        renderItem = {item => (
          <List.Item
            actions={['回复:' + item.reply_count, '访问:' + item.visit_count]}
            key= {item.id}
          >
            <List.Item.Meta
              avatar = {<Avatar src={item.author.avatar_url} />}
              title = {
                <div>
                  <Lable data= {item} />
                  <Link to={"/details/" + item.id}>{item.title}</Link>
                </div>
              }
              description={
                <p>
                  <Link to={"/user/" + item.author.loginname}>{item.author.loginname}</Link>
                  发表于:{item.create_at.split("T")[0]}
                </p>
              }
            >
            </List.Item.Meta>
          </List.Item>)
        }
      >
      </List>
    );
  }
}

function select (state) {
  return {
    list: state.list
  }
}

// connect(mapStateToProps, mapDispatchToProps, mergeProps, options) 
export default connect(select)(ListItem)
