import React from "react";
import "./TextField.scss";

type TextFieldProps = {
  id: string;
  label: string;
  defaultValue: string;
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  defaultValue,
  onInput,
}) => {
  return (
    <div className="text-field">
      <label htmlFor={id}>{label}</label>
      <input
        className="text-field__input"
        type="text"
        id={id}
        defaultValue={defaultValue}
        onInput={onInput}
      />
    </div>
  );
};

export default TextField;
