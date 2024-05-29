/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

let actualLength = 0;
var removeElement = function(nums, val) {
    let p1 = 0;
    let p2 = nums.length - 1;
    let k = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            k++;
            nums[p1] = nums[p2];
            nums[p2] = nums[p1];
            i--;
            p2--;
            nums.pop();
        } else {
            p1++;
        }
    }
    
};

