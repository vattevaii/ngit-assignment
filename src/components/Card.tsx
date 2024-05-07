import clsx from "clsx";

const commonOuterStyles =
  "relative bg-gradient-to-br from-accent-solid  to-[#0001]";
  const commonShadow = "shadow-[#f1bbab60_5px_5px_5px_2px_inset,_#0002_-5px_-5px_6px_2px_inset]"
const commonInnerStyles =
  "absolute inset-0 bg-gradient-to-br from-[#f1bbab] to-[#0000] "+commonShadow;
export function Card() {
  return (
    <div className="p-5 h-96 w-80 rounded-md relative bg-gradient-to-br from-accent-solid  to-[#0001]">
      <div className={clsx(commonShadow, "absolute inset-0 rounded-md")}></div>
      <div className="img h-2/5 pb-3">
        <div className={clsx(commonOuterStyles, "rounded-md", "h-full")}>
          <div className={clsx(commonInnerStyles, "rounded-md")}></div>
        </div>
      </div>
      <div className="content flex gap-3 h-1/5">
        <div
          className={clsx(commonOuterStyles, "rounded-full", "h-16", "w-16")}
        >
          <div className={clsx(commonInnerStyles, "rounded-full")}></div>
        </div>
        <div className="flex-1">
          <div
            className={clsx(commonOuterStyles, "rounded-md", "mb-3", "h-2/5")}
          >
            <div className={clsx(commonInnerStyles, "rounded-md", "p-2")}></div>
          </div>
          <div
            className={clsx(commonOuterStyles, "rounded-md", "h-1/5", "w-1/2")}
          >
            <div className={clsx(commonInnerStyles, "rounded-md", "p-2")}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
