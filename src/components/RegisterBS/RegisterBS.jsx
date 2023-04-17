import React from "react";

const RegisterBS = () => {

    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
    }

  return (
    <div>
      <form className="w-50 mx-auto" onSubmit={handleRegister}>
        
          <label  className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        
        
          <label  className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        
       
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label">
            Check me out
          </label>
      
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterBS;
