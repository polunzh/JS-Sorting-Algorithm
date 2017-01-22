const util = require('./util.js');

function selectionSort(arr) {
    const length = arr.length;
    let flag, temp;

    for (let i = 0; i < length - i; i++) {
        flag = 0;
        for (let j = 1; j < length - i; j++) {
            if (arr[j] > arr[flag]) {
                flag = j;
            }
        }

        temp = arr[length - i - 1];
        arr[length - i - 1] = arr[flag];
        arr[flag] = temp;
    }
}

util(selectionSort);