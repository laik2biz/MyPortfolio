import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./App.css";

function Email() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Your email has been sent. Thank you!");

    emailjs
      .sendForm(
        "service_0awx51d",
        "template_ap89nlm",
        form.current,
        "u3HmkGvxVLA5eEWaN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <br />
        <center>
          <ul>
            <input
              className="input"
              type="text"
              name="user_name"
              placeholder="Enter your fullname"
            />
          </ul>
          <br />
          <ul>
            <input
              className="input"
              type="email"
              name="user_email"
              placeholder="Enter your email"
            />
          </ul>
          <br />
          <br />
          <ul>
            <textarea
              name="message"
              placeholder="Shoot me a message!"
              className="textbox"
            />
          </ul>
          <br />
          <ul>
            <input className="sendbutton" type="submit" value="<Send/>" />
          </ul>
        </center>
      </form>
    </div>
  );
}

export default Email;
