import React from 'react'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className='main-container'>
          <h1 className='page-header'>Support Groups Finder</h1>
          <p>This is a Lambda School Data Science students project at the early development stage.
          The mission of the project is to help people with emotional issues to find
          support in online resources such as government support groups, support groups
          on Facebook or Reddit, and other online resources. </p>
          <p>Project contributors:</p>
          <ul className='contributors-list'>
            <li>- Valerie Ogonor</li>
            <li>- Rick Clayton</li>
            <li>- Zarrina Niyazova</li>
          </ul>
        </div>
      </div>
    )
  }
}
