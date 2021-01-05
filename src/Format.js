const apiData = [
  {
    "active": "23,198,662",
    "country": "World",
    "Last Update": "2021-01-04 22:54",
    "New Cases_text": "+463,530",
    "New Deaths_text": "+7,982",
    "cases": "85,979,076",
    "deaths": "1,858,774",
    "Total Recovered_text": "60,921,640"
  },
  {
    "active": "8,267,800",
    "country": "USA",
    "Last Update": "2021-01-04 22:54",
    "New Cases_text": "+146,291",
    "New Deaths_text": "+1,453",
    "cases": "21,267,326",
    "deaths": "361,598",
    "Total Recovered_text": "12,637,928"
  },
  {
    "active": "232,343",
    "country": "India",
    "Last Update": "2021-01-04 22:54",
    "New Cases_text": "+16,278",
    "New Deaths_text": "+200",
    "cases": "10,357,569",
    "deaths": "149,886",
    "Total Recovered_text": "9,975,340"
  }
]


export const normalizeData = (dataFromAPI) => {
  let countryDataObj = dataFromAPI.reduce((accum, data) => {
    console.log(accum);
    const { country , cases, deaths } = data;
    if (accum[country] == null) {
      accum[country] = { country, deaths, cases };
    } else {
      accum[country].deaths += deaths;
      accum[country].cases += cases;
    }
    return accum;
  }, {});

  let countryDataArray = [];

  for (const key in countryDataObj) {
    countryDataArray.push(countryDataObj[key]);
  }
  return countryDataArray;
};

