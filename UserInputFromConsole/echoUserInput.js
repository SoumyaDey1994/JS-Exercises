const stdin = process.stdin;
console.log('Enter 5 numbers : ');
const arr = [];
let i=0;
stdin.on('data', function(data){
        arr.push(data);
        i++;
        if(i === 5){
            const sum = arr.reduce((result, item) => parseInt(result + item));
            console.log('Result: '+sum);
            process.exit();
        }

})

numbers = [1,3,5,7,9];
const res = numbers.reduce((sum, num)=>sum+num , 0);
// console.log(res);