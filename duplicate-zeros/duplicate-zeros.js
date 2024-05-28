/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let length = arr.length;
    
    for (let i = 0; i < length - 1; i++) {
        if (arr[i] === 0) {
            for (let j = length - 2; j >= i; j--) {
                arr[j + 1] = arr[j];
            }
            i++;
        }
    }
    
};