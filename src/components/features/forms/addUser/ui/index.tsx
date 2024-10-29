import Select from "../../../../shared/Select";
import { FormItemsWrapper, FullNameInput } from "../../editUser";
import departments from "../../../../../data/departments.json";
import statuses from "../../../../../data/statuses.json";
import countries from "../../../../../data/counries.json";
import MainTitle from "../../../../shared/MainTitle";
import { FormButtons } from "./FormButtons";
import { useUserFormStore } from "../store";
import { useForm } from "react-hook-form";

export const UserAddForm = () => {
  const { isOpened } = useUserFormStore((state) => state);
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    if (!data.fullName) {
      alert("Full name is required.");
      return;
    }

    sessionStorage.setItem("userData", JSON.stringify(data));
  };

  return (
    <div
      className={`w-full h-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-[#7D7D7D80] bg-opacity-50 ${
        isOpened ? "z-50 opacity-100 h-auto" : "-z-50 opacity-0 h-0"
      }`}
    >
      <div
        className={`transition-all border border-border px-[60px] py-[40px] bg-white max-w-[720px] w-full`}
      >
        <MainTitle text="Add user" />
        <form
          className="flex flex-col w-full mx-auto gap-y-[20px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormItemsWrapper>
            <FullNameInput control={control} />
            <Select
              id="department"
              data={departments}
              label="Departments"
              control={control}
            />
          </FormItemsWrapper>
          <FormItemsWrapper className="mb-[60px]">
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
          <FormButtons />
        </form>
      </div>
    </div>
  );
};
