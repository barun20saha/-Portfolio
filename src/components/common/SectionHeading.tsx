const SectionHeading = ({ heading = '' ,classname ="" }) => {
  return (
    <div className={`relative w-full max-w-screen items-center justify-between gap-2 overflow-visible py-1 text-3xl font-normal px-5 ${classname}`}>
      <h2 className="">{heading}</h2>
    </div>
  );
};

export default SectionHeading;
