import React from 'react'
import getSubredditInfo from './services/api'
import WordCloud from './WordCloud'

export default function Group (props){
  let groupName = props.group[0]
  let reddit_url = `https://www.reddit.com/r/${groupName}/`

  let reddit_description = getSubredditInfo(groupName)[1]
  let reddit_subscribers = getSubredditInfo(groupName)[0]

    return (
        <li key={props.i} className='group-name'>
           <a className='group-link' href={reddit_url}>
              {groupName}
          </a>
          <p className='group-description'>{reddit_description}</p>
          <p className='group-subscribers'>members: <strong>{reddit_subscribers}</strong></p>
        </li>
      )
}


