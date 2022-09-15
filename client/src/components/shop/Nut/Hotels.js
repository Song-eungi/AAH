//import './css/common.css';
import React,{ useState } from 'react';
import axios from 'axios';

function UserList() {

  //정보가져오기
  function getUserList () {
  
    let reqOption = {
      method : "get",
      headers : {
        "content-type" : "application/json"
      }
    }

    fetch("/api/bloodcirculation", reqOption).then((res) => res.json())
    .then(data => console.log(data));

  }
  getUserList();

  useEffect(() => {
    axios.get('/api/bloodcirculation') 
      .then(res => console.log(res))
  })

  
  return (
    <div className="contents">
      
    </div>
  )
}

export default UserList;