import React from 'react'
import Group from './Group'

export default function GroupsList(props) {
  return(
    <ul>
      {
        props.groups.map((group, i) =>
        <Group group={group} key={i}/>
        )}
    </ul>
    )
}



