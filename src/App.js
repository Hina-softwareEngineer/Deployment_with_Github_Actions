import React, { useState, useEffect } from "react";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(["Item 1"]);
    console.log(list, "list");
    setTimeout(() => {
      console.log(list);
      setList([...list, "Item 2"]);
    });
  }, []);

  console.log(list);

  return <div>list</div>;
}

export default App;
