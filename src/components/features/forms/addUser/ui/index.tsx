import Select from "../../../../shared/Select";
import { FormItemsWrapper, FullNameInput } from "../../editUser";
import departments from "../../../../../data/departments.json";
import statuses from "../../../../../data/statuses.json";
import countries from "../../../../../data/counries.json";
import { useUserFormStore } from "../../../../pages/store";
import MainTitle from "../../../../shared/MainTitle";

export const UserAddForm = () => {
  const { isOpened, setIsOpened } = useUserFormStore((state) => state);
  return (
    <div
      className={`w-full h-[100vh] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-[#7D7D7D80] bg-opacity-50 ${
        isOpened ? "z-50 opacity-100 h-auto" : "-z-50 opacity-0 h-0"
      }`}
    >
      <div
        className={`transition-all border border-border px-[60px] py-[40px] bg-white max-w-[720px] w-full`}
      >
        <MainTitle text="Add user" />
        <form className="flex flex-col w-full mx-auto gap-y-[20px]">
          <FormItemsWrapper>
            <FullNameInput />
            <Select id="department" data={departments} label="Departments" />
          </FormItemsWrapper>
          <FormItemsWrapper className="mb-[60px]">
            <Select id="country" data={countries} label="Countries" />
            <Select id="status" data={statuses} label="Statuses" />
          </FormItemsWrapper>
        </form>
        <div className="flex gap-5 w-full justify-end">
            <button
              className="w-[100px] h-[48px] border border-border-foreground transition-opacity opacity-1"
              onClick={() => setIsOpened(false)}
            >
              Cancel
            </button>
            <button className="w-[150px] h-[48px] border border-border-foreground transition-opacity opacity-1">
              Add
            </button>
          </div>
      </div>
    </div>
  );
};
