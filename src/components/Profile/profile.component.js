import React, { Component } from 'react'
import {TweetList} from "../tweet-List/tweetList.component"
import "./profile.component.scss"
export class Profile extends Component {


  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="profile">
            <img className="profile__image" src="https://avatars1.githubusercontent.com/u/10989616?v=4" />
            <div className="profile__user-info">
              <span className="profile__handle">
                User name
              </span>
            </div>
            <div className="row">
              <div className="col-12 user-information__stats">
                <ul>
                  <li>
                    <span className="user-information__stat-title">
                      Tweets:
                    </span>
                    <span>
                      <a>15</a>
                    </span>
                  </li>
                  <li>
                    <span className="user-information__stat-title">
                      Following:
                    </span>
                    <span>
                      <a>15</a>
                    </span>
                  </li>
                  <li>
                    <span className="user-information__stat-title">
                      Followers:
                    </span>
                    <span>
                      <a>15</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
        <TweetList date={this.props.date} tweets={this.props.tweets} deleteTweetfunc={this.props.deleteTweetfunc}/>
        </div>
      </div>
    </div>
    
    )
  }
}

export default Profile