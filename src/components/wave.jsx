import "../css/wave.css";

const wave = () => {
  return (
    <div className="wave-container">
      <svg className="wave" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path
            id="wave-curve"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18"
          />
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave-parallax">
          <use href="#gentle-wave" x="48" y="0" />
          <use href="#wave-curve" id="wave-curve-shifted" x="48" y="0" />
          <text className="wave-text" dy="-2">
            <textPath
              href="#wave-curve-shifted"
              startOffset="50%"
              textAnchor="middle"
            >
              jovi sidhu • software developer • portfolio • 2026
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};

export default wave;
