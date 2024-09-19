// https://leetcode.com/problems/memoize/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let callCount = 0;
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("Returning from cache");
      return cache.get(key);
    }
    callCount++;
    console.log("Calculating fresh results");
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
