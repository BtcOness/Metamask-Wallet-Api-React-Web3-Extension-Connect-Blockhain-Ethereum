"use client";

interface InputProps {
  _text: string;
  _placeholder: string;
  _type: string;
}

const NamePlate1 = (props: InputProps) => {
  return (
    <input
      placeholder={props._placeholder || "Placeholder"}
      type={props._type || "text"}
      value={props._text || "text"}
      className="input max-w-full input-warning"
    />
  );
};

export default NamePlate1;
