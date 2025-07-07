import React, {useCallback, useRef, useState} from "react";
import {useEffect} from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [char, setChar] = useState(false);

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "1234567890";
    if (char) str += "!@#$%^&*()_+{}|/*-+`";

    for (let i = 0; i <= length; i++) {
      let words = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(words);
    }

    setInput(pass);
  }, [length, numbers, char]);

  const passwordRef = useRef(null);

  const copy = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(input);
    
  });

  useEffect(() => {
    passGen();
  }, [length, numbers, char, passGen]);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div>
          <input
            className="border w-100 p-3 rounded-md"
            value={input}
            ref={passwordRef}
            type="text"
            readOnly
          />
          <button onClick={copy} className="border p-3">
            copy
          </button>

          <div className="flex items-center gap-5">
            <input
              onChange={(e) => setLength(e.target.value)}
              type="range"
              min="0"
              max="100"
              value={length}
            />
            <input
              type="checkbox"
              defaultChecked={numbers}
              onChange={() => setNumbers((prev) => !prev)}
              className="default:outline-2 ..."
            />{" "}
            <label> Number</label>
            <input
              type="checkbox"
              defaultChecked={char}
              onChange={() => setChar((prev) => !prev)}
              className="default:outline-2 ..."
            />{" "}
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
