import { useState } from "react";
import { Controller } from "react-hook-form";

type TypeData = {
  value: string;
  name: string;
};

type Props = {
  id: string;
  data: TypeData[];
  label: string;
  className?: string;
};

const Select = ({ id, data, label, className, control }: Props) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col gap-1 w-full relative max-w-[500px] ${className}`}
    >
      <label htmlFor={id} className="text-accent-foreground">
        {label}
      </label>
      <Controller
        name={id}
        control={control}
        defaultValue=""
        render={({ field: { onChange, value, ref } }) => (
          <select
            onClick={() => setActive(!active)}
            id={id}
            value={value}
            ref={ref}
            onChange={(e) => onChange(e.target.value)}
            className="max-w-[500px] w-full h-[48px] border py-[14px] pl-6 pr-3 text-accent-foreground rounded-none focus:border-blue-500 focus:rounded-none"
          >
            <option value="" disabled>
              Select {id}
            </option>
            {data.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
};

export default Select;
