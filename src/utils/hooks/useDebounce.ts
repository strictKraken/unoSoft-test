type F = (...args: any[]) => void;
export const useDebounce = (fn: F, t: number): F => {
  let timer: number;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), t);
  };
};
