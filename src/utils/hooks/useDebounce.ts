type F = (...args: number[]) => void;
export const useDebounce = (fn: F, t: number): F => {
  let timer: number;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), t);
  };
};
