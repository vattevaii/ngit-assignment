import { useCallback, useEffect, useRef, useState } from "react";

export function useSwipe() {
  const [checkStart, setCheckStart] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [endX, setEndX] = useState(0);
  const [endY, setEndY] = useState(0);
  const swipeRef = useRef<HTMLDivElement | null>(null);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    setCheckStart(true);
    setStartY(e.touches[0].clientY);
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    setCheckStart(false);
    setEndY(e.changedTouches[0].clientY);
  }, []);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    setCheckStart(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
  }, []);

  const handleMouseMove = useCallback((_e: MouseEvent) => {
    if (!checkStart) return;
  }, []);
  const handleMouseUp = useCallback((e: MouseEvent) => {
    setCheckStart(false);
    setEndX(e.clientX);
    setEndY(e.clientY);
  }, []);

  useEffect(() => {
    if (!swipeRef.current) return;

    swipeRef.current.addEventListener("touchstart", handleTouchStart);
    swipeRef.current.addEventListener("touchend", handleTouchEnd);

    swipeRef.current.addEventListener("mousedown", handleMouseDown);
    swipeRef.current.addEventListener("mousemove", handleMouseMove);
    swipeRef.current.addEventListener("mouseup", handleMouseUp);
    return () => {
      if (!swipeRef.current) return;

      swipeRef.current.removeEventListener("touchstart", handleTouchStart);
      swipeRef.current.removeEventListener("touchend", handleTouchEnd);

      swipeRef.current.removeEventListener("mousedown", handleMouseDown);
      swipeRef.current.removeEventListener("mousemove", handleMouseMove);
      swipeRef.current.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleTouchStart, handleTouchEnd]);

  const getSwipeDirection = useCallback(() => {
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal drag
      return deltaX > 0 ? "right" : "left";
    } else {
      // Vertical drag
      return deltaY > 0 ? "down" : "up";
    }
  }, [startX, startY, endX, endY]);

  return { swipeRef, getSwipeDirection };
}
