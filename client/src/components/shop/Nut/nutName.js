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
     <div className='bmi'>
      <div className='app2'>
      <img id="imma"class="" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsFMlM%2FbtrM1ermqtS%2FjszZm1PesJRKNubBg41a1k%2Fimg.jpg"></img>
     
    
      
      <div className= "container22">
      <h3 className='font-bold text-5xl mt-5 mb-10 '>영양제 성능 검색</h3>
      <br/>
      <div className='text-xm text-center leading-normal h-full '>
      <strong><span className='text-3xl text-red-600 '>공공데이터포털 사이트</span>에서 제공하고 있는 <span className='text-3xl text-red-600'>건강기능식품 API</span> 를 통해 수집</strong> <br/>
      
      <br/><p className='text-gray-600 p-0'> 공공데이터포털이란? 
      국가에서 보유하고 있는 다양한 데이터를 공유•활용할 수 있도록 공공데이터(Dataset)와 Open API로 제공하는 사이트입니다.
      <br/></p>
      <a href='https://www.data.go.kr/index.do' className='text-xm text-gray-600'>data.go.kr</a>
      
       </div>
      <br/>
      <br/>
      <br/>


      <div className ="form-row ">
        <label> <span className='text-red-700'>  건강 기능</span>을 선택해주세요</label> 
      
      
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
      <label>  <span className='text-red-700'>영양제</span>를 선택해주세요</label>
     
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

