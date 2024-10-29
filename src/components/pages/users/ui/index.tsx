import { useState } from "react";
import { BorderLayout, DefaultLayout } from "../../../layout";
import MainTitle from "../../../shared/MainTitle";
import departments from "../../../../data/departments.json";
import statuses from "../../../../data/statuses.json";
import MultiSelect from "../../../shared/MultiSelect";
import countries from "../../../../data/counries.json";
import TrashButton from "./TrashButton";
const UsersPage = () => {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  return (
    <DefaultLayout>
      <BorderLayout>
        <MainTitle text="Users" />
        <p className="text-accent-foreground">
          Please add at least 3 departments to be able to proceed to the next
          steps.
        </p>
        <div className="flex gap-3">
          <MultiSelect
            placeholder="departments"
            data={departments}
            selectedDepartments={selectedDepartments}
            setSelectedDepartments={setSelectedDepartments}
          />
          <MultiSelect
            placeholder="country"
            disabled={selectedDepartments.length < 3}
            data={countries}
            selectedDepartments={selectedDepartments}
            setSelectedDepartments={setSelectedDepartments}
          />

          <MultiSelect
            placeholder="statuses"
            disabled={selectedDepartments.length < 3}
            data={statuses}
            selectedDepartments={selectedDepartments}
            setSelectedDepartments={setSelectedDepartments}
          />
          <TrashButton setSelectedDepartments={setSelectedDepartments} />
        </div>
      </BorderLayout>
    </DefaultLayout>
  );
};

export default UsersPage;
