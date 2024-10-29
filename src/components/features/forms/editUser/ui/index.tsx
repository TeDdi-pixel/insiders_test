import Select from "../../../../shared/Select";
import departments from "../../../../../data/departments.json";
import statuses from "../../../../../data/statuses.json";
import countries from "../../../../../data/counries.json";
import { FormItemsWrapper } from "./FormItemsWrapper";
import { FullNameInput } from "./FullNameInput";
import FormTitle from "../../../../shared/FormTitle";
import { useForm } from "react-hook-form";
import MainButton from "../../../../shared/MainButton";
import { useEditFormStore } from "../store";

export const EditUserForm = () => {
  const { control, handleSubmit } = useForm();
  const { isInputChanged } = useEditFormStore((state) => state);

  const onSubmit = (data: any) => {
    console.log("Submitted data:", data);
  };

  return (
    <>
      <FormTitle text="User Information" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[1080px] w-full mx-auto gap-y-[40px]"
      >
        <FormItemsWrapper className="mb-[40px]">
          <FullNameInput control={control} />
          <Select
            id="department"
            data={departments}
            label="Departments"
            control={control}
          />
        </FormItemsWrapper>
        <FormItemsWrapper className="mb-[80px]">
          <Select
            id="country"
            data={countries}
            label="Countries"
            control={control}
          />
          <Select
            id="status"
            data={statuses}
            label="Statuses"
            control={control}
          />
        </FormItemsWrapper>
        <div className="flex gap-5 w-full justify-end">
          {isInputChanged && <MainButton text="Undo" width="w-[100px]" undo />}
          <MainButton text="Save" width="w-[200px]" />
        </div>
      </form>
    </>
  );
};
