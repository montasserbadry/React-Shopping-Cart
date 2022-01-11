import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { word } from "./static";

function App() {
  return (
    <div  className="layout">
 <Header />
<main>{word.contenTtitle} </main>
<Footer />
 </div>
  );
}

export default App;
