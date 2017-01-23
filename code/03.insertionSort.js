module.exports = function insertionSort(arr) {
    const length = arr.length;

    let prefixIndex,
        current;

    for (let i = 1; i < length; i++) {
        prefixIndex = i - 1;
        current = arr[i];
        while (prefixIndex >= 0 && arr[prefixIndex] > current) {
            arr[prefixIndex + 1] = arr[prefixIndex];

            prefixIndex--;
        }

        arr[prefixIndex + 1] = current;
    }

    return arr;
};