import React, { useRef, useEffect } from "react";
import "./App.css";

import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";

function App() {
  const { ref } = useWebAnimations({ ...bounce });

  // const { ref, playState, getAnimation } = useWebAnimations({
  //   keyframes: [
  //     { transform: "translate(0px)", background: "red" }, // Move by 500px
  //     { transform: "translate(500px)", background: "green" }, // Go through three colors
  //   ],
  //   timing: {
  //     delay: 500, // Start with a 500ms delay
  //     duration: 1000, // Run for 1000ms
  //     iterations: 2, // Repeat once
  //     direction: "alternate", // Run the animation forwards and then backwards
  //     easing: "ease-in-out", // Use a fancy timing function
  //   },
  //   //onReady: ({ playState, animate, animation }) => {
  //   // Triggered when the animation is ready to play (Google Chrome: available in v84+)
  //   //},
  //   onUpdate: ({ playState, animate, animation }) => {
  //     console.log("Play State", playState);
  //     console.log("animate", animate);
  //     console.log("animation", animation);
  //     // Triggered when the animation enters the running state or changes state
  //   },
  //   //onFinish: ({ playState, animate, animation }) => {
  //   // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
  //   //},
  //   // More useful options...
  // });

  // const input = useRef(null);

  // useEffect(() => {
  //   input.current.focus();
  // }, []);
  return (
    <div>
      <p>Hello World, </p>
      <div ref={ref}>Hello again!</div>
      {/* <input ref={ref} type="text" /> */}

      {/* <button
        onClick={() => {
          getAnimation().play();
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          getAnimation().pause();
        }}
      >
        Pause
      </button> */}
    </div>
  );
}

export default App;
