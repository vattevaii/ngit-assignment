import "./index.css";
import "./hello.svg";
export { something } from "./something";
export { default as Some } from "./components/some";
export function helloAnything(thing: string): string {
  return `Hello ${thing}!`;
}
