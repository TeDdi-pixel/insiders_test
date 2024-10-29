const FormTitle = ({ text }: { text: string }) => {
  return (
    <h3 className="max-w-[1080px] w-full mx-auto mb-10 font-[400] text-accent text-[20px] tracking-[0.2px]">
      {text}
    </h3>
  );
};

export default FormTitle;
