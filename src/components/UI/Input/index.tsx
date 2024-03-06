import { ComponentProps, forwardRef } from "react";
import "./style.scss";
interface InputProps {
  className: string;
  placeholder: ComponentProps<"input">["placeholder"];
  name: ComponentProps<"input">["name"];
  type?: ComponentProps<"input">["type"];
}
const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return <input ref={ref} {...props}></input>;
});

export default Input;
