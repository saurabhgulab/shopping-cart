// import { useState, useMemo } from "react";
// import { Select } from "react-select";
// import countryList from "react-select-country-list";
// // Import the languages you want to use
// // import enLocale from "i18n-iso-countries/langs/en.json";
// // import itLocale from "i18n-iso-countries/langs/it.json";

// export default function CountryName() {
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const options = useMemo(() => {
//     countryList().getData(), [];
//   });

//   const changeHandler = (selectedCountry) => {
//     setSelectedCountry(selectedCountry);
//   };
//   // const selectCountryHandler = (value) => setSelectedCountry(value);

//   // Have to register the languages you want to use
//   // countries.registerLocale(enLocale);
//   // countries.registerLocale(itLocale);

//   // Returns an object not a list
//   // const countryObj = countries.getNames("en", { select: "official" });

//   // const countryArr = Object.entries(countryObj).map(([key, value]) => {
//   //   return {
//   //     label: value,
//   //     value: key,
//   //   };
//   // });

//   return (
//     <Select
//       options={options}
//       value={selectedCountry}
//       onChange={changeHandler}
//     />
//     // <div>
//     //   <Select
//     //     style={{ width: "150px" }}
//     //     value={selectedCountry}
//     //     onChange={(e) => selectCountryHandler(e.target.value)}
//     //   >
//     //     {!!countryArr?.length &&
//     //       countryArr.map(({ label, value }) => (
//     //         <MenuItem key={value} value={value}>
//     //           {label}
//     //         </MenuItem>
//     //       ))}
//     //   </Select>
//     // </div>
//   );
// }
