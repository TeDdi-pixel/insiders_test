import Select from "../../../../shared/Select";
import departments from "../../../../../data/departments.json";
import statuses from "../../../../../data/statuses.json";
import countries from "../../../../../data/counries.json";
import { FormItemsWrapper } from "./FormItemsWrapper";
import { FullNameInput } from "./FullNameInput";
import FormTitle from "../../../../shared/FormTitle";

export const EditUserForm = () => {
  return (
    <>
      <FormTitle text="User Information" />
      <form className="flex flex-col max-w-[1080px] w-full mx-auto gap-y-[40px]">
        <FormItemsWrapper>
          <FullNameInput name="Oleg Schevchenko" />
          <Select id="department" data={departments} label="Departments" />
        </FormItemsWrapper>
        <FormItemsWrapper className="mb-[80px]">
          <Select id="country" data={countries} label="Countries" />
          <Select id="status" data={statuses} label="Statuses" />
        </FormItemsWrapper>
      </form>
    </>
  );
};
