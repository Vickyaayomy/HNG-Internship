import profilepic from "./components/profilepic.jpg";
import I4G from "./components/I4G.png";
import "./App.css";


function Home() {
    return (

        <div className="Home">
          <div className="container">
            <header>
              <img id="profile_img" alt="profile-pics" src={profilepic} />
              <h5>Opeyemi Ogunfeyitimi</h5>
            </header>
  
            <main>
              {/* <h3 id='slack'>Opeyemi Ogunfeyitimi</h3>  */}
              <button>
                <a href="https://twitter.com/OgunfeyitimiOp1" id="twitter">
                  OgunfeyitimiOp1
                </a>
              </button>
              <button>
                <a href="https://training.zuri.team/" id="btn__zuri">
                  Zuri Team
                </a>
              </button>
              <button>
                <a href="http://books.zuri.team" id="books">
                  Zuri books
                </a>
              </button>
              <button>
                <a href="https://books.zuri.team" id="book__python">
                  Python books
                </a>
              </button>
              <button>
                <a href="https://background.zuri.team" id="pitch">
                  Background checks for coders
                </a>
              </button>
              <button>
                <a href="https://books.zuri.team/design-rules" id="book__design">
                  Design books
                </a>
              </button>
              <button>
                <a href="/contact" id="contact">
                  Contact me
                </a>
              </button>
              <div className="icons">
                <a href="https://app.slack.com/client/T042F7V19Q8/C041JU70S5U">
                  <i class="fa-brands fa-slack"></i>
                </a>
                <a href="https://github.com/Vickyaayomy/">
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </main>
  
            <footer>
              <div className="bottom">
                <p className="zuri-intern">
                  <span className="dot">Zuri</span>Internship
                </p>
                <p className="hng-intern">HNG Internship 9 Frontend Task</p>
                <p className="ingressive">
                  <img alt="I4G" width={80} src={I4G} />
                </p>
              </div>
            </footer>
          </div>
        </div>
    );
  }
  
  export default Home;
  