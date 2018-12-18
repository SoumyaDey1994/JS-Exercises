function reverseInteger(number){
    const reversed = number.toString().split('').reverse().join('');
    const reversedNumber = parseInt(reversed);
    return reversedNumber * Math.sign(number);
}

const rev1 = reverseInteger(92);
console.log(rev1);
const rev2 = reverseInteger(430);
console.log(rev2);
const rev3 = reverseInteger(-56);
console.log(rev3);
const rev4 = reverseInteger(-470);
console.log(rev4);
const rev5 = reverseInteger(-5000);
console.log(rev5);
const rev6 = reverseInteger(0000);
console.log(rev6);