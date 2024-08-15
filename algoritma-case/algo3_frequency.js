function countOccurrences(inputArray, queryArray) {
    const frequencyMap = inputArray.reduce((map, word) => {
        map[word] = (map[word] || 0) + 1;
        return map;
    }, {});
    
    return queryArray.map(query => frequencyMap[query] || 0);
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
const result = countOccurrences(INPUT, QUERY);
console.log(result);