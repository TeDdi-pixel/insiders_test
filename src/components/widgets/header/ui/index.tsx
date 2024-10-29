import { buttons } from "../config/buttons";
import { HeaderButton } from "./HeaderButton";

export const Header = () => {
  return (
    <header className="w-full flex justify-center pt-5">
      <div className="flex gap-5">
        {buttons.map((button) => (
          <HeaderButton key={button.id} text={button.name} path={button.path} />
        ))}
      </div>
    </header>
  );
};
