import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class tweet extends Component {
  static propTypes = {
    prop: PropTypes
  }
  

  render() {
    return (
        <div className="tweet">
        <div className="row">
          <div className="col-1">
            <img className="tweet__image" src="https://avatars1.githubusercontent.com/u/10989616?v=4" />
            <img />
          </div>
          <div className="col-11 tweet_description">
            <span className="tweet__username-date">
              <span className="tweet__username">
                <a>{'{'}{'{'}tweet.getUser(){'}'}{'}'} </a>
              </span>
              <span className="tweet__date">
                {'{'}{'{'}tweet.getDate() | date{'}'}{'}'}
              </span>
            </span>
            <p className="tweet__content">
              {'{'}{'{'}tweet.getContent(){'}'}{'}'}
            </p>
            <div className="tweet__form">
              <a className="btn tweet__edit">
                edit
              </a>
              <button className="btn tweet__delete"> Delete</button>
            </div>
          </div>
          <div for="let item of this.tweet.comments" className="col-12 tweet__comments">
            <hr />
            <img className="tweets__comment-image" src="item.commenterPicture" />
            <span className="tweet__username-date">
              <span className="tweet__username">{'{'}{'{'}item.user(){'}'}{'}'}</span>
              <span className="tweet__date"> {item.date}</span>
            </span>
            <p className="tweet__content">{'{'}{'{'}item.body(){'}'}{'}'}</p>
          </div>
          <hr />
          <div className="col-12 tweet__coment-form">
            <textarea  name="body" placeholder="Enter the comment" defaultValue={""} />
            <button className="btn">Comment</button>
          </div>
        </div>
      </div>
    )
  }
}

