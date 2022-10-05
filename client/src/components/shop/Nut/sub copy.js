import React, { Component } from "react";
import "./sub.css";
import Navber from "../partials/Navber";
import Footer from "../partials/Footer";
import NewsList from "./subsub";

export default class App22 extends Component {
  state = {
    id: "",
  };



  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitId = () => {
    const post = {
      plzid: this.state.id,
    };

    fetch("http://localhost:8000/nlp", {
      method: "post", // 통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          id: json.text,
        });
      });
  };

  
//<span className='text-3xl text-red-600 '></span>
  render() {

  
    return (
      <div>

    
      <Navber/>
      <div className='bmii'>
       <div className='app22'>
       <img id="immaa"class="" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0JtDe%2FbtrNw9Qzccs%2FIMkxfh6cO6bEgB0XWItfvK%2Fimg.jpg"></img>
      
     
       
       <div className= "container22">
       <h3 className='font-bold text-5xl mt-5 mb-10 '>딥러닝을 이용한 영양제 추천 시스템</h3>
      <br/>
      <div className='text-xl text-center leading-normal h-full '>
       
      <strong><span className='text-3xl text-blue-700 '>Word2Vec</span>와 <span className='text-3xl text-blue-700'>TF-IDF</span>그리고 <span className='text-3xl text-blue-700 '>코사인 유사도</span> 를 통해 유사도를 계산 </strong> <br/>
      
     
       </div>
       <br/>
       <br/>
       <br/>
 
       {/* <div className ="form-row ">
         <label> <span className='text-red-700'>  건강 기능</span>을 선택해주세요</label> 
       
       
        
         <br></br>
 
       </div> */}
       <div className ="form-row ">
       <label className="text-4xl">  <span className='font-bold text-4xl text-blue-600'>영양제</span>를 입력해주세요</label>
       <br/>
       <div className="sub-container-header">
              <input className="id22" onChange={this.handleChange} name="id" placeholder="ex ) 갱년기소녀" />
            </div>
            <br/>
            <div className="sub-container-btn">
              <button className="w-btn w-btn-gra2"  onClick={this.submitId}>SUBMIT</button>
            </div>
            <div className="sub-container-state ">
              <br/>
              <br/>
             <div className="text-blue-600 text-3xl font-bold ">***영양제 추천 순위***</div>
             <br/>
             <br/>
             <div className=' text-2xl leading-9 font-medium '>
              {this.state.id}</div> 
              {/* <NewsList newsArr={this.state.newsList} /> */}
            {/* <div>
      {this.state.id.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element}</h2>
          </div>
        );
      })}
    </div> */}
              <br/>
              
            
              
                    {/* {this.state.id.map((item) => { return (<li>{item.id}</li>) })} */}
              
            </div>
        
            <br/>
            <br/>
 
       </div>
       <br/>
     
      
       <div className='font-bold text-4xl text-blue-700 '>Word2Vec</div> 
       <ul className="bu "> <br/>
        <li>단어 간 유의미한 유사도를 반영할 수 있도록 단어의 의미를 벡터화 할 수 있는 방법 </li>
        <li>   *원핫 인코딩(0과 1로만 표현)은 유사도를 계산하지 못하고 속도가 매우 느리다</li>
        <li>   *Word2Vec(실수형으로 표현)</li>

       </ul>
       <br/>
       <div className='font-bold text-4xl text-blue-700  '>TF-IDF</div>
       <ul className="bu"> <br/>
       <li>TF: 특정 문서에 특정 단어가 얼마나 등장 </li>
<li>IDF: 전체 문서에서 특정 단어가 얼마나 등장 </li>
<li>TF-IDF: 다른 문서에서는 등장 안 하지만 특정 문서에서만 자주 등장</li>
<li>문서의 유사도를 구하기 쉽고 중요한 단어는 높은 숫자를 부여 </li>


       </ul>
       <br/>
       <div className='font-bold text-4xl text-blue-700 '>코사인 유사도</div> 
       <ul className="bu"> <br/>
       <li>두 벡터 간의 코사인 각도를 이용하여 구할 수 있는 두 벡터의 유사도를 통해 얼마나 유사한지 수치로 나타낸다 </li>
<li>-1이상 1이하의 값을 가지며 값이 1에 가까울수록 유사도가 높다</li>
<li>거리 기반으로 유사도를 구하는 유클리디안 거리에 비해 단어량 즉 스케일에 관계없이 유사한 문장을 매우 쉽게 찾을 수 있다</li>

       </ul>

    
       </div>
 
       </div>
       </div>
       <Footer/>
       </div>
    );
  }
}