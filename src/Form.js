import React, { Component } from 'react';
import axios from 'axios';


class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      groups: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    });
  }


  handleSubmit(ev) {
    ev.preventDefault();
    axios.post('http://nlpsgf02-env.kx543mpwxe.us-east-2.elasticbeanstalk.com/', {
      text: this.state.text
    })
    .then(res => {
      const groups = res.data
      console.log(typeof groups);
      this.setState({
          groups
      })
    })
    console.log(this.state)
  }

  render() {

    return (
      <div>
      <div className='privacy'>
        <h2>Write a text</h2>
        <form onSubmit={this.handleSubmit} >
          <input
            type="text"
            name="text"
            onChange={this.handleChange}
            value={this.state.text}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
      </div>
    );
  }
}

export default Form;
