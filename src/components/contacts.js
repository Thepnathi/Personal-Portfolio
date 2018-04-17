import React, { Component } from 'react';
import './stylesheet/contact.css';

export default class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {term : ''};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
  }


  render() {
    return (
      <div className="contact-wrapper">
        
          <div>
            <form>
                Your Name:
                <input type="text" ></input>
                <br />
                Your Email:
                <input type="text" ></input>
            </form>
          </div>

          <div className = "email-form">
            <form>
              Your Message:
            <br />
              <input
                type="text"
                className="email-message"
                placeholder="Enter your message here..."
                onChnage = {this.onInputChange}>
              </input>
            </form>
          </div>

          <button>djdjjdj</button>

      </div>
    );
  }
}
