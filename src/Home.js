import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Home() {
  let navigate = useNavigate();

  return (
    <div className="Home">
      <h1 className="initials">
        <em>
          KL'{" "}
          <SocialIcon
            className="linkedin"
            url="https://www.linkedin.com/in/kiong-lao-24826a252/"
            network="linkedin"
          />
        </em>
        <center>
          <div className="title">
            <u>Welcome</u>
            <div>To My</div>
            <div className="portfolio">Portfolio</div>
          </div>
        </center>
      </h1>
      <br />
      <center>
        <div className="tabs">
          <div
            className="button1"
            onClick={() => {
              navigate("/Home");
            }}
          >
            <strong>
              {"<"}Home{"/>"}
            </strong>
          </div>
          <div
            className="button1"
            onClick={() => {
              navigate("/Skills");
            }}
          >
            <strong>
              {"<"}Skills{"/>"}
            </strong>
          </div>
          <div
            className="button1"
            onClick={() => {
              navigate("/Projects");
            }}
          >
            <strong>
              {"<"}Collab{"/>"}
            </strong>
          </div>
        </div>
      </center>
      <br />
      <div className="me-section">
        <center>
          <h1 className="intro">
            print("Hi, I'm Kiong Lao!")
            <div className="cursor"></div>
          </h1>
          <img
            className="myavatar"
            height="300"
            alt="myphoto"
            src="https://www.meme-arsenal.com/memes/9515c7785615c87d7baad5cfff7938ac.jpg"
          />
        </center>
        {/* <p className="bio">
          Hi, my name is Kiong Lao. Technology keeps me interested and coding
          keeps me sharp. I love Frontend Development!
        </p> */}
      </div>
      <center>
        <h1 className="heart">
          &#10084; <div className="front-title">Frontend Development</div>
        </h1>
      </center>
    </div>
  );
}

export default Home;
