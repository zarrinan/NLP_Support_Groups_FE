import axios from 'axios';

const MODEL_URL = 'http://nlpsgf02-env.kx543mpwxe.us-east-2.elasticbeanstalk.com/';

// function checkStatus(res) {
//   if (!res.ok) {
//     throw new Error(res.statusText);
//   }
//   return res.json();
// }

// export default function fetchGroups() {
//   return axios.get(`${MODEL_URL}`)
//     .then(checkStatus)
//     .then(res => res.json())
//     .then(json => console.log(json))
// }


export default function fetchGroups() {
    axios.get(MODEL_URL)
    .then(response => response.json())
    .then(json => console.log(json))
  }
