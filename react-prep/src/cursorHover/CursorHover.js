import React, { useEffect, useRef } from "react";
import "./cursorHover.css";

const CursorHover = () => {
  const blockRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (blockRef.current) {
        blockRef.current.style.top = e.clientY + "px";
        blockRef.current.style.left = e.clientX + "px";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // ✅ Correctly remove the event listener on cleanup
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div ref={blockRef} className="block"></div>;
};

export default CursorHover;
