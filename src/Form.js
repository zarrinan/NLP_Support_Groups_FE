import React from 'react'
import axios from 'axios'
import GroupsList from './GroupsList'
import {MODEL_URL, DEV_URL, PROD_URL} from './services/api'


export default class Form extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      text: '',
      groups: []
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    });
  }


  handleSubmit(ev) {
    ev.preventDefault();
    axios.post(PROD_URL, {
      text: this.state.text
    })
    .then(res => {
      console.log(typeof res.data);
      this.setState({
          groups: res.data.support_groups
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
      <div className='main-container'>
        <h1 className='page-header'>Find Your Support Groups</h1>
        <p>How are you feeling?</p>
        <form onSubmit={this.handleSubmit} >
          <textarea
            className="input-text"
            type="text"
            name="text"
            onChange={this.handleChange}
            value={this.state.text}/>
          <input type="submit" value="Submit" className="form-submit-button"/>
        </form>
        <GroupsList groups={this.state.groups}/>
      </div>
      </div>
    )
  }
}
