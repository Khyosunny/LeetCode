/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    const max = Math.max(...arr);
    const maxIndex = arr.indexOf(max);
    
    if (arr.length < 3) return false;
    if (maxIndex === 0) return false;
    if (maxIndex === arr.length - 1) return false;
    
    for (let i = 0; i < maxIndex; i++) {
        console.log(arr[i] >= arr[i + 1]);
        if (arr[i] >= arr[i + 1]) return false;
    }
    
    for (let i = maxIndex; i < arr.length; i++) {
        if (arr[i] <= arr[i + 1]) return false;
    }
    
    return true;
};