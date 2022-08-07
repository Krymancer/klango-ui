import { Component, JSX } from "solid-js";

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}

const Container : Component<ContainerProps> = (props: ContainerProps) => {
  return <div class="m-auto">
    {props.children}
  </div>;
};

export default Container;