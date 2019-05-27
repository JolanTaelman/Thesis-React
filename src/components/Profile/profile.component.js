import React, { Component } from 'react'
import {TweetList} from "../tweet-List/tweetList.component"
import "./profile.component.scss"
export class Profile extends Component {
  constructor(props) {
    super(props);
       this.state = {
        pictures: [
          {
            id: 0,
            pictureUrl:
              "https://cdn.pixabay.com/photo/2018/01/05/00/20/test-image-3061864_960_720.png"
          }
        ]     
      }
      this.addPicture = this.addPicture.bind(this);
  }

  addPicture() {
    var newpictures = this.state.pictures;
    newpictures.push({
      id: newpictures.length,
      pictureUrl:
        "https://cdn.pixabay.com/photo/2018/01/05/00/20/test-image-3061864_960_720.png"
    });
    this.setState(
      {
        pictures: newpictures
      }
    )
  }

  render() {
    var images = this.state.pictures
    var imagesList = images.map((image) =>
 
    <div>
    <img class="test__image" src={image.pictureUrl}/>
  <div class="profile__user-info">
  </div>
  <div class="col-12 user-information__stats">
  </div> 
  </div>
)

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
                      <a>12</a>
                    </span>
                  </li>
                  <li>
                    <span className="user-information__stat-title">
                      Following:
                    </span>
                    <span>
                      <a>11</a>
                    </span>
                  </li>
                  <li>
                    <span className="user-information__stat-title">
                      Followers:
                    </span>
                    <span>
                      <a>12</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="profile">
          {imagesList} 
          <button onClick={this.addPicture}>add new</button>           
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