import { useEditFormStore } from "../features/forms/editUser/store";

type Props = {
  text: string;
  width: string;
};

const MainButton = ({ text, width }: Props) => {
  const { isInputChanged } = useEditFormStore((state) => state);
  return (
    <button
      disabled={!isInputChanged}
      className={`${width} h-[48px] border border-border-foreground transition-opacity opacity-1 ${
        !isInputChanged ? "opacity-50" : ""
      }`}
    >
      {text}
    </button>
  );
};

export default MainButton;
