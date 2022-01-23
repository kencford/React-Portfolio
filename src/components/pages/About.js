import React from 'react';
import kenImg from '../../images/ken.jpg'
// import  note for Ken - react has behing-the-scenes css file

export default function About() {
  return (

    <>
      <h1 className="text-end px-5 mb-5 bg-primary text-white py-3">About Page</h1>
      <div className="container d-flex">
      <img className="mx-5" src= {kenImg} width='25%' height='25%' alt='Ken'></img>
      <p>
      Ken is a results oriented Senior Development Engineer with proven record of innovative solutions in software development and scripting.<br/><br/> He has strong software problem solving capabilities; demonstrated ability to write modular, efficient, documented, reusable code using PL/SQL, Shell, and Python and is highly proficient in EXCEL.<br/><br/>Strengths include cost effective, sound solutions to technical problems.

      Most recently, he has developed several websites from scratch using numerous web-related tools including React, mySql, Node Package Manager, Routing, and MongoDB.

      </p>  
      </div>
    </>
  );
}
