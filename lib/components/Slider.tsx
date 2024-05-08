import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "../helpers/debounce";

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
    [children, getItemClass]
  );
  const [initialOrder, setOrder] = useState([
    -1,
    ...Array.from(Array(children.length).keys()),
    children.length,
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
    debouncedSetOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const lastItem = newOrder.pop();
      newOrder.unshift(lastItem!);
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

  const gap = baseGap * (Math.ceil(slidesToShow) - 1);
  const slideHeight = sliderHeight / slidesToShow - gap;
  const centerOffset = centered
    ? sliderHeight / 2 - sliderHeight / slidesToShow - slideHeight / 2
    : 0;
  return (
    <div
      className="vv-flex vv-w-full vv-justify-center vv-overflow-hidden"
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
                  ? `${activeStyle === "scale"?"scale(1)":""} translateX(-50%)`
                  : `${activeStyle === "scale"?"scale(0.8)":""} translateX(-50%)`,
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
