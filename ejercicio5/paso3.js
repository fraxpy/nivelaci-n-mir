function maxIndex(array) {
    
    if (array.length > 0) {
        let mayor = 0;
        let index = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > mayor) {
                mayor = array[i];
                index = i;
            }
        }
        return index;
    } else
        return -1;
}

console.log(maxIndex([1, 2, 3]));
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]));
console.log(maxIndex([]));