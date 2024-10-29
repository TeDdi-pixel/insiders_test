import { ReactNode } from "react";

export const BorderLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1240px] w-full mx-auto pt-[60px] px-[80px] pb-[80px] border border-border">
      {children}
    </div>
  );
};

