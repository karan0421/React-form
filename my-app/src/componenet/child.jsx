import React, { useState } from "react";

function Child(props) {
  const shoot =(k,j)=>{
    alert (j.type)
  }
  const [age, setAge]=useState();
  const [eligible, setEligble] =useState("");
 
  // let karan = (age>=18)? 'you are 18+':'you are not 18+';  this the ternary operator 

  const handleChange = (e) => {
    setAge(e.target.value)
    e.target.value >= 18 ? setEligble("eligible") : setEligble("not eligible") ; 
  }

  return (
    <>  
      <button onClick={props.set}>Button</button>
      <h1>{props.msgs}</h1>
      <button onClick={(e)=>shoot("yaa its working",e)}>click me </button><br />
      <input type="text" onChange={
        handleChange}/>
      
      
    {eligible}
    
    </>
  );
}

export default Child;
