import "../css/projects.css";
import noryo1 from "../assets/noryo1.png";

const projects = () => {
  return (
    <div className="projects-container">
      <br />
      <br />
      <div className="projects-text">
        <h1 className="projects-title">Noryo</h1>
        <h3>
          A clean, fast, intuitive, and data accessible application for hospital
          clinics to use for research and patient management.
        </h3>
      </div>
      <div className="project-images">
        <img className="screen-grab-16-9" src={noryo1} />
      </div>
    </div>
  );
};

export default projects;
