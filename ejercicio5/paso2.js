function max(array) {
    let mayor = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayor){
            mayor=array[i];
        }
    };
    return mayor;
}
console.log(max([1,2,3]));
console.log(max([10,9,8,7,6,5,4]));
console.log(max([]));