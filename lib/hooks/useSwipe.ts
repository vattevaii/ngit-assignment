import { useCallback, useEffect, useState } from "react";

export function useSwipe() {
  const [startY, setStartY] = useState(0);
  const [endY, setEndY] = useState(0);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    setStartY(e.touches[0].clientY);
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    setEndY(e.changedTouches[0].clientY);
  }, []);

  const getSwipeDirection = useCallback(() => {
    const deltaY = endY - startY;
    console.log(deltaY);
    if (deltaY > 5) {
      return "down";
    } else if (deltaY < -5) {
      return "up";
    }
    return "none";
  }, [startY, endY]);

  useEffect(() => {
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchEnd]);

  return getSwipeDirection;
}
