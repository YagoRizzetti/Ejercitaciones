
// ----------------------- Ejercicio 1 ----------------------

// let primeraPersona = true

// const validarHora = (hora) => {
//     if (hora >= 0 && hora <= 24){
//         return true
//     }
//     return false
// }

// const validarPersona = (hora) => {
//     edad = prompt("cual es tu edad?: ")
//     parseInt(edad)
//     if(edad >= 18){
//         let horaValidada = validarHora(hora)
//         if (horaValidada){
//             if (hora >= 20 || hora <=7){
//                 if(hora >= 2 && hora < 7 && primeraPersona){
//                     alert("Podes pasar Gratis por ser la primera persona despues de las 2 de la mañana")
//                     primeraPersona = false
//                 }
//                 else{
//                     alert(`Son las ${hora}:00 y Podes pasar y la entrada te sale $2000`)
//                 }
//             }
//             else{
//                 alert("No podes pasar basicamente porque el Boliche esta cerrado")
//             }
//         }
//         else{
//             alert("La hora esta fuera del rango horario")
//         }
//     }
//     else{
//         alert("No podes pasar porque sos menor de edad")
//     }
// }

// validarPersona(23)
// validarPersona(24)
// validarPersona(1)
// validarPersona(2)
// validarPersona(3)
// validarPersona(5)
// validarPersona(8)
// validarPersona(33)


// ----------------------- Ejercicio 2 ----------------------

let alumnos = [];
let cantidad = 0;

const validarSN = (d) =>{
    d = d.toLowerCase();
    while(d != "s" && d != "si" && d != "n" && d != "no"){
        d = prompt("debe Ingresar S(si) o N(no) para seguir: ");
        d = d.toLowerCase();
    }
    return d
}

const validarAsisetencia = (d) =>{
    d = d.toLowerCase();
    while(d != "a" && d != "p"){
        d = prompt("debe Ingresar a(Ausente) o P(presente) para seguir: ")
        d = d.toLowerCase();
    }
    return d
}

const validarNumero = (n,mensaje) => {
    console.log(typeof(n));
    while(!Number.isInteger(n)){
        n = prompt(mensaje);
        n = parseInt(n);
    }
    return n
}

const cargarAlumnos = (alumnos) => {
    let cantidadAlumnos = prompt("Ingrese la cantidad de alumnos que hay en el curso:");
    cantidadAlumnos = parseInt(cantidadAlumnos);
    cantidadAlumnos = validarNumero(cantidadAlumnos, "Ingrese la cantidad de alumnos que hay en el curso(Debe ingresar un numero entero):");
    for (i=0 ; i<cantidadAlumnos ; i++){
        alumnos[i] = [prompt("Ingrese el nombre del Alumno " + (i+1) + " :"),0,0,0] 
    }
    return alumnos, cantidadAlumnos
}

const mostrarDatosAlumnos = (alumnos, cantidad) =>{
    for(i=0;i<cantidad;i++){
        let porcentajeAusente = (alumnos[i][1]*100)/alumnos[i][3];
        let porcentajePresente = (alumnos[i][2]*100)/alumnos[i][3];
        alert(`${alumnos[i][0]} Tiene un total de ${alumnos[i][1]} asuentes, ${alumnos[i][2]} presentes, por lo que se tomo un total de ${alumnos[i][3]} asistencias. %${porcentajeAusente} de ausentes y %${porcentajePresente} de Presentes`)
    }
}

const usarSisetma = (alumnos, cantidad) => {
    let tomarAsistencia = prompt("Desea tomar asistencia? S/N (de no tomar asistencia saldras del sistema): ")
    tomarAsistencia = validarSN(tomarAsistencia);
    while (tomarAsistencia == "s" || tomarAsistencia == "si"){
        for (i=0 ; i<cantidad; i++){
            let asistencia = prompt(`${alumnos[i][0]} esta a(ausente), p(presente):`)                
            asistencia = validarAsisetencia(asistencia);    
            if (asistencia == "a"){
                alumnos[i][1] += 1;
                alumnos[i][3] += 1;
            }
            else{
                alumnos[i][2] += 1;
                alumnos[i][3] += 1;
            }
        }
        tomarAsistencia = prompt("Desea tomar asistencia? S/N (de no tomas asistencia saldras del sistema): ")
        tomarAsistencia = validarSN(tomarAsistencia);    
    }
    mostrarDatosAlumnos(alumnos, cantidad);
    alert("Gracias por usar nuestro sistema de asistencias!")
}

let usar = prompt("Desea Usar el Sistema de Asistencia: S/N");
usar = validarSN(usar);

if(usar == "si" || usar == "s"){
    alumnos, cantidad = cargarAlumnos(alumnos);
    usarSisetma(alumnos, cantidad);
}
else{
    alert("adios, Vuelva Prontos!")
}
