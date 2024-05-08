import clsx from "clsx";

const commonOuterStyles =
  "relative bg-gradient-to-br from-accent-solid  to-[#0001]";
const commonShadow =
  "shadow-[#f1bbab60_5px_5px_5px_2px_inset,_#0002_-5px_-5px_6px_2px_inset]";
const commonInnerStyles =
  "absolute inset-0 bg-gradient-to-br from-[#ed9478] to-[#ed947890] " +
  commonShadow;

export function Card({ id }: { id?: string }) {
  return (
    <div className="p-5 h-full max-h-96 aspect-square rounded-3xl relative bg-gradient-to-br from-accent-solid  to-[#0001]">
      <div className={clsx(commonShadow, "absolute inset-0 rounded-3xl")}></div>
      <div className="img h-1/2 pb-3">
        <div className={clsx(commonOuterStyles, "rounded-3xl", "h-full")}>
          <div className={clsx(commonInnerStyles, "rounded-3xl")}></div>
        </div>
      </div>
      <div className="content flex gap-3 h-1/5">
        <div
          className={clsx(commonOuterStyles, "rounded-full", "aspect-square")}
        >
          <div className={clsx(commonInnerStyles, "rounded-full")}></div>
        </div>
        <div className="flex-1">
          <div
            className={clsx(commonOuterStyles, "rounded-3xl", "mb-3", "h-2/5")}
          >
            <div
              className={clsx(commonInnerStyles, "rounded-3xl", "p-2")}
            ></div>
          </div>
          <div
            className={clsx(commonOuterStyles, "rounded-3xl", "h-1/5", "w-1/2")}
          >
            <div
              className={clsx(commonInnerStyles, "rounded-3xl", "p-2")}
            ></div>
          </div>
        </div>
        <span>{id}</span>
      </div>
    </div>
  );
}
