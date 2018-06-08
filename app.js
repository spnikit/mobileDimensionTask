// task #1
const input = [5, 20, 40, 55, 9];
const x = 18;

function findNearestElem(arr = [], elem) {
    if (arr.length < 1) {
        throw Error('an array argument must be with at least 1 element');
    }

    const index = arr
        .map((num, idx) => ({
            val: Math.abs(elem - num),
            idx
        }))
        .sort((a, b) => a.val - b.val)[0].idx

    console.log(index);
}

findNearestElem(input, x);


// task #2
const plus = num1 => num2 => num1 + num2;

console.log(plus(2)(3));


// task #3
let str = '<b data-count="4"><i data-sum="5"></i></b>';
str = str.replace(/(\d)+/g, (match, p1) => {
    return parseInt(p1) * 3
});

console.log(str);



// task #4
let str1 = "O'Reilly said: 'you're fired!'";
str1 = str1.replace(/'/g, "''").replace(/\b''\b/g, "'");

console.log(str1);



