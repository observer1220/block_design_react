import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./BuyTickets.css";
import lightingSVG from "../../assets/img/lighting.svg";

interface BuyTicketsProps {
  mode: "default" | "elastic";
}

/** 按鈕動態 */
const BuyTickets = ({ mode }: BuyTicketsProps) => {
  const [className, setClassName] = useState(`-button-${mode}`);
  const layoutRef = useRef<HTMLDivElement>(null);

  const handleToggleClass = () => {
    setClassName(`-button-${mode}`);
  };

  useEffect(() => {
    handleToggleClass();
  }, []);

  return (
    <div ref={layoutRef} className={className}>
      <Link
        to="https://bit.ly/webdesignref"
        rel="noopener noreferer nofollow"
        className="m-button"
      >
        <div className="m-button__main">
          <svg
            width="138"
            height="138"
            viewBox="0 0 138 138"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M69 0L78.1965 10.9358L90.3222 3.3771L95.6892 16.6195L109.557 13.1778L110.569 27.4306L124.822 28.4428L121.38 42.3108L134.623 47.6778L127.064 59.8035L138 69L127.064 78.1965L134.623 90.3222L121.38 95.6892L124.822 109.557L110.569 110.569L109.557 124.822L95.6892 121.38L90.3222 134.623L78.1965 127.064L69 138L59.8035 127.064L47.6778 134.623L42.3108 121.38L28.4428 124.822L27.4306 110.569L13.1778 109.557L16.6195 95.6892L3.3771 90.3222L10.9358 78.1965L0 69L10.9358 59.8035L3.3771 47.6778L16.6195 42.3108L13.1778 28.4428L27.4306 27.4306L28.4428 13.1778L42.3108 16.6195L47.6778 3.3771L59.8035 10.9358L69 0Z" />
          </svg>
          <div className="m-button__content">
            <p>購 &nbsp;票</p>
            <img src={lightingSVG} alt="lighting" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BuyTickets;
