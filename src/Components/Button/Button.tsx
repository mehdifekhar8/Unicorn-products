import React from "react";
import "./Button.scss";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, icon, className }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {children}
      {icon && <span className="button-icon">{icon}</span>}

    </button>
  );
};

export default Button;
