import { Arrow } from "./Arrow";
import SelectHtml from "./SelectHtml";
import { TypeData } from "../types";
import { useState } from "react";

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
      <SelectHtml data={data} id={id} setActive={setActive} active={active} />
      <Arrow active={active} />
    </div>
  );
};

export default Select;
