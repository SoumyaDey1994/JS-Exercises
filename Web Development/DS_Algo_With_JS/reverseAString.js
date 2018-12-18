// function reverseString(str){
//     const reversed = str.split('').reverse().join('');
//     return reversed;
// }

// function reverseString(str){
//     let reversed = '';
//     for(c of str){
//         reversed = c + reversed; 
//     }
//     return reversed;
// }

function reverseString(str){
   const reversed = str.split('').reduce((rev, c)=> c + rev, '');
   return reversed;
}

const result = reverseString('Soumya Kanta Dey');
console.log(result);