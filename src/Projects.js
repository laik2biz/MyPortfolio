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
      <center>
        <div className="body-1">
          <br />
          <center>
            <h1 className="work-title">Happy To Work With You!</h1>
          </center>
          <center>
            <Email />
          </center>
          <div className="help">
            If you're in need of any assistance with your coding projects, I'd
            be happy to help!
          </div>
        </div>
      </center>
    </div>
  );
}

export default Projects;
