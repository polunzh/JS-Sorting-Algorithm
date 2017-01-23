function shellSort(arr) {
    const length = arr.length;
    let h,
        current,
        prefixIndex;


    h = length >> 1;

    while (h >= 1) {
        for (let i = h; i < length; i += h) {
            prefixIndex = i - h;
            current = arr[i];
            for (; prefixIndex >= 0 && current < arr[prefixIndex]; prefixIndex -= h) {
                arr[prefixIndex + h] = arr[prefixIndex];
            }

            arr[prefixIndex + h] = current;
        }

        h >>= 1;
    }

    return arr;
}

module.exports = shellSort;