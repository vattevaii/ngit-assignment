
/**
 * Execute first delay later implementation of debounce (I don't know if this is throttle??)
 */
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timerId: ReturnType<typeof setTimeout> | undefined;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (timerId) return;
    func.apply(this, args);
    timerId = setTimeout(() => {
      clearTimeout(timerId);
      timerId = undefined;
    }, delay);
  };
}
