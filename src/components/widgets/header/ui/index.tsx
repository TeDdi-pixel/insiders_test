import { buttons } from "../config/buttons";
import { HeaderButton } from "./HeaderButton";

export const Header = () => {
  return (
    <header className="w-full flex justify-center py-5 border-b border-b-border mb-[80px]">
      <div className="flex gap-5">
        {buttons.map((button) => (
          <HeaderButton key={button.id} text={button.name} path={button.path} />
        ))}
      </div>
    </header>
  );
};
