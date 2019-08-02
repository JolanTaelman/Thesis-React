import React, { Component } from 'react'    
import './user.component.scss';

export class User extends Component {

  render() {
    return (
        <div className="user-information">
        <div className="row">
          <div className="col-4 user-information__image">
            <img className="user-tweet__image" alt="user" src="https://avatars1.githubusercontent.com/u/10989616?v=4" />
          </div>
          <div className="col-8 user-information__text">
            <a href="/users/ + req.user.id">
              <h4>Jolan Taelman</h4>
            </a>
            <div className="user-information__stats user-information__stats_small">
              <ul>
                <li>
                  <span className="user-information__stats-title">Tweets:</span>
                  <span>
                    <a href="/users/ + req.user.id">
                      15
                    </a>
                  </span>
                </li>
                <li>
                  <span className="user-information__stats-title">Following:</span>
                  <span>
                    <a href="/users/ + req.user.id">
                      15
                    </a>
                  </span>
                </li>
                <li>
                  <span className="user-information__stats-title">Followers:</span>
                  <span>
                    <a href="/users/ + req.user.id">
                      15
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-12 user-information__stats user-information__stats_large">
          <ul>
            <li>
              <span className="user-information__stat-title">
                Tweets:
              </span>
              <span>
                <a href="/users/ + req.user.id/following"> 15</a>
              </span>
            </li>
            <li>
              <span className="user-information__stat-title">
                Following:
              </span>
              <span>
                <a href="/users/ + req.user.id/following"> 15</a>
              </span>
            </li>
            <li>
              <span className="user-information__stat-title">
                Followers:
              </span>
              <span>
                <a href="/users/ + req.user.id/followers"> 15</a>
              </span>
            </li>
          </ul>
        </div>  
      </div>
    )
  }
}

