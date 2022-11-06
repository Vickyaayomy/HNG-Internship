import React from "react";
// import I4G from "./components/I4G.png";
import "./contact.css";

const contact = () => {
  return (
    <div className="container">
      <div className="content">
        <header>
          <h1>Contact me</h1>
          <p className="ask-about">
            Hi there, contact me to ask about anything you have in mind.
          </p>
        </header>

        <form action="#">
          <main>
            <section>
              <div className="first-last">
                <div>
                  <label for="firstname">First name</label>
                  <br />
                  <input
                    class="names"
                    type="text"
                    name="firstname"
                    id="first_name"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label for="lastname">Last name</label>
                  <br />
                  <input
                    class="names"
                    type="text"
                    name="lastname"
                    id="last_name"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <label for="email">E-mail</label>
              <br />
              <input
                class="names"
                type="email"
                name="email"
                id="email"
                placeholder="yourname@email.com"
                required
              />

              <label for="msg">Message</label>
              <br />
              <textarea
                id="message"
                placeholder="Send me a message and I'll reply you as soon as possible.."
              ></textarea>

            <div className="check-info">
              <input type="checkbox" />
              <label>
                You agree to providing your data to Opeyemi who may contact you.
              </label>
              </div>
            </section>
            <section>
              <button id="btn__submit" type="submit">
                Send Message
              </button>
            </section>
          </main>
        </form>

        <footer>
          <div className="bottom">
            <p className="zuri-intern">
              <span className="dot">Zuri</span>Internship
            </p>
            <p className="hng-intern">HNG Internship 9 Frontend Task</p>
            <p className="ingressive">
              {/* <img alt="I4G-image" width={80} src={I4G} /> */}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default contact;
