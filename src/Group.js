import React from 'react'

export default function Group (props){
  let url = `https://www.reddit.com/r/${props.group[0]}/`
  console.log(url)

    return (
        <li key={props.i} className='group-name'>
           <a className='group-link' href={url}>
              r/{props.group[0]}
          </a>
        </li>
      )
}

