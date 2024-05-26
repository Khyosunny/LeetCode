/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let array = new Array(nums.length);
    
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[start] * nums[start] > nums[end] * nums[end]) {
            array[i] = nums[start] * nums[start];
            start++;
        } else {
            array[i] = nums[end] * nums[end];
            end--;
        }
    }
    return array;
};