let countries = "";

fetch("https://restcountries.com/v2/all")
  .then((res) => res.json())
  .then((data) => initialize(data))
  .catch((err) => console.log("Error", err));

function initialize(countriesData) {
  countries = countriesData;
  let options = " ";
  for (let i = 0; i < countries.length; i++) {
    options += `<option value="${countries[i].alphacode}">${countries[i].name}</option>`;
  }
  document.getElementById("countries").innerHTML = options;
  //   document.getElementById("states").innerHTML = options;
}

// import { useEffect, useState } from "react";
// import axios from "axios";

// export const Service = () => {
//   const [data, setData] = useState([]);
//   const [getCountry, setCountry] = useState([]);
//   useEffect(() => {
//     axios
//       .get(
//         "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
//       )
//       .then((res) => setData(res.data))
//       .catch((err) => console.log(err));
//   }, []);
//   const country = [...new Set(data.map((item) => item.country))];
//   return <div></div>;
// };
