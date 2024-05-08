import "./index.css";
import "./hello.svg";
export { something } from "./something";
export { default as Slider } from "./components/Slider";
export type { SliderSettings } from "./components/Slider";
export function helloAnything(thing: string): string {
  return `Hello ${thing}!`;
}
