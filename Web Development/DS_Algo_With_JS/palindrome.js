function checkPalindrome(str){
    const reversed = str.split('').reduce((rev, c) => c+rev, '');
    if(str === reversed)
        return true;
    else
        return false;
}

function checkPalindrome(str){
    const result = str.split('').every((c, index, str) => c=== str[str.length - index -1]);
    return result;
}
const result = checkPalindrome('NABAN');
console.log(`NABAN is a palindrome string : ${result}`);