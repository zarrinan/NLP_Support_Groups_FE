import React from 'react'
import axios from 'axios'
import GroupsList from './GroupsList'
import WordCloud from './WordCloud'
import Sentiment from './Sentiment'
import {MODEL_URL, DEV_URL, PROD_URL, PROD_URL_2} from './services/api'


export default class Form extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      text: '',
      groups: [],
      sentiment: {}
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
    axios.post(PROD_URL_2, {
      text: this.state.text
    })
    .then(res => {
      console.log(res.data);
      this.setState({
          groups: res.data.support_groups,
          sentiment: res.data.sentiment.sentiment
      })
    })
  }

  render() {
    return (
      <div>
      <div className='form-container'>
        <h1 className='page-header'>Find Your Support Groups</h1>
        <div className='text-input-analysis'>
            <div className='text-input'>
                <p>What's on your mind?</p>
                <form onSubmit={this.handleSubmit} >
                  <textarea
                    className="input-text"
                    type="text"
                    name="text"
                    onChange={this.handleChange}
                    value={this.state.text}/>
                  <input type="submit" value="Submit" className="form-submit-button"/>
                </form>
            </div>
            <div className='text-analysis'>
              <WordCloud text={this.state.text}/>
              <Sentiment sentiment={this.state.sentiment}/>
            </div>
        </div>
        <GroupsList groups={this.state.groups}/>
      </div>
      </div>
    )
  }
}
