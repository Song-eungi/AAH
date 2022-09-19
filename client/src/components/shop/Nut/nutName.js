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
     <div className='apap'>
      <div className='app'>
       
      
      <div className= "container">
      <h3 className='font-bold text-4xl'>영양제 성능 검색</h3>
      <div className='text-xm text-center leading-normal '>
      <strong><span className='text-3xl '>공공데이터포털 사이트</span>에서 제공하고 있는 <span className='text-3xl'>건강기능식품 API</span> 를 통해 수집</strong> <br/>
      <a href='https://www.data.go.kr/index.do' className='text-xm'>data.go.kr</a>
      <br/><p className='text-gray-700'> 공공데이터포털이란? 
      국가에서 보유하고 있는 다양한 데이터를 공유•활용할 수 있도록 공공데이터(Dataset)와 Open API로 제공하는 사이트입니다.
      <br/>
      
      </p> </div>
      <br/>
      <div className ="form-row">
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
      <div className ="form-row">
      <label>영양제를 선택해주세요</label>
     
        <select id="location-select" defaultValue="default" onClick={selectLocation}>
          <option className="dd" value="default" disabled>
            Choose a Nutrients ...
          </option>
          {[...new Set(nutLocations)].map((nutLocations, key) => (
            <option value={nutLocations} key={key}>{nutLocations}</option>
          ))}
        </select>
        <br></br>

      </div>
      <div className ="form-row">
      <label></label>
        <div  id="nut-select" defaultValue="default">
            {[...new Set(nutNames)].map((nutNames, key) => (
              <div className='nuttt' value={nutNames} key={key}>{nutNames}</div>
          ))}
        </div>
      </div>

      </div>

      </div>
      </div>
      <Footer/>
      </div>
    
  );
}

export default NutName;

