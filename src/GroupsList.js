import React from 'react';
import Group from './Group';

function GroupsList(props) {
  let obj = props.groups
  let groupsArray = []
  for (const key of Object.keys(obj)) {
    let myobj = {}
    myobj[key] = obj[key]
    groupsArray.push(myobj);
  }
  console.log(groupsArray)
  groupsArray.pop()

  return (
    <ul>
      {
        groupsArray.map((group, i) =>
        <Group group={group} key={i}/>
        )}
    </ul>
    )
}

export default GroupsList;

