import { TypeData } from "../types";

type Props = {
  data: TypeData[];
  id: string;
  setActive: (status: boolean) => void;
  active: boolean;
};

const SelectHtml = ({ data, id, setActive, active }: Props) => {
  return (
    <select
      onClick={() => setActive(!active)}
      id={id}
      className="max-h-[48px] w-full border py-[14px] pl-6 pr-8 text-accent-foreground rounded-none appearance-none focus:border-blue-500"
    >
      {data.map((option: TypeData) => (
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
  );
};

export default SelectHtml;
