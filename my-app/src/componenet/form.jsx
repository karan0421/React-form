
import React, { useState } from "react";

function Form() {
const [inputs ,setInputs]=useState({});
const [gender, setGender]= useState(true);
const [data, getData]= useState([]);


  const handleChange = (e) =>{
       const name=e.target.name;       
       const value=e.target.value;
       setGender(e.target.checked);
        

       setInputs(values=>({...values,[name]:value}))
       
  }
  const handleClick = () =>{
    setItem();
    
  }
  
  console.log(inputs.userName)
  const data1=JSON.parse(localStorage.getItem("item"));
  // getData(data1);
  console.log(data1);
  const array =data1?.length>0?data1:[];

  function setItem() {
    array.push(inputs);
    getData(array);
    localStorage.setItem("item", JSON.stringify(array));
    setInputs({firstName:"",
      lastName:"",
      email:"",
      password:"",
      number:"",
      gender:""

    });

  }
  return (
    <>
      <div className="container ">
        <form className="p-3 form col-lg-3 ">
          <h1>SingUp </h1>
          <div className="mb-1 ">
            <label
              htmlFor="exampleDropdownFormFirstName2"
              className="form-label"
            >
              FirstName:-
            </label>
            <input
              type="FirstName"
              className="form-control"
              name="firstName"
              id="exampleDropdownFormFirstName2"
              placeholder="FirstName"
              value={inputs?.firstName}
              onChange={handleChange}
              
            />
          </div>
          <div className="mb-2 ">
            <label
              htmlFor="exampleDropdownFormLastName2"
              className="form-label"
            >
              LastName:-
            </label>
            <input
              type="LastName"
              className="form-control"
              id="exampleDropdownFormLastName2"
              placeholder="LastName"
              name="lastName"
              value={inputs?.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 ">
            <label htmlFor="exampleDropdownFormEmail2" className="form-label">
              Email:-
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleDropdownFormEmail2"
              placeholder="Email"
              onChange={handleChange}
              value={inputs.email}
              name="email"

            />
          </div>
          <div className="mb-2 ">
            <label
              htmlFor="exampleDropdownFormPassword2"
              className="form-label"
            >
              Password:-
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleDropdownFormPassword2"
              name="password"
              value={inputs.password}
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 ">
            <label htmlFor="exampleDropdownFormNumber2" className="form-label">
              Mo:-
            </label>
            <input
              type="number"
              name="number"
              value={inputs.number}
              className="form-control"
              id="exampleDropdownFormNumber2"
              placeholder="Number"
              onChange={handleChange}
            />
          </div>
          <label htmlFor="gender">Gender:-</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="inlineRadio1"
              value="male"
              radioGroup={gender === "male"} 
             onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="inlineRadio2"
              value="female"
              radioGroup={gender === "female"}
               onChange={handleChange}
              
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Female
            </label>
          </div>
          <br />
          <div className="d-grid gap-2 col-11 mx-auto">
            <button className="btn btn-primary" type="button" onClick={handleClick}>
              Sing in
            </button>
          </div>
        </form>
      </div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Number</th>
      <th scope="col">Gender</th>
    </tr>
    </thead>
    <tbody>
      {data?.map((item,index)=>(
      <tr key={index.id}>
      <th scope="row">{index}</th>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.email}</td>
      <td>{item.password}</td>
      <td>{item.number}</td>
      <td>{item.gender}</td>
    </tr>))}
  
    </tbody>
    </table>
    </>
  );
}

export default Form;
