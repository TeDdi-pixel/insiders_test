const MainTitle = ({ text }: { text: string }) => {
  return (
    <h2 className="font-[500] text-accent text-[24px] text-center tracking-[6px] leading-[32px] mb-[80px]">
      {text}
    </h2>
  );
};

export default MainTitle;
