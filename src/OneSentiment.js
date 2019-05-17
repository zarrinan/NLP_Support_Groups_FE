import React from 'react'

export default function OneSentiment (props){
  let sens = props.sens
    return (
        <li key={props.i} className='sens'>
           {sens['emotion']} {sens['score']}
        </li>
      )
}
