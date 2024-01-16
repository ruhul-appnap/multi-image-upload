import MultiFileUploader from "./components/MultiFileUploader";

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <MultiFileUploader
          fileExtensions={[".jpg"]}
          maxFiles={4}
          onUpload={(files) => console.log(files)}
        />
      </div>
    </>
  );
}

export default App;
