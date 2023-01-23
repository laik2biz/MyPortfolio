import React from "react";
import Email from "./Email";
import "./App.css";
import { useNavigate } from "react-router-dom";

function Projects() {
  let navigate = useNavigate();
  return (
    <div>
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
      <center>
        <div className="body-1">
          <br />
          <center>
            <h1 className="work-title">Connect With Me</h1>
          </center>
          <center>
            <Email />
          </center>
          <div className="help">Let's chat!</div>
        </div>
      </center>
    </div>
  );
}

export default Projects;
