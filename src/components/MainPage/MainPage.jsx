import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Results from '../Results/Results';

import { bigData } from '../../data.js';

import './MainPage.css'

const MainPage = () => {
  const [field, setField] = useState('');
  const [data, setData] = useState();
  
  const search = (field) => {
    const getArr = bigData.map(item => item.filter(item => item.company === field)); 
    const lengthArr = getArr.filter(item => item.length > 0)
    const filtered = lengthArr.map((item, index) => item[index].name);

    setField(field);
    setData(filtered);
  } 

  return (
    <div className='mainPage' data-testid='mainpage'>
      <SearchBar input={field} onChange={search} />
      <Results results={data} />
    </div>
  ); 
};

export default MainPage;

