import React, { Component } from 'react';
import './stylesheet/contact.css';

export default class Contacts extends Component {
  render() {
    return (
      <div className="contact-wrapper">
          <div>
            <form>
                Your Name:
                <input type="text"></input>

            </form>
          </div>

          <div>


          </div>
      </div>
    );
  }
}
{/* <form>
  First name:<br>
  <input type="text" name="firstname"><br>
  Last name:<br>
  <input type="text" name="lastname">
</form> */}
