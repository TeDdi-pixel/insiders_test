import { Link } from "react-router-dom";
import { useHeaderStore } from "../store";

export const HeaderButton = ({
  text,
  path,
}: {
  text: string;
  path: string;
}) => {
  const { activeButton, setActiveButton } = useHeaderStore((state) => state);

  return (
    <Link
      to={path}
      onClick={() => setActiveButton(text)}
      className={`w-[200px] py-3.5 px-[67px] border border-border-foreground font-[300] font-default transition-colors ${
        text === activeButton ? "bg-background" : ""
      }`}
    >
      {text}
    </Link>
  );
};
