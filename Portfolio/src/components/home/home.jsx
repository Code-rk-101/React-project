import "./home.css";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div id="home">
      <div className="leftHome">
        <div className="homeDetail">
            <div className="line1">I'M</div>
            <div className="line2">RITIK KUMAR</div>
            <div className="line3">
            <Typewriter
                options={{
                strings: ["WEB DEVELOPER", "SOFTWARE DEVELOPER", "EDITOR"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 40,
                cursor: ''
                }}
            />
            </div>
            <button>HIRE ME</button>
        </div>
      </div>

      <div className="rightHome">
        <img
          src="/images/me.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};
export default Home;
