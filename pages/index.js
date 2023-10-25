import React from "react";



import Header from "../components/Header";
import Footer from "../components/Footer";


//COMPONENTS
import Layout from "../components/Layout";
import HeaderImg from "../components/HeaderImg";

//STYLES
import '../styles/App.css'



const Start = () => {
  return (
    <div className="main-container">
     
        <Layout> 
            <HeaderImg />
        </Layout>
       
    </div>
  );
};

export default Start;
