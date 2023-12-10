import React, { useState } from "react";

function App() {
  const [code, setCode] = useState<undefined | string>();
  const [transpiledCode, setTranspiledCode] = useState();

  const onSubmit = () => {
    console.log(code);
  };
  return (
    <div>
      this is code js editor that you can import react, axios or ... in it and
      use and test it
      <br />
      <textarea
        value={code}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setCode(e?.target?.value)
        }
      ></textarea>
      <div>
        <button onClick={onSubmit}>Submit</button>
      </div>
      <pre>{transpiledCode}</pre>
    </div>
  );
}

export default App;
