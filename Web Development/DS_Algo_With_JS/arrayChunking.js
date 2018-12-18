function chunkArray(arr, chunksize){
    const chunks = [];
    for(let index = 0; index < arr.length ; index= index + chunksize){
        const chunk = arr.slice(index, index+chunksize);
        chunks.push(chunk);
    }
    return chunks;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const size = 12;
const chunks = chunkArray(array, size);
console.log(chunks);

// function chunkArray(arr, chunksize){
//     const chunks = [];
//     for(let item of arr){
//         const lastChunk = chunks[chunks.length - 1];
//         if(!lastChunk || lastChunk.length === chunksize){
//             chunks.push([item]);
//         }else{
//             lastChunk.push(item);
//         }
//     }

//     return chunks;
// }