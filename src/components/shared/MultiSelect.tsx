import { useState } from "react";
import { Arrow } from "./Select/ui/Arrow";
import { TypeData } from "./Select/types";

const MultiSelect = ({
  selectedDepartments,
  setSelectedDepartments,
  data,
  disabled,
  closed = false,
  placeholder,
}: {
  disabled?: boolean;
  data: TypeData[];
  closed?: boolean;
  placeholder: string;
  selectedDepartments: string[];
  setSelectedDepartments: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [active, setActive] = useState<boolean>(false);

  const handleSelectChange = (value: string) => {
    setSelectedDepartments((prevSelected: string[]) =>
      prevSelected.includes(value)
        ? prevSelected.filter((dep) => dep !== value)
        : [...prevSelected, value]
    );
  };

  return (
    <button
      disabled={disabled}
      className={`flex flex-col gap-1 w-full relative max-w-[220px] ${
        disabled ? "opacity-50" : ""
      }`}
    >
      <div
        onClick={() => setActive(!active)}
        className={`relative w-full h-[48px] border-x border-t border-border flex items-center cursor-pointer border-b pl-6 ${
          !active ? "border-b" : ""
        }`}
      >
        Select {placeholder}
        <div className="absolute right-0 -top-[22px] z-10 w-[16px] h-[16px]">
          <Arrow active={active} />
        </div>
      </div>

      {!closed && (
        <div
          className={`absolute top-[48px] w-full px-[25px] pt-2 pb-[25px] border-x border-b border-border flex flex-col gap-3 bg-white ${
            active ? "block" : "hidden"
          }`}
        >
          {data.map((item) => (
            <div
              key={item.value}
              className="flex gap-3 flex-nowrap items-center"
            >
              <input
                type="checkbox"
                id={item.value}
                className="custom-checkbox flex-shrink-0"
                checked={selectedDepartments.includes(item.value)}
                onChange={() => handleSelectChange(item.value)}
              />
              <label
                htmlFor={item.value}
                className="text-left font-default text-accent-foreground"
              >
                {item.name}
              </label>
            </div>
          ))}
        </div>
      )}
    </button>
  );
};

export default MultiSelect;
