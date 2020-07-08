import React from "react";
import "./App.css";

function App() {
  // const [items, setItems] = useState(true);

  // window.addEventListener("load", function () {
  //   var shapeElement = document.querySelector(".shape");
  //   var frames = [
  //     { background: "red", transform: "translateX(0px)" },
  //     { background: "Yellow" },
  //     { background: "blue", transform: "translateX(500px)" },
  //   ];

  //   var timing = {
  //     duration: 1000,
  //     iterations: Infinity,
  //     direction: "alternate",
  //   };

  //   shapeElement.animate(frames, timing);
  //   // animation.play(); animation.pause(); animation.reverse(); animation.updatePlaybackRate(animation.playbackRate * 1.2)
  // });

  // useEffect(() => {
  //   console.log("Hina is useeffect");
  // }, []);

  return (
    <div className="red shape">
      Wellcome World
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </div>
  );
}

export default App;
