'use client';

import { useEffect, useState } from "react";
import $ from "jquery";
import "jquery-ui/ui/widgets/draggable";

export default function BoxManager() {
  const [boxes, setBoxes] = useState(() => {
    const initialColor = prompt("Enter initial box color:");
    return initialColor ? [{ color: initialColor }] : [];
  });
  useEffect(() => {
    $(".draggable-box").draggable();
  }, [boxes]);
  const addBox = () => {
    const newColor = prompt("Enter new box color:");
    if (newColor) {
      setBoxes([...boxes, { color: newColor }]);
    }
  };
  return (
    <>
      <div className="boxes">
        {boxes.map(box => (
          <div
            className="draggable-box"
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: box.color,
              position: 'absolute',

            }}
          />
        ))}
      </div>
      <button onClick={addBox}>Add Box</button>
    </>
  );
}
