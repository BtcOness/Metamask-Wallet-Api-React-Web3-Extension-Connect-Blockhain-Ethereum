"use client";
interface HeadingProp {
  text: String;
  size: String;
}

const Heading = (props: HeadingProp) => {
  return <h1 className={`${props.size}`}>{props.text}</h1>;
};

export default Heading;
