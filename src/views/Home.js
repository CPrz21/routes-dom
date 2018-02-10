import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.match.params.name
    };
  }
  render(){
    return(
      <div>
        <h2>{"Welcome to home "+this.state.name}</h2>
        <Link to='/contact-us/75013093'>
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
