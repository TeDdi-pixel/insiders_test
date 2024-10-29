import { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

export const FormItemsWrapper = ({ children, className }: Props) => {
  return <div className={`flex gap-x-[80px] ${className}`}>{children}</div>;
};
