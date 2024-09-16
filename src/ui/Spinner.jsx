const Spinner = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-slate-400">
      <div className="loader rounded-full border-8 border-t-8 h-32 w-32">
      </div>
    </div>
  );
};

export default Spinner;
