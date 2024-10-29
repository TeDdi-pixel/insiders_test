import { useUserFormStore } from "../store";

export const FormButtons = () => {
  const { setIsOpened } = useUserFormStore((state) => state);

  return (
    <div className="flex gap-5 w-full justify-end">
      <button
        className="w-[100px] h-[48px] border border-border-foreground transition-opacity opacity-1"
        onClick={() => setIsOpened(false)}
      >
        Cancel
      </button>
      <button
        type="submit"
        className="w-[150px] h-[48px] border border-border-foreground transition-opacity opacity-1"
      >
        Add
      </button>
    </div>
  );
};
