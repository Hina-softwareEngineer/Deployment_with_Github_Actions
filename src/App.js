import React, { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState(true);

  useEffect(() => {
    console.log("Hina is useeffect");
  }, []);

  return <div onClick={() => setItems(!items)}>Home</div>;
}

export default App;
