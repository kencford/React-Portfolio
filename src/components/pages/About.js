import React from 'react';
import kenImg from '../../images/ken.jpg'

export default function About() {
  return (

    <div className='mt-5' text-center>
      <h1 className="text-end px-5 mb-5 bg-primary text-white py-3">About Page</h1>
      <img className="mx-auto" src= {kenImg} width='25%' height='25%' alt='Ken'></img>
      <p className='px-5'>
      Ken is a results oriented Senior Development Engineer with proven record of innovative solutions in software development and scripting. He has strong software problem solving capabilities; demonstrated ability to write modular, efficient, documented, reusable code using PL/SQL, Shell, and Python and is highly proficient in EXCEL. Strengths include cost effective, sound solutions to technical problems.

      Most recently, he has developed several websites from scratch using numerous web-related tools including React, mySql, Node Package Manager, Routing, and MongoDB.

      </p>  
    </div>
  );
}
