import React from "react";

import Header from "./components/Header.js";
import Products from "./components/Products.js";
import AddForm from "./components/AddForm.js";

const App = () => {
  return (
    <div id="app">
      <Header />

      <main>
        <Products />
        <AddForm />
      </main>
    </div>
  );
};

export default App;
