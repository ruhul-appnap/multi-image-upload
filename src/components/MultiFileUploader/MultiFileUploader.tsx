import React, { useId, useState } from "react";

function MultiFileUploader() {
  const id = useId();

  const [fileList, setFileList] = useState<string[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const fileUrl: string[] = [];

      for (const file of files) {
        const url: string = URL.createObjectURL(file);
        fileUrl.push(url);
      }

      setFileList(fileUrl);
    }
  };

  return (
    <article>
      {fileList.length > 0 && (
        <div className="flex space-x-2 flex-wrap items-center my-3">
          {fileList.map((file) => (
            <div className="w-[7.5rem] h-[7.5rem] rounded-[0.625rem]  shadow-md">
              <img
                src={file}
                className="rounded-[0.625rem] w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
      <label
        htmlFor={id}
        className="space-y-5 cursor-pointer flex flex-col items-center"
      >
        <div className="w-[7.5rem] h-[7.5rem] rounded-[0.625rem] bg-blue-700/40"></div>
        <p className="text-blue-700  underline">Upload Photos</p>
      </label>

      <input
        type="file"
        id={id}
        className="hidden"
        accept="image/*"
        multiple
        onChange={handleFileUpload}
      />
    </article>
  );
}

export default MultiFileUploader;
