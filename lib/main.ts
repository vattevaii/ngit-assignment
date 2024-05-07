import "./index.css"
import "./hello.svg"
export { something } from "./something";
export function helloAnything(thing: string): string {
  return `Hello ${thing}!`;
}