import React, { Component } from 'react'
import './tweet-list.component.scss'
import './tweet.component.scss'

export class TweetList extends Component {
  constructor(props) {
    super(props);
       this.state = {
         tweets: this.props.tweets
       }
  }
/*
  deleteTweetfunc(id){
    var newtweets = this.state.tweets;
    var startposition = id - 1
    console.log(newtweets)
    var aa = newtweets.splice(startposition, 1);
    console.log(aa)
    console.log(newtweets)
    this.setState({
      tweets : newtweets,
    })
  }*/

  render() {
    var tweets = this.state.tweets;
    var tweetlist = tweets.map((tweet) =>
      <Tweet id={tweet.id} user={tweet.user} body={tweet.body} date={tweet.date} comments={tweet.comments} deleteTweetfunc={this.props.deleteTweetfunc} />
    )  

    return (
      <div>
        {tweetlist}
      </div>
    )
  }
}

class Tweet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      user: this.props.user,
      body: this.props.body,
      date: this.props.date,
      comments: this.props.comments,
      textBox: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteTweet = this.deleteTweet.bind(this);
  }

  deleteTweet(event){
    console.log(event.target.value)
    this.props.deleteTweetfunc(event.target.value);
  }


  addComment(){
    var newComments = this.state.comments;
    newComments.push(
      {id: newComments.length,
       body: this.state.textBox,
       user: "username",
       createdAt: this.date,
       commenterPicture: "http://via.placeholder.com/20x20"
      }
    )
    this.setState({
      comments: newComments
    })
  }

  handleChange(event){
    this.setState({textBox: event.target.value});
  }

render(){
  var comments = this.state.comments
  var commentList = comments.map((comment) =>
<div className="col-12">
<hr />
<div className="col-12 tweet__comments">
        <img className="tweets__comment-image" alt='' src={comment.commenterPicture} />
        <span className="tweet__username-date">
          <span className="tweet__username">{comment.user}</span>
          <span className="tweet__date"> {comment.createdAt}</span>
        </span>
        <p className="tweet__content">{comment.body}</p>
      </div>
</div>)

  return(
    <div className="tweet">
    <div className="row">
      <div className="col-1">
        <img className="tweet__image" alt='' src="https://avatars1.githubusercontent.com/u/10989616?v=4" />
      </div>
      <div className="col-11 tweet_description">
        <span className="tweet__username-date">
          <span className="tweet__username">
            <a>{this.state.user} </a>
          </span>
          <span className="tweet__date">
            {this.state.date}
          </span>
        </span>
        <p className="tweet__content">
          {this.state.body}
        </p>
        <div className="tweet__form">
          <a className="btn tweet__edit">
            edit
          </a>
          <button onClick={this.deleteTweet} value={this.state.id} className="btn tweet__delete"> Delete</button>
        </div>
      </div>
      {commentList} 
         <hr />
      <div className="col-12 tweet__coment-form">
        <textarea  name="body" placeholder="Enter the comment" value={this.state.textBox} onChange={this.handleChange} />
        <button onClick={this.addComment} className="btn">Comment</button>
      </div>      
    </div>
  </div>
  )
}
}

export default TweetList
