import React from 'react'

export default function Group (props){
    let groupName = Object.values(this.props.group)[0]
    console.log(groupName)
    return (
        <li className='group-name'>{groupName}</li>
      )
}

