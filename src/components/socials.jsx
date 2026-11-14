import "../App.css";
import linkedinLogo from "../assets/linkedinLogo.svg";
import githubLogo from "../assets/githubLogo.svg";

const openLink = (url) => {
  window.open(url, "_blank", "noreferrer");
}

const Socials = () => {
  return (
    <div className="socials">
      <img src={linkedinLogo} alt="LinkedIn Logo" className="favicon"                   onClick={() => openLink("https://www.linkedin.com/in/jovi-sidhu/")} />
      <img src={githubLogo} alt="GitHub Logo" className="favicon"                   onClick={() => openLink("https://github.com/Mal-Jovi")} />
    </div>
  );
};

export default Socials;
