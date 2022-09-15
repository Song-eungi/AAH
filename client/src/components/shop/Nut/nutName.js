import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from "../layout";
import "./nut.css";
import Navber from "../partials/Navber";
import Footer from "../partials/Footer";

function NutName() {
  const [totalNut, setTotalNut] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNut = async() => {
    try {
      // 요청 처음에 초기화
      setError(null);
      setTotalNut([]);
      // loading 상태 true
      setLoading(true);

      const response = await axios.get('http://localhost:8000/api/concat');
      setTotalNut(response.data);
      console.log('fetch Names');
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  
  useEffect(() => {
    fetchNut();
  }, []);

  //Country
  const [selectedNut, setSelectedNut] = useState(null);
  const nutCountries = totalNut.map(concat => concat.keyword);
  const selectNut = (e) => {
    setSelectedNut(e.target.value);
  }

  //Location
  const [selectedLocation, setSelectedLocation] = useState(null);
  const nutLocations = totalNut
    .filter(nut  => selectedNut === nut.keyword)
    .map(concat => concat.PRDUCT);
  const selectLocation = (e) => {
    setSelectedLocation(e.target.value);
  }

  //
  const nutNames = totalNut
  .filter(nut => selectedLocation === nut.PRDUCT)
  .map(concat => concat.origin_MAIN_FNCTN);

  

  if (loading) return (<div className='loading'><h1>로딩중..</h1></div>);
  if (error) return (
    <div className='error'>
      <h1>로딩중 에러가 발생했습니다.</h1>
      <button onClick={fetchNut}>다시 불러오기</button>
    </div>);
  if (!totalNut) return null;
  
  return (
    <div>

    
     <Navber/>
      <div className='app'>
       
      
      <div class= "container">
      <h3>Nutrients</h3>
      <div class ="form-row">
      <label> 건강 기능을 선택해주세요</label>
      
        <select id="country-select" defaultValue="default" onClick={selectNut}>
          <option value="default" disabled>
            Choose a Function ...
          </option>
          {[...new Set(nutCountries)].map((nutCountries, key) => (
            <option value={nutCountries} key={key}>{nutCountries}</option>
          ))}
        </select>
        <br></br>

      </div>
      <div class ="form-row">
      <label>영양제를 선택해주세요</label>
     
        <select id="location-select" defaultValue="default" onClick={selectLocation}>
          <option class="dd" value="default" disabled>
            Choose a Nutrients ...
          </option>
          {[...new Set(nutLocations)].map((nutLocations, key) => (
            <option value={nutLocations} key={key}>{nutLocations}</option>
          ))}
        </select>
        <br></br>

      </div>
      <div class ="form-row">
      <label></label>
        <div id="nut-select" defaultValue="default">

          {nutNames.map((nutNames, key) => (
            <div value={nutNames} key={key}>{nutNames}</div>
           
          ))}
        </div>
      </div>

      </div>

      </div>
      <Footer/>
      </div>
    
  );
}

export default NutName;