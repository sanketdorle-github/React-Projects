import React from "react";
import "../App.css";

const Register = () => {
  return (
    <div className="Container">
      <div className="mainDivv">
        <h3 className="headingAuth">Register User</h3>
        <div className="aboveFormDiv">
          <form action="">
            <div className="formDiv">
              <div className="nameDiv">
                <label htmlFor="fName">First Name:</label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Jagan.."
                />
                <label htmlFor="lName">Last Name:</label>
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder="doe.."
                />
              </div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="jdoe@example.com"
              />
              <label htmlFor="email">Password:</label>
              <input type="password" name="password" id="password" />

              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
