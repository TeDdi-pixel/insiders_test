import { BorderLayout, DefaultLayout } from "../../../layout";
import { EditUserForm } from "../../../features/forms/editUser";
import MainTitle from "../../../shared/MainTitle";
import Select from "../../../shared/Select";
import MainButton from "../../../shared/MainButton";
import { useEditFormStore } from "../../../features/forms/editUser/store";

const EditUserPage = () => {
  const { isInputChanged } = useEditFormStore((state) => state);
  return (
    <DefaultLayout>
      <BorderLayout>
        <MainTitle text="Edit users" />
        <Select
          id="user"
          data={[{ name: "Oleg Schevchenko", value: "Oleg Schevchenko" }]}
          label="User"
          className="mb-[60px]"
        />
        <EditUserForm />
        <div className="flex gap-5 w-full justify-end">
          {isInputChanged && <MainButton text="Undo" width="w-[100px]" undo/>}
          <MainButton text="Save" width="w-[200px]" />
        </div>
      </BorderLayout>
    </DefaultLayout>
  );
};

export default EditUserPage;
