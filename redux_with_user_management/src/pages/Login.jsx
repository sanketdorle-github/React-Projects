import React, { useEffect, useState } from "react";
import styles from "./styling/Login.module.css";
import { toast } from "react-toastify";


import {useDispatch,useSelector} from "react-redux";
import { loginSuccess } from "../features/UserSclice";




const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.auth.user);
  const token = useSelector((state)=>state.auth.token);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setisLoading] = useState(false);
const handleSubmit = async (e) => {
  e.preventDefault();
  const userData = {
    email: formData.email,
    password: formData.password,
  };
  try {
    setisLoading(true);
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
      method: "POST",
      credentials: "include", // Required for cookies
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify(userData),
    });
    const responseData = await response.json();
    if (response.ok) {
      // Handle successful login
      console.log("Login successful:", responseData);
      const data = responseData.data
      dispatch(loginSuccess(data));
      toast.success("Login successful!");
    } else {
      // Handle login error
      console.error("Login failed:", responseData);
      toast.error(responseData.message || "Login failed. Please try again.");
    }
  } catch (error) {
    console.error("Error logging in:", error);
  } finally {
    setisLoading(false);
  }
}
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
              value={formData.email}
              onChange={(e) =>setFormData({...formData, email:e.target.value})}
            />
          </div>

          <div>
            <label htmlFor="email">Password:</label>
            <input type="password" name="password" id="password" 
              value={formData.password}
              onChange={(e) =>setFormData({...formData, password:e.target.value})}
            />
          </div>
          <input type="submit" value="Submit" className="registerBtn"  onClick={handleSubmit} disabled={isLoading}/>
        </form>
        <p>{user && user.email} </p>
        <p>{user && user.firstName} </p>
      
      </div>
    </div>
  );
};

export default Login;
