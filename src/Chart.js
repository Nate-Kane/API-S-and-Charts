import axios from "axios";
import { useEffect, useState } from "react";
import { Covids } from './HardCodedData';
import { 
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend 
} from 'recharts';

const options = {
  method: 'GET',
  url: 'https://covid-19-tracking.p.rapidapi.com/v1',
  headers: {
    'x-rapidapi-key': '0e7f7188d1msh7201dad28e61fadp19016cjsn20a0d130ec98',
    'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com'
  }
};

export default () => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    console.log(process);
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Chart</h1>
      <p>{chartData}</p>
    </div>
  );
}