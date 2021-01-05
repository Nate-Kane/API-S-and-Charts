// const apiData = [
//   {
//     "active": "23,198,662",
//     "country": "World",
//     "Last Update": "2021-01-04 22:54",
//     "New Cases_text": "+463,530",
//     "New Deaths_text": "+7,982",
//     "cases": "85,979,076",
//     "deaths": "1,858,774",
//     "Total Recovered_text": "60,921,640"
//   },
//   {
//     "active": "8,267,800",
//     "country": "USA",
//     "Last Update": "2021-01-04 22:54",
//     "New Cases_text": "+146,291",
//     "New Deaths_text": "+1,453",
//     "cases": "21,267,326",
//     "deaths": "361,598",
//     "Total Recovered_text": "12,637,928"
//   },
//   {
//     "active": "232,343",
//     "country": "India",
//     "Last Update": "2021-01-04 22:54",
//     "New Cases_text": "+16,278",
//     "New Deaths_text": "+200",
//     "cases": "10,357,569",
//     "deaths": "149,886",
//     "Total Recovered_text": "9,975,340"
//   },
//   ,
//   {
//     "active": "681,961",
//     "country": "Brazil",
//     "Last Update": "2021-01-04 21:54",
//     "New Cases_text": "+20,006",
//     "New Deaths_text": "+543",
//     "cases": "7,753,752",
//     "deaths": "196,561",
//     "Total Recovered_text": "6,875,230"
//   },
//   {
//     "active": "561,114",
//     "country": "Russia",
//     "Last Update": "2021-01-04 22:54",
//     "New Cases_text": "+23,351",
//     "New Deaths_text": "+482",
//     "cases": "3,260,138",
//     "deaths": "58,988",
//     "Total Recovered_text": "2,640,036"
//   },
//   {
//     "active": "N/A",
//     "country": "UK",
//     "Last Update": "2021-01-04 22:54",
//     "New Cases_text": "+58,784",
//     "New Deaths_text": "+407",
//     "cases": "2,713,563",
//     "deaths": "75,431",
//     "Total Recovered_text": "N/A"
//   },
//   {
//     "active": "2,398,298",
//     "country": "France",
//     "Last Update": "2021-01-04 22:54",
//     "New Cases_text": "+4,022",
//     "New Deaths_text": "+378",
//     "cases": "2,659,750",
//     "deaths": "65,415",
//     "Total Recovered_text": "196,037"
//   }
// ]


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

