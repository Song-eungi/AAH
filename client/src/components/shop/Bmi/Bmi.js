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
        setMessage('당신은 저체중 범주에 속합니다. 충분한 영양 공급 또는 의사와의 상담을 통해 정상체중을 유지해주세요.')

      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage('당신은 정상 체중 범주에 속합니다. 앞으로도 잘해주세요!')
      } else if (bmi >= 25 && bmi < 29.9) {
        setMessage('당신은 과체중 범주에 속합니다. 당신은 많은 체지방 혹은 근육을 가지고 있습니다. 꾸준한 운동과 건강한 식단을 지켜주세요.')
      } else if (bmi >= 30) {
        setMessage('당신은 비만 범주에 속합니다. 꾸준한 운동과 건강한 식단을 지켜주세요.')
      }
    }
  }

  //  show image based on bmi calculation
 let imgSrc;

  if (bmi < 1) {
    imgSrc = null
  } else {
    if(bmi < 18.5) {
      imgSrc = require("./imgs/bmibmi.png")
    } else if (bmi >= 18.5 && bmi < 24.9) {
      imgSrc = require("./imgs/bmibmi.png")
    } else if (bmi >= 25 && bmi < 29.9) {
      imgSrc = require("./imgs/bmibmi.png")
    } else if (bmi >= 30) {
      imgSrc = require("./imgs/bmibmi.png")
    }
  }




  let reload = () => {
    window.location.reload()
  }

  return (
    <div className='bmi'>
    <div className="app2">
    <img id="imma"class="" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FUWCjo%2FbtrMFGPaP5G%2Fc5Z4wDbYb5RwGbH5EBC8eK%2Fimg.jpg"></img>
      <div className='container22'>
        <h3 className='center font-bold text-5xl '>비만 자가 진단</h3>
        <br/>
        <div className=' font-bold text-3xl mt-10 text-green-700'>BMI(신체 질량지수)란</div>
        <div class="font-bold">체질량지수(Body Mass Index)로 체중을 키의 제곱으로 나눈 값을 통해 지방의 양을 추정하는 비만측정법. <br/>
			이 BMI 지수가 높으면 높을수록 생활습관병이 걸리기 쉽고, 비만학회에서는 남녀 모두 지수가 22일때 <br/>가장 건강한 상태이고 이상적인 체중일 때 라고 합니다.</div>
      <br/>
      <div className=' font-bold text-3xl text-green-700'>BMI 계산하기</div>
      {/* <br/> */}
      <ul class="bu">
        <li>본인의 신장과 체중을 입력하시고 계산버튼을 누르면 자동으로 결과가 나옵니다</li>
        <li>계산방법 : 체중(kg) ÷ (신장(m) X 신장(m)) </li>
        <p class="margin_t_20">※신체질량지수(BMI : Body Mass Index)는 질병관리본부에서 제공하는 계산법입니다.</p>
        </ul>
        <br/>
       

        <form onSubmit={calcBmi}>
        <div className='mb-5'>
            <label className='font-bold text-green-700'> 키 </label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div className='mb-8'>
            <label className='font-bold text-green-700' >체중 </label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div className='btntt'>
            <button className='w-btn w-btn-green font-bold' type='submit'>RESULT</button> <br/> <br/>
            <button className='w-btn w-btn-indigo btn-outline font-bold ' onClick={reload} type='submit'>RESET</button>
          </div>
        </form>

        <div className='center'>
          <h2 className=' text-4xl mt-10 font-bold'>나의 신체질량지수(BMI): <span className='text-red-700'> {bmi}</span></h2>
          <div className='text-4xl mt-10 font-bold leading-9'>{message}</div>
         
        </div>
       
        <div className='center'>
          <img className='center m1-28' src={imgSrc} alt=''></img>
        </div>
        {/* <img src='./imgs/bmibmi.png'></img> */}
        <br/>
        <br/>
        <div className=' font-bold text-3xl text-green-700 mb-5' >예방 및 관리</div>
        <div>
          
        </div>
        <div className=' font-bold text-2xl mt-5 mb-5'>체중을 줄이면 여러 가지 질환을 예방할 수 있습니다.</div>
        <ul class="bu">
				<li>비만관리는 살을 원하는 만큼 뺀 이후에도 꾸준하게 해야 하며 너무 급속하게 체중을 감량하는 것 은 오히려 해가 될 수 있습니다. 체중감량의 속도는 일주일에 0.5kg~1kg 정도가 적절합니다.</li>
				<li>비만관리는 식사조절, 운동치료가 중심이 됩니다.
					<ul class="bu type2">
						<li>식사조절은 먹는 양 자체를 줄이고 특히 고열량음식, 지방이 많이 함유된 음식을 줄이는 방식으로 합니다. 금주를 하고 간식을 하지 않는 것이 효과적입니다.</li>
						<li>운동을 하게 되면 에너지 소비가 증가하여 체중이 줄게 되고, 고혈압, 이상지혈증 등 다른 질환에도 좋은 효과가 있습니다. 운동은 일주일에 3회 이상, 한 번에 30분 이상의 규칙적인 유산소 운동이 필요하며, 등에 땀이 날 정도로 운동을 하는 것이 좋습니다.</li>
						<li>비만 관리는 본인의 의지가 가장 중요하며 다른 어떤 질환보다 포기하는 경우가 많습니다. 스스로 목표를 세우고 격려하는 것이 중요합니다. 성공적인 비만관리를 위해서는 자신의 식사, 운동 습관을 잘 살펴서 음식을 먹을 수 있는 자리나 기회를 피하고, 간식거리는 보이지 않게 없애고, 스트레스를 줄이고 운동을 할 수 있는 기회를 만드는 것이 좋습니다.</li>
						<li className='mb-2'>살 빼는 차, 효소, 지방분해술, 민간요법 등의 효과는 확실히 알려져 있지 않습니다. 이뇨제와 단식은 다른 합병증을 일으킬 수 있으므로 하지 않는 것이 좋습니다.</li>
					</ul>
				</li>
			</ul>
      <a href='http://localhost:3000/products/category/6321ac80bcaa9f0f9066f9c1' className='font-bold text-2xl text-green-400 hover:text-green-400'> >>>> 영양제 다이어트 식품 구입하러 바로가기  </a>
      <div className=' font-bold text-3xl text-green-700 mb-5 mt-10'>비만 관리를 위한 식사요법</div>
      <ul class="bu">
				<li>비만 관리를 위해서는 전반적인 식사량을 줄이고 기름진 음식을 피합니다.</li>
				<li>과식하지 않고, 금주합니다.</li>
				<li>아침을 굶게 되면 점심 전에 쿠키, 초콜렛 등 단 간식을 섭취하게 되거나 점심에 과식을 할 가능성이 높으므로 간단하게라도 아침을 섭취하는 것이 좋습니다.</li>
				<li>끼니를 거르기보다 매 끼니 섭취하는 양을 줄이는 것이 살을 빼는데도 유리하고 건강 유지에도 좋습니다.</li>
				<li>오이, 토마토 등 비교적 에너지 함량이 낮은 식품을 간식으로 선택합니다.</li>
				<li>변비도 예방하고 단백질, 비타민, 무기질을 충분히 공급하기 위해 우유제품, 과일, 채소 등을 매일 섭취합니다.</li>
			</ul>
         
      </div>
    </div>
    </div>
  );
}

export default Bmi;