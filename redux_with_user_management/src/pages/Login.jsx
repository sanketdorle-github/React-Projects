import React from "react";
import styles from "./styling/Login.module.css";
const Login = () => {
  return (
    <div className={styles.container}>
      <h3>Login User</h3>
      <div className={styles.parentFormDiv}>
        <form action="" className={styles.form}>
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
          <input type="submit" value="Submit" className="registerBtn" />
        </form>
      </div>
    </div>
  );
};

export default Login;
