import axios from "axios";
import { useEffect } from "react";
import { Covids } from './HardCodedData';
// import { BarChart } from 'recharts';

const options = {
  method: 'GET',
  url: 'https://covid-19-tracking.p.rapidapi.com/v1',
  headers: {
    'x-rapidapi-key': '0e7f7188d1msh7201dad28e61fadp19016cjsn20a0d130ec98',
    'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com'
  }
};

export default () => {

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  return (
    <div>
      <h1>Chart</h1>
    </div>
  );
}