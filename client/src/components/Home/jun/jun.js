import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import {Button} from './Button';
import './Navbar.css';
import { Container, Row, Col } from "react-bootstrap";
import myImg from "./jun.jpg";
import SocialMedia from "./SocialMedia";
import TypeWriter from "./TypeWriter";

function Jun() {
    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click) ;
    const closeMobileMenu = () => setClick(false);

    // // 화면 크기에 따라서 버튼이 보이고 안보이도록 설정한다. 
    // const showButton = () => {
    //     if(window.innerWidth <= 960){
    //         setButton(false)
    //     }
    //     else {
    //         setButton(true);
    //     }
    // };

    // // SIGNUP버튼이 사이즈가 줄어들면 없어지도록 한다. 
    // useEffect(() => {
    //     showButton();
    // }, []);


    // window.addEventListener('resize', showButton);
//https://blog.kakaocdn.net/dn/JRa1y/btrNbczwuWU/YKsFCyZbvBzIoIGRVGoWF0/img.png
    return (
        <>
        <nav className = 'navbar '>
            <div className = 'navbar-container'>
          
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FxzCMQ%2FbtrM8JEAw2Y%2FHWdm6tEWhsaufHaClHqOl0%2Fimg.png" className='hmig w-1/4'>

</img>

                {/* 모바일버전에서 클릭하면 메뉴 보이도록 설정하는 것도 한다. (close Mobile Menu)는 다시 버튼 누르면 없어지고 생기고 하도록 한다.  */}
                <Link to='/' className='navbar-logo ' onClick={closeMobileMenu}>
               
                    <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className = {click ? 'fas fa-times' : 'fas fa-bars' } />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/About' className='nav-links' onClick = {closeMobileMenu}>
                            송은지
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/dong' className='nav-links' onClick = {closeMobileMenu}>
                            윤동민
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/jun' className='nav-links' onClick = {closeMobileMenu}>
                            박준용
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/eun' className='nav-links' onClick = {closeMobileMenu}>
                            정은아
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick = {closeMobileMenu}>
                            Shop
                        </Link>
                    </li>
                </ul>
                      <div className='drop-shadow-md shadow-blue-600/50'></div>
                {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
            </div>
      
        </nav>
        {/* <Container fluid className="home-section" id="home"> */}
        {/* <Container className="home-content"> */}

        <div className='home'>
            {/* <Col md={6} className="home-header"> */}
 
            <div className='homecont'>
              <h1 style={{ paddingBottom: 20 }} className="heading-name font-medium">
                HELLO!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <br/>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Park Jun yong</strong>
              </h1>
              {/* <span className="wave text-red-700"> */}
              <div className="heading-description blockquote mt-6 font-weight: 700 ">
              프로젝트 프론트엔드부분을 맞아 React를 사용해 <span className="wave text-red-700"> 프론트엔드</span> 구성과 스타일 그리고 <span className="wave text-red-700"> Simple-react-chatbot</span>을 이용해 챗봇을 구성하였습니다.
              </div>
              

              <div className="heading-type mt-8">
                <TypeWriter />
              </div>

              </div>
            {/* </Col> */}
            <div className='homeimg'>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </div>
            <br/>

            </div>
          
          {/* </Container> */}
          {/* </Container> */}
          <div fluid className="home-about-section" id="about">
          <div>
          <div className='homefoot'>
            <div md={12} className="home-about-social">
              <h3 className='font-bold mb-5'>Get in Touch</h3>
              <p className=''>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>To connect with me</strong>
              </p>
              <SocialMedia />
            </div>
          </div>
        </div>
        </div>
        </>
    );
}

export default Jun