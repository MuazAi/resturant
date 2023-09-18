import React, { useState } from "react";

export default function ChairCounterButton() {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1 > 0 ? counter - 1 : 0);
  return (
    <section id="chair-button">
      <span onClick={increase}>+</span>
      <p>Number of Chairs {counter}</p>
      <span onClick={decrease}>-</span>
    </section>
  );
}
