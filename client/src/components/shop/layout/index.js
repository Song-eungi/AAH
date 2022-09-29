import React, { Fragment, createContext ,useState} from "react";
import { Navber, Footer, CartModal,SubSlider } from "../partials";
import LoginSignup from "../auth/LoginSignup";
import SimpleForm from './SimpleForm';

export const LayoutContext = createContext();

const Layout = ({ children }) => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => { setShowChat(true); }
  const hideChat = () => { setShowChat(false); }

  return (
    <Fragment>
      <div className="flex-grow">
        <Navber />
        <LoginSignup />
        <CartModal />
        
        {/* All Children pass from here */}
        {children}
        
       
      </div>
      <div>
      <div className = "bot">
        <div style ={{display: showChat ? "" : "none"}}>
          <SimpleForm></SimpleForm>
        </div>      
        {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
        <div className="botbtm h-30">
          {!showChat 
            ? <button className="btn22" onClick={() => startChat()}>ㅤ</button> 
            : <button className="btn22" onClick={() => hideChat()}>ㅤ</button>}
        </div>
      </div>      
        
        </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
