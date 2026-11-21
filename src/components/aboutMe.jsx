import "../css/aboutMe.css";
import telusLogo from "../assets/telusLogo.svg";
import reactLogo from "../assets/reactLogo.svg";
import nextjsLogo from "../assets/nextjsLogo.svg";

const aboutMe = () => {
  return (
    <div className="about-me">
      <h1>
        I am a front-end developer based out of Vancouver that builds ui/ux with a
        variety of modern tools, and most commonly with{"\u00A0\u00A0"}
        <span className="logoWrapper">
          <img src={reactLogo} alt="Telus Logo" className="reactLogo" />
        </span>
        {"\u00A0"}and{"\u00A0"}
        <span className="logoWrapper">
          <img src={nextjsLogo} alt="Telus Logo" className="nextjsLogo" />
        </span>
        <br />
        <br />
        5+ years of experience at{"\u00A0\u00A0"}
        <span className="logoWrapper">
          <img src={telusLogo} alt="Telus Logo" className="telusLogo" />
        </span>
        {"\u00A0\u00A0"}
        crafting ui/ux from scratch, working fast alone and with teams, and
        enjoy continuously building on my skills.
      </h1>
    </div>
  );
};

export default aboutMe;
