import "./Lines.css";

const LeftLine = () => {
  return (
    <div className="page-layout__line -left">
      <svg viewBox="0 0 10 363" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line
          data-stroke
          data-stroke-direction="-1"
          x1="5.25"
          x2="5.25"
          y2="335"
          stroke="#40587C"
          strokeWidth="0.5"
        />
        <circle cx="5" cy="358" r="5" fill="#40587C" />
      </svg>
    </div>
  );
};

const RightLine = () => {
  return (
    <div className="page-layout__line -right">
      <svg
        width="1"
        height="503"
        viewBox="0 0 1 503"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          data-stroke
          x1="0.25"
          y1="1.09278e-08"
          x2="0.249996"
          y2="100"
          stroke="#40587C"
          strokeWidth="0.5"
        />
        <line
          data-stroke
          x1="0.25"
          y1="432"
          x2="0.250003"
          y2="503"
          stroke="#40587C"
          strokeWidth="0.5"
        />
      </svg>
      <div className="page-layout__line-text">
        <p data-marquee="It was also called spiritu">
          It was also called spiritual
        </p>
      </div>
    </div>
  );
};

export { LeftLine, RightLine };
