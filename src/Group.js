import React, { Component } from 'react';

export default class Group extends Component {

  render() {
    let groupName = Object.values(this.props.group)[0]
    console.log(groupName)
    return (

        <li className='group-name'>{groupName}</li>

      )
  }
}

