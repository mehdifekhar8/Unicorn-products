import React, { InputHTMLAttributes, ReactElement } from "react";
import classNames from "classnames";
import "./Input.scss";

interface InputWithIconProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactElement;
  placeholder?: string;
  className?: string;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({
  icon,
  className,
  placeholder,
  ...rest
}) => {
  const inputClasses = classNames("input-with-icon", className);

  return (
    <div className={inputClasses}>
      <input type="text" placeholder={placeholder} {...rest} />
      {icon && icon}
    </div>
  );
};

export default InputWithIcon;
