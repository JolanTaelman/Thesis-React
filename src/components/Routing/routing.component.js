import React, { Component } from 'react'
import {Route, Switch, Redirect } from "react-router-dom";
import Home from '../Home/home.component'
import Profile from '../Profile/profile.component'

class RoutingComp extends Component {
  render() {
    return (
      <div>
        <Switch>              
            <Route path="/home"  render={props => <Home {...props} date={this.props.date} tweets={this.props.tweets} deleteTweetfunc={this.props.deleteTweetfunc} />} />
            <Route path="/profile" render={props => <Profile {...props} date={this.props.date} tweets={this.props.tweets} deleteTweetfunc={this.props.deleteTweetfunc}/>} />
            <Redirect from="/" to="/home" />
        </Switch>
      </div>
    )
  }
}


export default RoutingComp;