import React from "react";
import TechStack from "./techstack.PNG";
import { useNavigate } from "react-router-dom";

function Skills() {
  let navigate = useNavigate();

  return (
    <div className="Skills">
      <br />
      <center>
        <div className="title">
          <h1 className="skills-title">
            Bringing The <div className="frontend">Frontend</div> To Your{" "}
            <div className="backend">Backend</div>
          </h1>
        </div>
        <br />
        <center>
          <div className="tabs">
            <div
              className="button1"
              onClick={() => {
                navigate("/Home");
              }}
            >
              <span className="hometab">
                {"<"}Home{"/>"}
              </span>
            </div>
            <div
              className="button1"
              onClick={() => {
                navigate("/Skills");
              }}
            >
              <span className="skillstab">
                {"<"}Skills{"/>"}
              </span>
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
        <div>
          <h2 className="techstack">Current Tech Stack</h2>
        </div>
        <br />
        <div>
          <img src={TechStack} alt="stack" className="techimg" />
        </div>
        <br />
        <br />
        <hr class="rounded" />
        <br />
        <br />
        <h2 className="techstack">Personal Projects To Be Added...</h2>
        <br />
        <div class="wrap-circles">
          <div class="circle per-0">
            <div class="inner">0%</div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Skills;
