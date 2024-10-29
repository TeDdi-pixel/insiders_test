import { useEditFormStore } from "../store";
import { Controller } from "react-hook-form";

export const FullNameInput = ({ control }) => {
  const { setIsInputChanged } = useEditFormStore((state) => state);

  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor="full-name" className="text-accent-foreground">
        Full name
      </label>
      <Controller
        name="fullName"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value, ref } }) => (
          <input
            type="text"
            id="full-name"
            value={value}
            ref={ref}
            onChange={(e) => {
              onChange(e);
              setIsInputChanged(e.target.value.length > 0);
            }}
            className="max-w-[500px] w-full h-[48px] border py-[14px] pl-6 pr-3 text-accent-foreground rounded-none focus:border-blue-500 focus:rounded-none placeholder:text-accent-foreground"
            placeholder="Oleg Schevchenko"
          />
        )}
      />
    </div>
  );
};
