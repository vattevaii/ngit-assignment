import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "../helpers/debounce";
import { useSwipe } from "../hooks/useSwipe";

const defaultSettings = {
  autoplay: false,
  centered: true,
  sliderHeight: 700,
  slidesToShow: 2,
  gap: 10,
  activeStyle: "none",
};

export type SliderSettings = Partial<typeof defaultSettings>;

export default function Slider({
  children,
  settings = { activeStyle: "scale" },
}: {
  children: ReactNode[];
  settings?: Partial<typeof defaultSettings>;
}) {
  const { getSwipeDirection, swipeRef } = useSwipe();
  const {
    autoplay,
    centered,
    gap: baseGap,
    sliderHeight,
    slidesToShow,
    activeStyle,
  } = {
    autoplay: settings.autoplay ?? defaultSettings.autoplay,
    centered: settings.centered ?? defaultSettings.centered,
    gap: settings.gap ?? defaultSettings.gap,
    sliderHeight: settings.sliderHeight ?? defaultSettings.sliderHeight,
    slidesToShow: settings.slidesToShow ?? defaultSettings.slidesToShow,
    activeStyle: settings.activeStyle ?? defaultSettings.activeStyle,
  };
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
    [children]
  );
  const [initialOrder, setOrder] = useState([
    ...Array.from(Array(children.length).keys()),
  ]);

  const debouncedSetOrder = useCallback(
    debounce((updateFunc: (prevOrder: number[]) => number[]) => {
      setOrder(updateFunc);
    }, 1000),
    []
  );

  const next = useCallback(() => {
    debouncedSetOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const firstItem = newOrder.shift();
      newOrder.push(firstItem!);
      return newOrder;
    });
  }, [debouncedSetOrder]);

  const prev = useCallback(() => {
    return;
    debouncedSetOrder((prevOrder) => {
      const lastItem = prevOrder[prevOrder.length - 1];
      const newOrder = [lastItem, ...prevOrder.slice(0, prevOrder.length - 1)];
      return newOrder;
    });
  }, [debouncedSetOrder]);

  useEffect(() => {
    let interval: any;
    if (autoplay)
      interval = setInterval(() => {
        next();
      }, 3000);
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [settings]);

  useEffect(() => {
    const direction = getSwipeDirection();
    if (direction === "up") {
      next();
    } else if (direction === "down") {
      prev();
    }
  }, [getSwipeDirection]);

  const gap = baseGap * (Math.ceil(slidesToShow) - 1);
  const slideHeight = sliderHeight / slidesToShow - gap;
  const centerOffset = centered
    ? sliderHeight / 2 - sliderHeight / slidesToShow - slideHeight / 2
    : 0;

  const Slide = useCallback(
    ({
      active,
      slideHeight,
      top,
      children,
    }: {
      slideHeight: number;
      top: number;
      active: boolean;
      children: ReactNode;
    }) => {
      const transform = active
        ? `${activeStyle === "scale" ? "scale(1)" : ""} translateX(-50%)`
        : `${activeStyle === "scale" ? "scale(0.8)" : ""} translateX(-50%)`;
      return (
        <div
          className={`vv-absolute vv-slide-wrap vv-transition-all vv-ease-in-out ${"vv-duration-500"}`}
          style={{
            height: slideHeight + "px",
            top: top,
            transform: transform,
            transformOrigin: "0% 50%",
          }}
        >
          {children}
        </div>
      );
    },
    [children]
  );

  return (
    <div
      className="vv-flex vv-w-full vv-justify-center vv-overflow-hidden"
      style={{ height: sliderHeight + "px" }}
      ref={swipeRef}
    >
      <div
        className="vv-relative vv-w-full vv-translate-x-1/2"
        style={{ gap: gap + "px" }}
      >
        {initialOrder.map((orderK, index) => (
          <Slide
            active={orderK === initialOrder[2]}
            slideHeight={slideHeight}
            top={((index - 1) * sliderHeight) / slidesToShow + centerOffset}
            key={orderK}
          >
            {children[orderK]}
          </Slide>
        ))}
      </div>
      <div className="vv-flex vv-items-start vv-fixed vv-top-0 vv-right-0 vv-p-5 vv-gap-5">
        {/* <button onClick={prev}>Prev</button> */}
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}
