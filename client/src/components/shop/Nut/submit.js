import logo from './logo.svg';
import './App.css';
import axios from 'axios';   //axios 추가

const App2=()=>{

  const send =()=>{
    const client = axios.create();   // axios 기능생성
    const name = '내이름은 코난';   
    client.post('/api' , {name} );   //axios 기능을 통한 post 사용및 name 값 전달.
}

  return (
    <div className="App">
        <button onClick={ ()=>{ send(); }}>보내기 버튼 생성!</button>
    </div>
  );
}

export default App2;