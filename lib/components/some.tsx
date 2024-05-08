import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "../helpers/debounce";

export default function Some({ children }: { children: ReactNode[] }) {
  const getItemClass = (index: number) => {
    let className = "";
    switch (index) {
      case 0:
        className = "vv-first";
        break;
      case children.length - 1:
        className = "vv-last";
        break;
    }
    className += " vv-slide h-full";
    return className;
  };
  const items = useMemo(
    () =>
      children.map((child, i) => (
        <div className={getItemClass(i)}>{child}</div>
      )),
    [children, getItemClass]
  );
  const [initialOrder, setOrder] = useState([
    -1,
    ...Array.from(Array(children.length).keys()),
    children.length,
  ]);

  const next = useCallback(
    debounce(() => {
      setOrder((prevOrder) => {
        const newOrder = [...prevOrder]; // Create a copy of the previous state
        const firstItem = newOrder.shift(); // Remove the first item
        newOrder.push(firstItem!); // Add the removed item to the end
        return newOrder; // Return the new array
      });
    }, 500),
    []
  );

  const prev = useCallback(
    debounce(() => {
      setOrder((prevOrder) => {
        const newOrder = [...prevOrder]; // Create a copy of the previous state
        const lastItem = newOrder.pop(); // Remove the last item
        newOrder.unshift(lastItem!); // Add the removed item to the beginning
        return newOrder; // Return the new array
      });
    }, 500),
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const centered = true;
  const sliderHeight = 756;
  const slidesToShow = 2;
  const gap = 10 * (Math.ceil(slidesToShow) - 1);
  const slideHeight = sliderHeight / slidesToShow - gap;
  const centerOffset = centered
    ? sliderHeight / 2 - sliderHeight / slidesToShow - slideHeight / 2
    : 0;
  return (
    <div
      className="vv-flex vv-w-full vv-gap-6 vv-justify-center vv-overflow-hidden"
      style={{ height: sliderHeight }}
    >
      <div
        className="vv-relative vv-w-full vv-translate-x-1/2"
        style={{ gap: gap + "px" }}
      >
        {initialOrder.map((orderK, index) => (
          <div
            className="vv-absolute vv-slide-wrap vv-transition-all vv-duration-500 ease-in-out"
            key={orderK}
            style={{
              height: slideHeight + "px",
              top: ((index - 1) * sliderHeight) / slidesToShow + centerOffset,
              transform:
                orderK === initialOrder[2]
                  ? "scale(1) translateX(-50%)"
                  : "scale(0.8) translateX(-50%)",
              transformOrigin: "0% 50%",
            }}
          >
            {
              items[
                orderK < 0
                  ? items.length - 1
                  : orderK === items.length
                  ? 0
                  : orderK
              ]
            }
          </div>
        ))}
      </div>
      <div className="vv-flex vv-items-start vv-fixed vv-top-0 vv-right-0 vv-p-5 vv-gap-5">
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}
