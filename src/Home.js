import React from 'react'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className='main-container'>
          <h1 className='page-header'>Support Groups Finder</h1>
          <p>The mission of the Support Groups Finder project is to help people
          with emotional issues to find support in online resources. The project
          has the potential to help to identify mental issues at the early stage
          (at a certain level of accuracy) and help medical practitioners
          to intervene and provide effective help. Based on a user's text input,
          the application recommends online support groups by leveraging Natural
          Language Processing text classification algorithm.</p>
          <p className='home-header'><strong>What problem does this application solve?</strong></p>
          Individuals are often aware of the symptoms and/or consequences,
          but lack the ability to quantify these as a whole or seek specific treatment.
          <p className='home-header'><strong>How does this application solve the problem?</strong></p>
          The application seeks to classify text into known categories,
          for which individuals seek help.
          <p className='home-header'><strong>Features include:</strong></p>

          <li>- Recommendation of online support groups relevant to a user based on their text input.</li>
          <li>- Sentiment analysis of a user’s text</li>
          <li>- Word cloud of a user’s text input.</li>


          <p className='home-header'><strong>The project was built using</strong></p>
          <p>- Scikit-learn, Numpy, Pandas, NLTK, Doc2Vec, Flask, Matplotlib,
          AWS Elastic Beanstalk, React.js, Axios, CSS, Firebase.</p>

          <p className='home-header'><strong>Project contributors:</strong></p>
          <ul className='contributors-list'>
            <li>- Valerie Ogonor</li>
            <li>- Rick Clayton</li>
            <li>- Zarrina Niyazova</li>
          </ul>

          <p className='note'><strong>Note:</strong> This application is not a replacement
          for a medical practitioner.
          If you need medical help or have an urgent issue please contact your
          medical provider, if it is an emergency please dial 911. We do not
          collect personal identifiable information about you.</p>
        </div>
      </div>
    )
  }
}
