import React, { Component } from 'react'
import 'ASSET/scss/detail.scss'
import Info from './info'
import ReplyList from './replyList'
import Tag from './tag'
import Footer from './footer'
export default class Detail extends Component {

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    const ID = this.props.params.id
    if (!ID) this.context.router.push('/')
    else {
      this.props.fetchVideoInfo(ID)
      this.props.fetchReplyList(ID)
    }
  }

  componentWillReceiveProps (nextProps) {

  }

  render () {
    const { videos } = this.props
    const { videoInfo, replyList } = videos
    return (
        <div className="video-info">
          <Info videoInfo={videoInfo} />
          <div className="divider" />
          <div className="video-cover-blurred" />
          <div className="divider" />
          {
            replyList &&
            <ReplyList replyList={replyList.replyList} />
          }
          {
            videoInfo &&
            <Tag tags={videoInfo.tags} />
          }
          <Footer />
        </div>
    )
  }
}