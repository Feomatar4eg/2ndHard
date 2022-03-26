'use strict';

let num = 266219;
let acc = 1;
while (num) {
    acc *= num % 10;
    num = Math.trunc(num /= 10);
}
acc = acc ** 3;
console.log((acc + '').slice(0, 2));