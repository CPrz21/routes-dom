import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ContactUs extends Component{
  render(){
    return(
      <div>
        <h2>Contact Us</h2>
        <Link to='/'>
          <p>Go back home</p>
        </Link>
      </div>
    );
  }
}

export default ContactUs
