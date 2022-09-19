import React, {useState} from 'react'
import "./Bmi.css" 

function Bmi() {

  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')



  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert('입력되지 않았습니다. 다시한번 입력해주세요.')
    } else {
      let bmi = Number(weight / (height / 100) ** 2);
      setBmi(bmi.toFixed(1))

      // Logic for message

      if (bmi < 18.5) {
        setMessage('저체중입니다. 살좀 쪄야 겠어요;')

      } else if (bmi >= 18.5 && bmi < 22.9) {
        setMessage('딱 건강한 체중입니다')
      } else {
        setMessage('다이어트가 시급합니다.')
      }
    }
  }

  //  show image based on bmi calculation
 let imgSrc;

  if (bmi < 1) {
    imgSrc = null
  } else {
    if(bmi < 18.5) {
      imgSrc = require("./imgs/underweight.jpg")
    } else if (bmi >= 18.5 && bmi < 22.9) {
      imgSrc = require("./imgs/healthy.jpg")
    } else {
      imgSrc = require("./imgs/overweight.jpg")
    }
  }

  // let hrSrc;

  // if (bmi < 1) {
  //   hrSrc = null
  // } else {
  //   if(bmi < 18.5) {
  //     hrSrc = require("./imgs/underweight.jpg")
  //   } else if (bmi >= 18.5 && bmi < 22.9) {
  //     hrSrc = require("./imgs/healthy.jpg")
  //   } else {
  //     hrSrc = require("www.naver.com")
  //   }
  // }


  let reload = () => {
    window.location.reload()
  }

  return (
    <div className='apap2'>
    <div className="app2">
      <div className='container'>
        <h3 className='center font-bold text-5xl'>BMI</h3>
        <form onSubmit={calcBmi}>
        <div className='mb-5'>
            <label className='font-bold'> 키 </label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div className='mb-8'>
            <label className='font-bold' >체중 </label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <button className='btn font-bold' type='submit'>RESULT</button>
            <button className='btn btn-outline font-bold' onClick={reload} type='submit'>RESET</button>
          </div>
        </form>

        <div className='center'>
          <h2 className=' text-4xl mt-10'>당신의 BMI는? {bmi}</h2>
          <h3>{message}</h3>
         
        </div>
       
        <div className='center'>
          <img src={imgSrc} alt=''></img>
        </div>
         
      </div>
    </div>
    </div>
  );
}

export default Bmi;