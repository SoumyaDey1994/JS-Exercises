function checkAnagram(str1, str2){
    const sortedStr1 = getSortedString(str1);
    const sortedStr2 = getSortedString(str2);

    return sortedStr1 === sortedStr2;
}

function getSortedString(str){
    const sortedStr = str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return sortedStr;
}

const string1 = 'Hi-There';
const string2 = 'Hello! There';
const result = checkAnagram(string1, string2);
console.log(result);


/* Approach 1 */
// function checkAnagram(str1, str2){
//     const charMap1 = getCharMap(str1);
//     const charMap2 = getCharMap(str2);
    
//     if(Object.keys(charMap1).length !== Object.keys(charMap2).length)
//         return false;
    
//     for(let key in charMap1){
//         if(charMap2[key]!== charMap1[key])
//             return false;
//     }
//     return true;
// }

// function getCharMap(str){
//     const characterString = str.replace(/[^\w]/g, '').toLowerCase();
//     const charMap = {};
//     for(let char of characterString){
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
// }