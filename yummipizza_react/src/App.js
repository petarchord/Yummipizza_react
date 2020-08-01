import React from "react";
import { Header, Home } from "./components";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
