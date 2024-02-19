import "./style.scss";
interface LoadingProps {
  text: string;
  className?: string;
}

const Loading = ({ text, className }: LoadingProps) => {
  return <div className={`loading ${className}`}>{text}</div>;
};

export default Loading;
