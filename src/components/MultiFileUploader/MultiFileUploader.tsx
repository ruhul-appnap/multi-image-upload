import { useId } from "react";

function MultiFileUploader() {
  const id = useId();

  return (
    <>
      <label
        htmlFor={id}
        className="space-y-5 cursor-pointer flex flex-col items-center"
      >
        <div className="w-[7.5rem] h-[7.5rem] rounded-[0.625rem] bg-blue-700/40"></div>
        <p className="text-blue-700  underline">Upload Photos</p>
      </label>

      <input type="file" id={id} className="hidden" accept="image/*" />
    </>
  );
}

export default MultiFileUploader;
