export const FullNameInput = () => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor="full-name" className="text-accent-foreground">
        Full name
      </label>
      <input
        type="text"
        id="full-name"
        className="max-w-[500px] w-full h-[48px] border py-[14px] pl-6 pr-3 text-accent-foreground rounded-none focus:border-blue-500  focus:rounded-none "
      />
    </div>
  );
};
