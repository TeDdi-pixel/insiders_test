type TypeData = {
  value: string;
  name: string;
};
type Props = {
  id: string;
  data: TypeData[];
  label: string;
};

const Select = ({ id, data, label }: Props) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={id} className="text-accent-foreground">
        {label}
      </label>
      <select
        id={id}
        className="max-w-[500px] h-[48px] border py-[14px] pl-6 pr-3 text-accent-foreground rounded-none focus:border-blue-500  focus:rounded-none"
      >
        {data.map((option) => (
          <option
            key={option.name}
            value={option.value}
            className="text-accent-foreground"
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
