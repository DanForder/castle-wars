import "./DisplayName.scss";
import classnames from "classnames";

type DisplayNameProps = {
  name: string;
  isHighlighted: boolean;
};

const DisplayName: React.FC<DisplayNameProps> = ({ name, isHighlighted }) => {
  const className = classnames("display-name", {
    "display-name--highlighted": isHighlighted,
  });

  return <div className={className}>{name}</div>;
};

export default DisplayName;
