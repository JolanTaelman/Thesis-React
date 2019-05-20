import React, {Component} from 'react';
import {User} from "../user/user.component";
import {TweetList} from "../tweet-List/tweetList.component"

class Home extends Component {


  render(){
    return (
      <div className="container">
    <div className="row">
    <div className="col-xl-3 col-lg-4 first-column">
     <User/>
    </div>
    <div className="col-xl-6 col-lg-8 second-column">
     <TweetList date={this.props.date} tweets={this.props.tweets} deleteTweetfunc={this.props.deleteTweetfunc}/>
    </div>
  </div>
</div>
      )
  }
}
 
export default Home; 