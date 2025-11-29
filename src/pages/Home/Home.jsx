import React from "react";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import heroBanner from "../../assets/hero_banner.jpg";
import heroTitle from "../../assets/hero_title.png";
import playIcon from "../../assets/play_icon.png";
import infoIcon from "../../assets/info_icon.png";
import TitleCard from "../../components/TitleCards/TitleCard";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="hero">
        <img src={heroBanner} alt="" className="bannerImg" />
        <div className="heroCaption">
          <img src={heroTitle} alt="" className="captionImg" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern istanbul embark on a quest to save the city from an
            immortal enemy
          </p>
          <div className="heroBtns">
            <button className="btn">
              <img src={playIcon} alt="" />
              Play
            </button>
            <button className="btn darkBtn">
              <img src={infoIcon} alt="" />
              More Info
            </button>
          </div>
          <TitleCard title={"Popular On Netflix"} category={"popular"}/>
          </div>
      </div>
      <div className="moreCards">
        <TitleCard title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCard title={"Only On Netflix"} category={"now_playing"}/>
        <TitleCard title={"Upcoming"} category={"upcoming"}/>
        <TitleCard title={"Top Pics For You"} category={"top_rated"}/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
