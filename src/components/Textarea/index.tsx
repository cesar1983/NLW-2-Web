import React, { TextareaHTMLAttributes } from "react";

import "./styles.css";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const Input: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor="subject">{label}</label>
      <textarea id={name} {...rest}></textarea>
    </div>
  );
};

export default Input;
