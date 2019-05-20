import React, {Component} from 'react'
import HeaderComp from '../header/header.component'
import RoutingComp from '../Routing/routing.component';
import './main.component.scss'
import moment from 'moment'

export class Main extends Component {
    constructor(props) {
        super(props);
        var date = moment(Date.now()).format('LLL');
        this.state = {
            tweets: [{
                    id: 1,
                    user: "Jolan Taelman",
                    body: "Tweet 1",
                    date: date,
                    comments: [{
                        id: 1,
                        body: "comment 1",
                        user: "username",
                        createdAt: date,
                        commenterPicture: "http://via.placeholder.com/20x20"
                    }]
                },
                {id: 2,
                    user: "Jolan Taelman",
                    body: "Tweet 2",
                    date: date,
                    comments: [] },
                {   id: 3,
                    user: "Jolan Taelman",
                    body: "Tweet 3",
                    date: date,
                    comments: []},
            ],
            date: date,
        }
        this.deleteTweetfunc = this.deleteTweetfunc.bind(this)
        this.addTweet = this.addTweet.bind(this)
    }

    deleteTweetfunc(id){
        var newtweets = this.state.tweets;
        var startposition = id - 1
        console.log(newtweets)
        var aa = newtweets.splice(startposition, 1);
        console.log(aa)
        console.log(newtweets)
        this.setState({
            tweets: newtweets,
        })
      }

      addTweet(content){
        var newtweets = this.state.tweets;
        var newTweet = {
            id: newtweets.length + 1,
            user: "Current User",
            body: content,
            date: moment(Date.now()).format('LLL'),
            comment: []
        };
        newtweets.push(newTweet);
        this.setState({
            tweets: newtweets
        })

      }

    render() {
        return (
            <div>
                <HeaderComp addTweet={this.addTweet} />
                <RoutingComp date={this.state.date} tweets = {this.state.tweets} deleteTweetfunc={this.deleteTweetfunc} />
            </div>
        )
    }
}

export default Main