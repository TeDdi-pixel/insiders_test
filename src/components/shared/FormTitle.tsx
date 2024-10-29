const FormTitle = ({ text }: { text: string }) => {
  return (
    <div className="max-w-[1080px] w-full mx-auto mb-10">
      <h3 className="font-[400] text-accent text-[20px]">{text}</h3>
    </div>
  );
};

export default FormTitle;
