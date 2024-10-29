import { useEditFormStore } from "../features/forms/editUser/store";

type Props = {
  text: string;
  width: string;
  undo?: boolean;
};

const MainButton = ({ text, width, undo }: Props) => {
  const { isInputChanged, setIsInputChanged, setFullName } = useEditFormStore(
    (state) => state
  );
  const handleUndo = () => {
    if (undo) {
      setIsInputChanged(false);
      setFullName("");
    }
  };

  return (
    <button
      onClick={handleUndo}
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
