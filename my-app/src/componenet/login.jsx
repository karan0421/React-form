import React, { useState } from "react";

function Login() {
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const getData = JSON.parse(localStorage.getItem("item"));
  const array = getData?.length > 0 ? getData : [];

  function setItem() {
    array.push(inputs);
    localStorage.setItem("item", JSON.stringify(array));
  }
  return (
    <>
      <div className="container">
        <form className="p-3 karan col-lg-3">
          <h1>Log in </h1>
          <div className="mb-2 ">
            <label htmlFor="exampleDropdownFormEmail2" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleDropdownFormEmail2"
              placeholder="Email"
              name="Email"
              value={inputs?.Email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 ">
            <label
              htmlFor="exampleDropdownFormPassword2"
              className="form-label"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleDropdownFormPassword2"
              placeholder="Password"
              name="Password"
              value={inputs?.Password}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2 col-11 mx-auto">
            <button className="btn btn-primary" type="button" onClick={setItem}>
              Log in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;