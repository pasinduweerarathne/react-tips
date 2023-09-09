import { useState, useMemo, useRef } from "react";

function App() {
  const inputRef = useRef();
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]);

  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    setItems((prev) => {
      return [...prev, value];
    });
    inputRef.current.value = "";
  };

  return (
    <>
      Search:
      <input type="search" onChange={(e) => setQuery(e.target.value)} />
      <br />
      <br />
      <form onSubmit={onSubmit}>
        New Item: <input ref={inputRef} type="text" />
        <button type="submit">Add</button>
      </form>
      <h3>Items:</h3>
      {filteredItems.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </>
  );
}

export default App;
