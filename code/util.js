const os = require('os');

module.exports = function (sort) {
    console.log(os.EOL + "排序名称:" + sort.name);

    const arr = [12, 3, 10, 11, 1];
    console.log(arr);
    console.log('*'.repeat(20) + os.EOL);

    sort(arr);
    console.log(arr);
};