import React, {useState} from "react";

const App = () => {
  const [change, setchange] = useState();
  return (
    <>
    <div style={{backgroundColor : change}} className="w-full h-screen border flex items-center justify-center">

      <button className="border w-20 h-10  text-center" onClick={() => setchange("red")} >red</button>
      <button className="border w-20 h-10  text-center" onClick={() => setchange("blue")} >blue</button>
      <button className="border w-20 h-10  text-center" onClick={() => setchange("green")} >green</button>
      <button className="border w-20 h-10  text-center" onClick={() => setchange("yellow")} >yellow</button>
      <button className="border w-20 h-10  text-center" onClick={() => setchange("pink")} >pink</button>
    </div>
    
    </>
  );
};

export default App;
