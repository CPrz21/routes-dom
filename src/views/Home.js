import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = '';
  }
  render(){
    console.log(this.props.match);
    return(
      <div>
        <h2>Home</h2>
        <Link to='/contact-us'>
          <p>go to Contact Us</p>
        </Link>
      </div>
    );
  }
}

Home.propTypes = {
  match: PropTypes.any
}
export default Home
