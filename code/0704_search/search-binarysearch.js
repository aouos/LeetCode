/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    const mid = l + Math.floor((r - l) >> 1);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
};

// 时间复杂度 O(logN)
// 空间复杂度 O(1)