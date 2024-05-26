/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let countArray = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            countArray.push(++count);
        } else {
            count = 0;
            countArray.push(count);
        }
    }
    return Math.max(...countArray);
};