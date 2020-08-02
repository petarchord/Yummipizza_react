import React from "react";
import { Header, Home } from "./components";
import { GlobalProvider } from "./context/GlobalState";

import styles from "./App.module.css";

function App() {
  return (
    <GlobalProvider>
      <div className={styles.container}>
        <Header />
        <Home />
      </div>
    </GlobalProvider>
  );
}

export default App;
