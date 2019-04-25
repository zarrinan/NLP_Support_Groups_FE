import React, { Component } from 'react';
import fakeUrl from './services/api'
import fetchGroups from './services/api'


class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      groups: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(ev) {
    ev.preventDefault();
    this.props.onSubmit(this.state.text);
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { groups } = this.props;

    return (
      <div>
      <div className='privacy'>
        <h2>Write a text</h2>
        <form onSubmit={this.handleSubmit} >
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleChange} />
          <input type="submit" value="Submit Text" />
        </form>
      </div>
      </div>
    );
  }
}

export default Form;
