const debounce = (callback, wait) => {

  let timeoutId = null;
  return function (...args) {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(this, args);
    }, wait);
  };
}

export default debounce;
