import { ReactNode } from "react";
import { Header } from "../../widgets/header";

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-col justify-between">
      <Header />
      {children}
    </div>
  );
};
