const Pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
    saluda: function () {
        return "Hola,me llamo " + this.nombre;
      },
}

console.log(Pedro.saluda())
console.log("La edad es:" + Pedro.edad)
Pedro.estatura = 1.8
delete Pedro.activo

const keys = Object.keys(Pedro)
for (let i = 0; i < keys.length; i++) {
    let line = keys[i] + ": " + Pedro[keys[i]];
    console.log(line);
}

