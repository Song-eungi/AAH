import Navber from "../partials/Navber";
import Footer from "../partials/Footer";


import React from 'react';
import Categories from './Categories';
import NewsList from './NewsList';
// import Footer from "./Footer";

// import Navbar from "../components/Navbar";



const NewsPage = ({ match }) => {

    const category = match.params.category || 'all';
    return (
        <>  <Navber/>
            <Categories />
            <NewsList category={category} />
            <Footer/>
            
        </>
    );
};


export default NewsPage;