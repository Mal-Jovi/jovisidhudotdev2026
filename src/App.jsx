import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./css/base.css";
import "./css/navigation.css";
import joviLogo from "./assets/joviLogo3.png";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Wave from "./components/wave";
import Tooltip from "./components/tooltip";
import Socials from "./components/socials";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [loadPage, setLoadPage] = useState(false);
  const [selectedPage, setSelectedPage] = useState(location.pathname);

  useEffect(() => {
    const pageLoadTimer = setTimeout(() => {
      setLoadPage(true);
    }, 800);

    return () => clearTimeout(pageLoadTimer);
  }, []);

  const changePage = (path) => {
    setSelectedPage(path);
    navigate(path);
  };

  return (
    <>
      <div className="pageContents">
        <header className="side">
          <img src={joviLogo} className="logo" alt="" />
          {loadPage && (
            <nav aria-label="navigation" className="navigation">
              <button
                type="button"
                className={`button ${selectedPage === "/projects" ? "active" : ""}`}
                onClick={() => changePage("/projects")}
              >
                projects
              </button>
              <Tooltip text="pdf on gdrive link" showArrow>
                <button
                  type="button"
                  className="button"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1KJsmlP4RcrBLJ347IJ6BjA8x1PbVONXF/view?usp=share_link",
                      "_blank",
                      "noreferrer",
                    )
                  }
                >
                  resume
                </button>
              </Tooltip>
              <button
                type="button"
                className={`button ${selectedPage === "/aboutMe" || selectedPage === "/" ? "active" : ""}`}
                onClick={() => changePage("/aboutMe")}
              >
                about me
              </button>
            </nav>
          )}
        </header>
        {loadPage && (
          <main>
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/aboutMe" element={<AboutMe />} />
            </Routes>
            <Socials />
          </main>
        )}
      </div>
      {loadPage && <Wave />}
    </>
  );
}

export default App;
