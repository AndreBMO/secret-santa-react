import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainScreen.module.css";

function MainScreen() {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(true);
  const [secretSanta, setSecretSanta] = useState(null);

  const handleLogoffButton = () => {
    navigate("/");
  };

  const handleShuffleButtonClick = () => {
    const participants = ["Person 1", "Person 2", "Person 3", "Person 4"]; // Replace with your participant list
    const randomIndex = Math.floor(Math.random() * participants.length);
    const selectedSanta = participants[randomIndex];
    setSecretSanta(selectedSanta);
    setShowButton(false);
  };

  return (
    <div className={styles.container}>
      <button className={styles.logoff} onClick={handleLogoffButton}>
        Logoff
      </button>
      <h1 className={styles.title}>Amigo Secreto</h1>
      {showButton ? (
        <button
          className={styles.button}
          onClick={handleShuffleButtonClick}
        >
          Clique aqui para sortear seu amigo secreto!
        </button>
      ) : (
        <p className={styles.message}>
          Seu Amigo Secreto é: {secretSanta}
        </p>
      )}
    </div>
  );
}

export default MainScreen;
