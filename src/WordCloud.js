import React from "react";
import ReactWordcloud from "react-wordcloud";

export default function WordCloud(props) {
  let final = []
  let result = {}
  let text = props.text
  let by_word = text.trim().split(' ')
  for (let i = 0; i < by_word.length; i++) {
      let word = by_word[i].toLowerCase();
      if (word !== 'the' && word !== 'a'){
      result[word] = result[word] ? result[word] + 1 : 1;
  }}
  for (const key of Object.keys(result)) {
    final.push({text: key, value: result[key] })
  }
  // console.log(final)

  return (
    <div className='wordcloud'>
      <ReactWordcloud
      minSize = {[400, 400]}
      options={{
        rotations: 1,
        rotationAngels: [],
        colors:[
          '#721817',
          '#fa9f42',
          '#2b4162',
          '#0b6e4f',
          '#048ba8',
          '#a4036f'
        ],
        displayedWords: 100,
        enableTooltip: true,
        fontFamily: 'Molengo',
        fontSizes: [16, 90],
        fontStyle: 'normal',
        fontWeight: 'normal',
        padding: 1,
        flex: 1,
        scale: 'sqrt',
        spiral: 'archimedean',
        transitionDuration: 300
      }}
      words={final}
      />
    </div>
  );
}
