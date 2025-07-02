import React, { useState } from "react";
import "../App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [formData, setformData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
  e.preventDefault();

  setIsLoading(true);

  const userData = {
    firstName: formData.fName,
    lastName: formData.lName,
    email: formData.email,
    password: formData.password,
  };

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      // if backend sends message in response
      const message = data?.message || "Registration failed.";
      throw new Error(message);
    }

    toast.success("User registered successfully!");
    console.log("Registered user:", data);

    // Reset the form only if registration succeeded
    setformData({
      fName: "",
      lName: "",
      email: "",
      password: "",
    });
  } catch (error) {
    console.error("Registration error:", error);
    toast.error(error.message || "Error registering user. Please try again.");
  } finally {
    setIsLoading(false);
  }
};

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
                    value={formData.fName}
                    onChange={(e) =>
                      setformData({ ...formData, fName: e.target.value })
                    }
                  />
                  <label htmlFor="lName">Last Name:</label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="doe.."
                    className="nameInput"
                    value={formData.lName}
                    onChange={(e) =>
                      setformData({ ...formData, lName: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="jdoe@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setformData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label htmlFor="email">Password:</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) =>
                      setformData({ ...formData, password: e.target.value })
                    }
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="registerBtn"
                >
                  {isLoading ? "Registering..." : "Register"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
