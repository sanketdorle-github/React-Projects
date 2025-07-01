import React from "react";
import "../App.css";

const Register = () => {
  return (
    <div className="Container">
      <div className="mainDivv">
        <div className="cDiv">

        <h3 className="headingAuth">Register User</h3>
        <div className="aboveFormDiv">
          <form action="" className="formRegister">
            <div className="formDiv">
              <div className="nameDiv">
                <label htmlFor="fName">First Name:</label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Jagan.."
                  className="nameInput"
                  />
                <label htmlFor="lName">Last Name:</label>
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder="doe.."
                  className="nameInput"
                />
              </div>
              <div>

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="jdoe@example.com"
                />
                </div>
            
              <div>

              <label htmlFor="email">Password:</label>
              <input type="password" name="password" id="password" />

              </div>
              <input type="submit" value="Submit"  className="registerBtn"/>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
