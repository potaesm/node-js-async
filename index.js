// For readfile
const fs = require('fs');

// Initialize simple array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr = [...Array(10).keys()];

// Read file with promise function
function readFile(fileName) {
    return new Promise((resolve, reject) => {
        return fs.readFile(fileName, 'utf8', (error, data) => {
            if (!!error) {
                return reject(error.message);
            } else {
                return resolve(data);
            }
        });
    });
}

// Delay with promise function
function delay(delay, fn, ...param) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fn(...param)), delay
        });
    });
}

// Append an item to an array function
function appendItemToArray(arr, item) {
    arr = [...arr, item];
    console.log(`appendItemToArray: Push ${item} in to newArr`);
    return arr;
}

// Parallel looping
async function parallelLooping(arr) {
    let newArray = [];
    arr.forEach(async (item, index, array) => {
        newArray = await delay(3000, appendItemToArray, newArray, item);
        const file = await readFile('data.txt');
        console.log('file: ', file.substring(1, 3));
        if (index === (array.length - 1)) {
            console.log('loop done');
        }
    });
    console.log('newArray: ', newArray);
    console.log('function done');
}

// Sequently looping (for ... of)
async function sequentlyLoopingForOf(arr) {
    let newArray = [];
    for (const item of arr) {
        newArray = await delay(3000, appendItemToArray, newArray, item);
        const file = await readFile('data.txt');
        console.log('file: ', file.substring(1, 3));
        if (arr.indexOf(item) === (arr.length - 1)) {
            console.log('loop done');
        }
    }
    console.log('newArray: ', newArray);
    console.log('function done');
}

// Sequently looping (for ... in)
async function sequentlyLoopingForIn(arr) {
    let newArray = [];
    for (const index in arr) {
        newArray = await delay(3000, appendItemToArray, newArray, arr[index]);
        const file = await readFile('data.txt');
        console.log('file: ', file.substring(1, 3));
        if (index === (arr.length - 1)) {
            console.log('loop done');
        }
    }
    console.log('newArray: ', newArray);
    console.log('function done');
}

// Sequently looping (old school for loop)
async function sequentlyLoopingFor(arr) {
    let newArray = [];
    for (let index = 0; index < arr.length; index++) {
        newArray = await delay(3000, appendItemToArray, newArray, arr[index]);
        const file = await readFile('data.txt');
        console.log('file: ', file.substring(1, 3));
        if (index === (arr.length - 1)) {
            console.log('loop done');
        }
    }
    console.log('newArray: ', newArray);
    console.log('function done');
}

async function sequentlyLoopingWhile(arr) {
    let newArray = [];
    let index = 0;
    while (index < arr.length) {
        newArray = await delay(3000, appendItemToArray, newArray, arr[index]);
        const file = await readFile('data.txt');
        console.log('file: ', file.substring(1, 3));
        if (index === (arr.length - 1)) {
            console.log('loop done');
        }
        index++;
    }
    console.log('newArray: ', newArray);
    console.log('function done');
}

// parallelLooping(arr);
// sequentlyLoopingForOf(arr)
// sequentlyLoopingForIn(arr)
// sequentlyLoopingFor(arr);
// sequentlyLoopingWhile(arr);
