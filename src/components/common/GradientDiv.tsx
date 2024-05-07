import clsx from "clsx";
function GradientDiv({
  className,
  style,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>): JSX.Element {
  return (
    <div {...props} className={clsx("", className)}>
      Hello
    </div>
  );
}
export default GradientDiv;
