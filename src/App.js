import Login from "./components/Login/Login";
import MainScreen from "./components/MainScreen/MainScreen";
import { Route, Routes } from 'react-router-dom';

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/main" element={<MainScreen/>} />
      </Routes>
    </div>
  );
}

export default App;