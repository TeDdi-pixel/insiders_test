import { ChangeEvent } from "react";
import { useEditFormStore } from "../store";

export const FullNameInput = () => {
  const { fullName } = useEditFormStore((state) => state);

  const { setIsInputChanged, setFullName } = useEditFormStore((state) => state);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
    if (e.target.value) {
      setIsInputChanged(true);
    } else setIsInputChanged(false);
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor="full-name" className="text-accent-foreground">
        Full name
      </label>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        id="full-name"
        value={fullName}
        className="max-w-[500px] w-full h-[48px] border py-[14px] pl-6 pr-3 text-accent-foreground rounded-none focus:border-blue-500 focus:rounded-none placeholder:text-accent-foreground"
        placeholder={"Oleg Schevchenko"}
      />
    </div>
  );
};
