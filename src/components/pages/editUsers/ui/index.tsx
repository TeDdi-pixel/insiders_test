import { BorderLayout, DefaultLayout } from "../../../layout";
import { EditUserForm } from "../../../features/forms/editUser";
import MainTitle from "../../../shared/MainTitle";
import Select from "../../../shared/Select";
import { useForm } from "react-hook-form";

const EditUserPage = () => {
  const { control } = useForm();

  return (
    <DefaultLayout>
      <BorderLayout>
        <MainTitle text="Edit users" />
        <Select
          id="user"
          data={[{ name: "Oleg Schevchenko", value: "Oleg Schevchenko" }]}
          label="User"
          className="mb-[60px]"
          control={control}
        />
        <EditUserForm />
      </BorderLayout>
    </DefaultLayout>
  );
};

export default EditUserPage;
