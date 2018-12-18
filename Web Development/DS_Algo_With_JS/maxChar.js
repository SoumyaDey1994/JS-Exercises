function getMaxChar(str){
    const chars = {};
    for(let char of str){
        chars[char] = chars[char] ? chars[char] + 1 : 1
    }
    const maxChar = getMaximumChar(chars);
    return maxChar;
}

function getMaximumChar(chars){
    const maxCount = Math.max.apply(null, Object.values(chars));
    for(let key in chars){
        if(chars[key] === maxCount)
            return key;
    }
}
const str = "Hello There!";
const char = getMaxChar(str);
console.log(`Maximum repeated character : ${char}`);