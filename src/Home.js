import React from "react";
import "./App.css";
import { useNavigate, Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import MyPhoto from "./KL.jpg";

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
          />{" "}
          <SocialIcon
            className="linkedin"
            url="https://github.com/laik2biz"
            network="github"
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
            {"<"}
            <span className="hometab">Home</span>
            {"/>"}
          </div>
          <div
            className="button1"
            onClick={() => {
              navigate("/Skills");
            }}
          >
            {"<"}
            <span className="skillstab">Skills</span>
            {"/>"}
          </div>
          <div
            className="button1"
            onClick={() => {
              navigate("/Projects");
            }}
          >
            <span className="collabtab">
              {"<"}Collab{"/>"}
            </span>
          </div>
        </div>
      </center>
      <br />
      <div className="me-section">
        <center>
          <h1 className="intro">
            print("Greetings! Nice to meet you!")
            <div className="cursor"></div>
          </h1>
          <img
            className="profilepic"
            id="box"
            height="300"
            alt="myphoto"
            src={MyPhoto}
          />
        </center>
      </div>
      <p className="bio">
        <center>
          Hi, my name is Kiong Lao. My love and passion for technology started
          when I first took a Website Development class back in highschool.
          Being able to bring ideas to life on a website sparked my creativity
          and from there on, I've always enjoyed building out websites and web
          applications. Throughout the years being in tech, I found myself to be
          very resourceful and a critical thinker when it came to solving
          problems. Any challenges that I have faced, I had always found a way
          to figure it out. One of my biggest achievements has been getting the
          opportunity to work on a team to build a cubicle reservation web
          application for <span className="getext">GE Healthcare's RFP</span>. I
          very much enjoy Frontend Development but am continuing to learn other
          skills outside of development. I plan on forever being a lifelong
          learner in not just the tech world, but also in life. Please send me a
          message through the{" "}
          <Link to="/Projects">
            <u className="emailtext">email</u>
          </Link>{" "}
          form if you have any questions. You can also connect with me on
          Linkedin or view my Github profile by clicking on the icon at the top
          left corner of this page. Thanks for stopping by!
        </center>
      </p>
    </div>
  );
}

export default Home;
