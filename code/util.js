const os = require('os');
const bubbleSort = require('./01.bubbleSort.js');
const selectionSort = require('./02.selectionSort.js');
const insertionSort = require('./03.insertionSort.js');
const shellSort = require('./04.shellSort.js');

const arrayLength = 10000;
const testCount = 100;

function randomArray() {
    const arr = [];

    for (let i = 0; i < arrayLength; i++) {
        arr.push(Math.floor(Math.random() * 1000));
    }

    return arr;
}

function getItemCounter(arr) {
    const map = new Map();

    arr.forEach(item => {
        map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
    });

    return map;
}

/**
 * 
 * 
 * @param {number[]} arr
 * @param {number[]} sortedArr
 */
function check(arr, sortedArr) {
    for (let i = 0; i < sortedArr.length - 1; i++) {
        if (sortedArr[i] > sortedArr[i + 1]) {
            throw new Error('升序排序错误');
        }
    }

    const arrMap = getItemCounter(arr);
    const sortedArrMap = getItemCounter(sortedArr);

    for (let key of arrMap.keys()) {
        if (sortedArrMap.get(key) === undefined
            || sortedArrMap.get(key) !== arrMap.get(key)) {
            throw new Error('排序错误');
        }
    }

    return true;
}

function test(sort, toBeSortedArr) {
    const innerSorted = toBeSortedArr.slice();

    const sortedArr = sort(innerSorted.slice());
    check(innerSorted, sortedArr);

    const sTime = Date.now();
    for (let i = 0; i <= testCount; i++) {
        sort(innerSorted.slice());
    }

    console.log(`${arrayLength} elements ${testCount} times test ${sort.name} cost ${Date.now() - sTime} ms`);
};

const toBeSortedArr = randomArray();
// test(bubbleSort, toBeSortedArr);
test(insertionSort, toBeSortedArr);
test(shellSort, toBeSortedArr);