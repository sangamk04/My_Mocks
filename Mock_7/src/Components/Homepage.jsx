import React, { useEffect, useState } from 'react';
// import CountryCard from './CountryCard';
import style from "./HomePage.module.css"
import CCard from './CCard';
import axios from "axios"
import { Select, MenuItem } from '@material-ui/core';

const Homepage= () => {
  const [country, setCountry] = useState([]);
  const getData = async () => {
    let res = await fetch('https://restcountries.com/v3.1/all');
    let data = await res.json();
    setCountry(data);
    
  };

//   const handleFilter=(event)=>{
//     //console.log(event)
//     //console.log(event)
//     console.log(event.target.value)
//     axios.get(`https://restcountries.com/v3.1/region/${event.target.value}`).then((res)=>{
//         console.log(res.data)
//         setCountry(res.data)
//     })
// }



  useEffect(() => {
    getData();
  }, []);
  console.log(country);
  return (
    <>
    <h1>Countries_List</h1>

    <Select value={2} style={{ marginTop: 100, marginLeft: 100 }}>
      <MenuItem value={1}>Jan</MenuItem>
      <MenuItem value={2}>Feb</MenuItem>
      <MenuItem value={3}>March</MenuItem>
      <MenuItem value={4}>April</MenuItem>
      <MenuItem value={5}>May</MenuItem>
    </Select>



 <div className={style.sangam}>
    
      {country.length
        ? country.map((data, ind) => <CCard key={ind} data={data} />)
        : 'Loading....'}
   </div>
   </>
  );
};
export default Homepage