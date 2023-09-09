// if it take too much time to calculate a value we can use useMemo
// to check referential equality we can use useMemo
import { useMemo, useState } from "react";

const slowFunction = (num) => {
  console.log("calling slow function");
  for (let i = 0; i <= 100000000; i++) {}
  return num * 2;
};

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

export default App;
