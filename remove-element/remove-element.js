/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

let actualLength = 0;
var removeElement = function(nums, val) {
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count] = nums[i];
            count++;
        }
          
    }
    return count;
    
};

