import { ComponentProps } from "react";
interface InputProps {
  placeholder: ComponentProps<"input">["placeholder"];
  name?: ComponentProps<"input">["name"];
  type?: ComponentProps<"input">["type"];
}
const Input = ({ ...props }: InputProps) => {
  return <input {...props}></input>;
};

export default Input;
