import React from "react";

const Login = () => {
  return (
    <div className="Container">
      <h3>Login User</h3>
      <div>
        <form action="">
          <label htmlFor="fName">First Name:</label>
          <input type="text" name="fName" id="fName" placeholder="Jagan.." />
          <label htmlFor="lName">Last Name:</label>
          <input type="text" name="lName" id="lName" placeholder="doe.." />
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
        </form>
      </div>
    </div>
  );
};

export default Login;
