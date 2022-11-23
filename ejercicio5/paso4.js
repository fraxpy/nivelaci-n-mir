function join (array){
    let i=0;
    let txt="";
    for (i = 0; i < array.length; i++) {
        txt= txt + " " + array[i];
    }

    return txt;

}
console.log(join(["Hola","Mundo"]));
console.log(join(["Make","It","Real"]));
console.log(join([""]));