import React from "react";
import { useNavigate  } from "react-router-dom";
import styles from "./MainScreen.module.css";

function MainScreen() {
  const navigate  = useNavigate();

  const handleLogoffButton = () => {
    navigate("/");
  }

  const handleShuffleButtonClick = () => {
    
  };

  return (
    <div className={styles.container}>
      <button className={styles.logoff} onClick={handleLogoffButton}>
        Logoff
      </button>
      <h1 className={styles.title}>Amigo Secreto</h1>
      <button className={styles.button} onClick={handleShuffleButtonClick}>
        Clique aqui para sortear seu amigo secreto!
      </button>
    </div>
  );

}

export default MainScreen;
