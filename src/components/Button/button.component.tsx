import { Component, JSX } from "solid-js";

interface ButtonProps {
  onClick?: () => void;
  text?: string;
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  cancel?: boolean;
  danger?: boolean;
  sucess?: boolean;
  children?: JSX.Element | JSX.Element[]
}

const Button: Component<ButtonProps> = (props: ButtonProps) => {
  return <button>
    {props.text}
  </button>;
};

export default Button;