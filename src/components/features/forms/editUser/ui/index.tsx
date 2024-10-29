import Select from "../../../../shared/Select";
import departments from "../../../../../data/departments.json";
import statuses from "../../../../../data/statuses.json";
import countries from "../../../../../data/counries.json";
import { FormItemsWrapper } from "./FormItemsWrapper";
import { FullNameInput } from "./FullNameInput";
import FormTitle from "../../../../shared/FormTitle";

export const EditUserForm = () => {
  return (
    <div>
      <FormTitle text="User Information" />
      <form className="flex flex-col max-w-[1080px] w-full mx-auto gap-y-[40px]">
        <FormItemsWrapper>
          <FullNameInput />
          <Select id="Department" data={departments} label="Departments" />
        </FormItemsWrapper>
        <FormItemsWrapper>
          <Select id="Department" data={countries} label="Countries" />
          <Select id="Department" data={statuses} label="Statuses" />
        </FormItemsWrapper>
      </form>
    </div>
  );
};
