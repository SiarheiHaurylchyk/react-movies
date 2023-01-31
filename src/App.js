import React from "react";
import "./component/style/App.css"
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";

function App() {



    return(
        <div className={"AppWrapper"}>

            <Header />
            <Main />
            <Footer/>

        </div>
  );
}

export default App;
