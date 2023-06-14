import React from "react";
import "./JoinNewsLetter.scss";
import InputWithIcon from "../Input/Input";
import Button from "../Button/Button";
import SvgSend from "../../UIAppBundle/icons/Send";

const JoinNewsletter: React.FC = () => {
  return (
    <div className="join-newsletter-container">
      <h2 className="join-newsletter-title">Join Our News Letters</h2>
      <p className="join-newsletter-description">
        Leverage agile frameworks to provide a robust synopsis for high level
        overviews. Iterative approaches to corporate strategy foster
      </p>
      <div className="join-newsletter-input">
        <InputWithIcon
          className={"news-input"}
          type="email"
          placeholder="Enter your email"
        />
        <Button className="join-newsletter-button" icon={<SvgSend></SvgSend>}>
          {" "}
        </Button>
      </div>
    </div>
  );
};

export default JoinNewsletter;
