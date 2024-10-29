import { useState } from "react";
import { BorderLayout, DefaultLayout } from "../../../layout";
import MainTitle from "../../../shared/MainTitle";
import departments from "../../../../data/departments.json";
import statuses from "../../../../data/statuses.json";
import MultiSelect from "../../../shared/MultiSelect";
import countries from "../../../../data/counries.json";
import TrashButton from "./TrashButton";
import { UserAddForm } from "../../../features/forms/addUser";
import { useUserFormStore } from "../../../features/forms/addUser/store";
const UsersPage = () => {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const { setIsOpened } = useUserFormStore((state) => state);

  return (
    <DefaultLayout>
      <BorderLayout>
        <MainTitle text="Users" />
        <p className="text-accent-foreground mb-3">
          Please add at least 3 departments to be able to proceed to the next
          steps.
        </p>
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-3 w-full">
            <MultiSelect
              placeholder="departments"
              data={departments}
              selectedDepartments={selectedDepartments}
              setSelectedDepartments={setSelectedDepartments}
            />
            <MultiSelect
              placeholder="country"
              disabled={selectedDepartments.length < 3}
              closed={selectedDepartments.length < 3}
              data={countries}
              selectedDepartments={selectedDepartments}
              setSelectedDepartments={setSelectedDepartments}
            />

            <MultiSelect
              placeholder="statuses"
              disabled={selectedDepartments.length < 3}
              closed={selectedDepartments.length < 3}
              data={statuses}
              selectedDepartments={selectedDepartments}
              setSelectedDepartments={setSelectedDepartments}
            />
            <TrashButton setSelectedDepartments={setSelectedDepartments} />
          </div>
          <button
            className="w-[200px] h-[48px] border border-border-foreground transition-opacity opacity-1"
            onClick={() => setIsOpened(true)}
          >
            Add user
          </button>
          <UserAddForm />
        </div>
      </BorderLayout>
    </DefaultLayout>
  );
};

export default UsersPage;
