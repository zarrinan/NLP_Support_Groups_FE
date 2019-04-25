import axios from 'axios';

const MODEL_URL = 'http://nlpsgf01-env.2nmjf6gsak.us-east-2.elasticbeanstalk.com/';

function checkStatus(res) {
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}

export default function fetchGroups() {
  return axios.get(`${MODEL_URL}`)
    .then(checkStatus)
    .then(res => res.json())
    .then(json => console.log(json))
}


