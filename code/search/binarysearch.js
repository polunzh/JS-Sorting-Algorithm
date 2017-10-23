function binarySearch(arr, target) {
    if (!Array.isArray(arr)) return arr;

    arr.sort((l, r) => l - r);

    let left = 0;
    let right = arr.length - 1;
    let middle;

    while (left <= right) {
        middle = left + parseInt((right - left) / 2);

        if (arr[middle] < target) {
            left = middle + 1;
        } else if (arr[middle] > target) {
            right = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
}

console.log(binarySearch([1, 2, 5], 5));
console.log(binarySearch([1], 5));
console.log(binarySearch([1, 5], 1));
console.log(binarySearch([1, 5], 5));
console.log(binarySearch([]));