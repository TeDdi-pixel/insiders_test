type Props = {
  setSelectedDepartments: (departments: string[]) => void;
};

const TrashButton = ({ setSelectedDepartments }: Props) => {
  return (
    <button
      className="flex items-center justify-center w-[48px] h-[48px] border border-border-foreground cursor-pointer"
      onClick={() => setSelectedDepartments([])}
    >
      <img src="../../../../../public/icons/trash.svg" alt="trash" />
    </button>
  );
};

export default TrashButton;
