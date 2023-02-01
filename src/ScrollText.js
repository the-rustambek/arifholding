import { useState, useEffect } from "react";
import React from "react";
import './index.css'

function useDivScroll(ref) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) {
        return;
      }
      const { scrollTop, clientHeight, scrollHeight } = ref.current;
      const totalHeight = scrollTop + clientHeight;
      setOpacity(totalHeight / scrollHeight);
    };
    const div = ref.current;
    div.addEventListener("scroll", handleScroll);
    return () => {
      div.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return opacity;
}

export default function ScrollingText() {
  const divRef = React.useRef(null);
  const opacity = useDivScroll(divRef);

  return (
    <div className="scroll-text" ref={divRef} style={{ overflow: "auto", height: "160px" }}>
      <p style={{ opacity }}>Scrolling Text 1</p>
      <p style={{ opacity }}>Scrolling Text 2</p>
      <p style={{ opacity }}>Scrolling Text 3</p>
      <p style={{ opacity }}>Scrolling Text 3</p>
      <p style={{ opacity }}>Scrolling Text 3</p>
      <p style={{ opacity }}>Scrolling Text 3</p>
      <p style={{ opacity }}>Scrolling Text 3</p>
      <p style={{ opacity }}>Scrolling Text 3</p>
      <p style={{ opacity }}>Scrolling Text 3</p>
      <p style={{ opacity }}>Scrolling Text 3</p>
    </div>
  );
}
