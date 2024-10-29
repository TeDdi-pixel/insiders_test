import { ReactNode } from "react";

export const FormItemsWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="flex gap-x-[80px]">{children}</div>;
};
