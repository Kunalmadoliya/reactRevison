import {useState} from "react";

const App = () => {
  const [counter, setCounter] = useState(1);

  // const add = () => {
  //   setCounter(counter + 1);
  // };
  const subtract = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div className="w-full border h-[100vh] flex justify-center items-center">
        <button onClick={() => setCounter(counter+ 1)} className="border">
          Click Here {"(+)"}
        </button>
        <br />
        <button onClick={subtract} className="border">
          Click Here {"(-)"}
        </button>

        <p className="text-5xl">{counter}</p>
      </div>
    </>
  );
};

export default App;
