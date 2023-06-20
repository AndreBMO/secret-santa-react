import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  const navigate  = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    navigate("/main");
  };

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h2 className={styles.loginTitle}>AMIGO SECRETO 2023</h2>
        <form className={styles.form}>
          <label className={styles.label}>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label className={styles.label}>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <button className={styles.button} type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
