/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // const length = m + n;
    // let j = 0;
    // for (let i = m; i < length; i++) {
    //     if (n === 0) return;
    //     if (nums1[i] === 0) {
    //         nums1[i] = nums2[j++];
    //     }
    // }
    // nums1.sort((a, b) => a - b);
    
    let i = m - 1;
    let j = n - 1;
    let k = nums1.length - 1;
    
    while(j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};