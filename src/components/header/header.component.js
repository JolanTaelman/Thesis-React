import React, {Component} from 'react';
import {Link } from "react-router-dom";
import './header.component.scss';
import { Modal } from 'react-bootstrap';
import bird from '../../images/bird.png'


class HeaderComp extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      show: false,
      textbox: "hey"
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChange(event) {
    this.setState({textbox: event.target.value});
  }

  handleSubmit() {
    this.props.addTweet(this.state.textbox)
  }


  render(){
    return (
        <header className="navbar" role="banner">
          <div className="container">
            <div className="navbar__group navbar__group_left">
                <ul className="navbar__main-navigation">    
                   <li> 
                     <Link to="/home">
                        <i className="fas fa-home" aria-hidden="true" />
                  <span>Home</span>
                          </Link>
                  </li>
                    <li>  
                    <Link to="/profile">
                     <i className="fas fa-user" aria-hidden="true" />
                      <span>Profile</span>
                   </Link>
                 </li>
              </ul>
            </div>
            <span className="navbar__logo">
              <a href="/">
              <img src={bird} alt=""/>
              </a>
            </span>
            <div className="navbar__group navbar__group_right">
              <div className="navbar__new-tweet">
                <a className="navbar__new-tweet-button btn" onClick={this.handleShow}>
                  <span>Tweet</span>
                </a>
              </div>
              
              <Modal show={this.state.show} onHide={this.handleClose}>
               <Modal.Header closeButton>
            <Modal.Title>Compose new Tweet</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <textarea type="text" name="body" onChange={this.handleChange} value={this.state.textbox} maxLength={280} />
            <button className="btn new-tweet__button" onClick={this.handleSubmit}>Tweet</button>

          </Modal.Body>
        
        </Modal>
            </div>
          </div>
        </header>
      )
  }
}
 
export default HeaderComp; 


/*

              <div className="new-tweet modal fade" id="new-tweet">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header"><button className="close" type="button" data-dismiss="modal" aria-hidden="true">×</button>
                      <h4 className="modal-title">Compose new Tweet</h4>
                    </div>
                    <div className="modal-body">
                      <textarea type="text" name="body" placeholder="Enter your tweet here" maxLength={280} defaultValue={""} />
                      <button className="btn new-tweet__button">Tweet</button>
                    </div>
                  </div>
                </div>
              </div> 

*/