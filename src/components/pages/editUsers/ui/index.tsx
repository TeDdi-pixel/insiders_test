import { DefaultLayout } from "../../../layout";
import { EditUserForm } from "../../../features/forms/editUser";
import MainTitle from "../../../shared/MainTitle";
import Select from "../../../shared/Select";
import MainButton from "../../../shared/MainButton";
import { useEditFormStore } from "../../../features/forms/editUser/store";

const EditUserPage = () => {
  const { isInputChanged } = useEditFormStore((state) => state);
  return (
    <DefaultLayout>
      <div className="max-w-[1240px] w-full mx-auto pt-[60px] px-[80px] pb-[80px] border border-border">
        <MainTitle text="Edit users" />
        <Select
          id="user"
          data={[{ name: "Oleg Schevchenko", value: "Oleg Schevchenko" }]}
          label="User"
          className="mb-[60px]"
        />
        <EditUserForm />
        <div className="flex gap-5 w-full justify-end">
          {isInputChanged && <MainButton text="Undo" width="w-[100px]" />}
          <MainButton text="Save" width="w-[200px]" />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default EditUserPage;
