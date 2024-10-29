import { useState } from "react";

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

const Select = ({ id, data, label, className }: Props) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col gap-1 w-full relative max-w-[500px] ${className}`}
    >
      <label htmlFor={id} className="text-accent-foreground">
        {label}
      </label>
      <select
        onClick={() => setActive(!active)}
        id={id}
        className="max-h-[48px] w-full border py-[14px] pl-6 pr-8 text-accent-foreground rounded-none appearance-none focus:border-blue-500"
      >
        {data.map((option) => (
          <option
            onClick={() => setActive(!active)}
            key={option.name}
            value={option.value}
            className="text-accent-foreground"
          >
            {option.name}
          </option>
        ))}
      </select>
      <img
        src="../../../public/icons/arrows.svg"
        alt="arrow-down"
        className={`absolute right-5 top-[48px] transform -translate-y-1/2 pointer-events-none transition-transform ${
          active ? "rotate-180" : ""
        }`}
      />
    </div>
  );
};

export default Select;
