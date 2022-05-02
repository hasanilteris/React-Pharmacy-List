import React from "react";
import Header from "./components/Header";
import 'material-icons/iconfont/material-icons.css';
import Main from "./components/Main";
import Search from "./components/Search";
import Footer from "./components/Footer";


function App() {
  return (
  <div>
    <Header />
    <Search />
    <Main />
    <Footer />
  </div>
  );
}

export default App;
