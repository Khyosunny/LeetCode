/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
//     const max = Math.max(...arr);
//     const maxIndex = arr.indexOf(max);
    
//     if (arr.length < 3) return false;
//     if (maxIndex === 0) return false;
//     if (maxIndex === arr.length - 1) return false;
    
//     for (let i = 0; i < maxIndex; i++) {
//         if (arr[i] >= arr[i + 1]) return false;
//     }
    
//     for (let i = maxIndex; i < arr.length; i++) {
//         if (arr[i] <= arr[i + 1]) return false;
//     }
    
//     return true;
    
    if (arr.length < 3) return false;
    
    let left = 0;
    let right = arr.length - 1;
    
    for (let i = 0; i < arr.length; i++) {
        if (left > right) {
            return false;
        }
        if (arr[left] < arr[left + 1]) {
            left++;
        }
        if (arr[right] < arr[right - 1]) {
            right--;
        }
    }
    
    if (left === 0 || right === arr.length - 1) return false;
    
    return left === right;
};