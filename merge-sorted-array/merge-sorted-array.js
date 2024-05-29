/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const length = m + n;
    let p1 = 0;
    for (let i = m; i < length; i++) {
        if (n === 0) return;
        if (nums1[i] === 0) {
            nums1[i] = nums2[p1++];
        }
    }
    nums1.sort((a, b) => a - b);
};