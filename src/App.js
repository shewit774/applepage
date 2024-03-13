import React from "react";
import "./CommonResource/css/stylese.css";
import "./CommonResource/css/bootstrape.css";

import Header from "./Components/Header/Header";
import Alert from "./Components/Alert/Alert";
import First from "./Components/FirstSection/First";
import Second from "./Components/SecondSection/Second";
import Third from "./Components/ThirdSection/Third";
import Fourth from "./Components/FourthSection/Fourth";
import Fifth from "./Components/FifthSection/Fifth";
import Sixth from "./Components/SixthSection/Sixth";
import Footer from "./Components/Footer/Footer";
import YoutubeVideos from "./Components/YouTube/YoutubeVideos";
import RandomUser from "./Components/Random/Random";

function App() {
  return (
    <>
      <Header />
      <Alert />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      {/* <RandomUser /> */}
      <YoutubeVideos />
      <Footer />
    </>
  );
}

export default App;
