import ContentLoader from "react-content-loader";
import "./style.scss";
interface SkeletonProps {
  className: string;
}
const Skeleton = ({ className, ...props }: SkeletonProps) => (
  <ContentLoader
    speed={2}
    width={825}
    height={140}
    viewBox="0 0 825 140"
    backgroundColor="#d3cfcf"
    foregroundColor="#ecebeb"
    className={className}
    {...props}
  >
    <rect x="48" y="10" rx="3" ry="3" width="100" height="12" />
    <rect x="48" y="25" rx="3" ry="3" width="80" height="8" />
    <rect x="5" y="45" rx="3" ry="3" width="640" height="40" />
    <rect x="760" y="50" rx="3" ry="3" width="52" height="26" />
    <rect x="5" y="90" rx="3" ry="3" width="740" height="30" />
    <rect x="700" y="127" rx="3" ry="3" width="178" height="30" />
    <circle cx="20" cy="20" r="20" />
  </ContentLoader>
);

export default Skeleton;
