function max(array) {
    let mayor = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayor){
            mayor=array[i];
        }
    };
    return mayor;
}
console.log(max([]));