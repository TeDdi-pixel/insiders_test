export const Arrow = ({ active }: { active: boolean }) => {
  return (
    <img
      src="../../../public/icons/arrows.svg"
      alt="arrow-down"
      className={`absolute right-5 top-[48px] transform -translate-y-1/2 pointer-events-none transition-transform ${
        active ? "rotate-180" : ""
      }`}
    />
  );
};
