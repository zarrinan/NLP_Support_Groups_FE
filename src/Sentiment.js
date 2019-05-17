import React from "react";
import OneSentiment from './OneSentiment'

export default function Sentiment(props) {
  let sentiment = props.sentiment
  let sens = []
  for (const key of Object.keys(sentiment)) {
    sens.push({emotion: key, score: sentiment[key]})
  }

  return (
    <div className='sentiment-scores'>
    {
      sens.map((sens, i) =>
        <OneSentiment sens={sens} key={i}/>
    )}
    </div>
  );
}



