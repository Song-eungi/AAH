import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import {Button} from './Button';
import './Navbar.css';
import { Container, Row, Col } from "react-bootstrap";
import myImg from "./Assets/sunil.jpg";
import SocialMedia from "./SocialMedia";
import TypeWriter from "./TypeWriter";

function Navbar() {
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

    return (
        <>
        <nav className = 'navbar '>
            <div className = 'navbar-container'>
                {/* 모바일버전에서 클릭하면 메뉴 보이도록 설정하는 것도 한다. (close Mobile Menu)는 다시 버튼 누르면 없어지고 생기고 하도록 한다.  */}
                <Link to='/' className='navbar-logo ' onClick={closeMobileMenu}>
                   TRVL 
                    <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className = {click ? 'fas fa-times' : 'fas fa-bars' } />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick = {closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick = {closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick = {closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick = {closeMobileMenu}>
                            Sign Up
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
              <h1 style={{ paddingBottom: 20 }} className="heading font-medium">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <br/>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Sunil Yadav</strong>
              </h1>

              <div className="heading-description blockquote mt-6 font-weight: 700 ">
                I am passionate about using Javascript and Animation Libraries
                to create awesome user experiences. With over five years of
                experience developing web applications using the latest
                front-end and back-end technologies.
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
                <strong>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </div>
          </div>
        </div>
        </div>
        </>
    );
}

export default Navbar