import { ReactNode, useCallback, useEffect, useState } from "react";
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

const Slide = ({
  active,
  slideHeight,
  top,
  activeStyle = "scale",
  child,
}: {
  active: boolean;
  slideHeight: number;
  top: number;
  activeStyle: string;
  child: ReactNode;
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
      {child}
    </div>
  );
};

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

  const [initialOrder, setOrder] = useState([
    ...Array.from(Array(children.length).keys()),
  ]);

  const nextItem = () => {
    console.log("nextItem");
    setOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const firstItem = newOrder.shift();
      newOrder.push(firstItem!);
      return newOrder;
    });
  };

  const prevItem = () => {
    console.log("prevItem");
    setOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const lastItem = newOrder.pop();
      newOrder.unshift(lastItem!);
      return newOrder;
    });
  };
  const next = debounce(nextItem, 1000);
  const prev = debounce(prevItem, 1000);

  useEffect(() => {
    let interval: any;
    if (autoplay)
      interval = setInterval(() => {
        next();
      }, 3000);
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay]);

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

  return (
    <div
      className="vv-flex vv-w-full vv-justify-center vv-overflow-hidden"
      style={{ height: sliderHeight + "px" }}
      ref={swipeRef}
    >
      <div className="vv-relative vv-w-full vv-translate-x-1/2">
        {initialOrder.map((orderK, index) => (
          <Slide
            activeStyle={activeStyle}
            active={orderK === initialOrder[2]}
            slideHeight={slideHeight}
            top={((index - 1) * sliderHeight) / slidesToShow + centerOffset}
            child={children[orderK]}
            key={orderK.toFixed(5)}
          />
        ))}
      </div>
      <div className="vv-flex vv-items-start vv-fixed vv-top-0 vv-right-0 vv-p-5 vv-gap-5">
        <button className="p-2 vv-bg-red-800 vv-text-white" onClick={prev}>
          Prev
        </button>
        <button className="p-2 vv-bg-red-800 vv-text-white" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}
