import clsx from "clsx";
import "./index.css";
function GradientDiv({
  className,
  style,
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>): JSX.Element {
  return (
    <div className="relative isolate">
      <div
        {...props}
        className={clsx("gradient-border", className)}
        style={{
          // @ts-expect-error
          "--border-width": "5px",
          ...style,
        }}
      >
        {/* {children} */}
      </div>
      <div
        {...props}
        className={(className || "")
          .split(" ")
          .filter((p) => !(p.startsWith("bg") || p.startsWith("shadow")))
          .join(" ")}
        style={style}
      >
        {children}
      </div>
    </div>
  );
}
export default GradientDiv;
