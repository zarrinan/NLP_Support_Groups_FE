import React from "react";
import ReactWordcloud from "react-wordcloud";


const words = [
  { text: "hello", value: 3 },
  { text: "world", value: 12.5 },
  { text: "github", value: 1 },
  { text: "code", value: 1 }
];

export default function WordCloud(props) {
  let final = []
  let result = {}
  let text = props.text
  let by_word = text.trim().split(' ')
  for (let i = 0; i < by_word.length; i++) {
    let word = by_word[i];
    result[word] = result[word] ? result[word] + 1 : 1;
  }
  for (const key of Object.keys(result)) {
    final.push({text: key, value: result[key] })
  }
  console.log(final)

  return (
    <div style={{ width: 600, height: 400 }}>
      <ReactWordcloud words={final} />
    </div>
  );
}
