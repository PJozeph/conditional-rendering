import { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h1>{isLoggedIn ? "Welcome" : "Please log in"}</h1>
    </>
  );
}

export default App;
