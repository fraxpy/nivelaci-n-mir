const receta = {
    nombre: "Sandwich",
    ingredientes: [
        {nombre: "Pan", cantidad: 2},
        {nombre: "Queso", cantidad: 1}
    ],
    
}
//const vacio  = Object.vacio(receta)

console.log(receta.ingredientes[0].nombre);
console.log(receta.ingredientes[0].cantidad + receta.ingredientes[1].cantidad);
