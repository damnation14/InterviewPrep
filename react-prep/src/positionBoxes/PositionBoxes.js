import { useRef } from "react";
import style from "./style.module.css";

const PositionBoxes = () => {
  const ref = useRef(null);
  const handleOnDrag = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.x;
    const offsetY = e.clientY - rect.y;
    const handleMouseMove = (e) => {
      const parentRect = ref.current.parentElement.getBoundingClientRect();
      let left = e.clientX - parentRect.left - offsetX;
      let top = e.clientY - parentRect.top - offsetY;

      ref.current.style.left = `${left}px`;
      ref.current.style.top = `${top}px`;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  return (
    <div className={style.outer}>
      <div ref={ref} className={style.inner} onMouseDown={handleOnDrag}></div>
    </div>
  );
};

export default PositionBoxes;
