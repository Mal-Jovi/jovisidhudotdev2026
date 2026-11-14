const Tooltip = ({ children, text, showArrow = false }) => {
  return (
    <div className="tooltip-wrapper">
      <span className="tooltip-text">
        {text}
        {showArrow && (
          <svg
            className="tooltip-arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        )}
      </span>
      {children}
    </div>
  );
};

export default Tooltip;
