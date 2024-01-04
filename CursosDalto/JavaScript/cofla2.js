
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

let cantidadAlumnos = prompt("Ingrese la cantidad de alumnos que hay en el curso:");
let alumnos = [];

const validarSN = (d) =>{
    ToLowerCase(d)
    if (d == "s" || d == "si" || d == "n" || d == "no"){
        return true
    }
    else{
        return false
    }
}

const cargarAlumnos = (cantidad) => {
    for (i=0 ; i<cantidad ; i++){
        alumnos[i] = [prompt("Ingrese el nombre del Alumno " + (i+1) + " :"),0,0,0] 
    }
}

const validarAsisetencia = () =>{
    ToLowerCase(d)
    if (d == "a" || d == "p" ){
        return true
    }
    else{
        return false
    }
}

cargarAlumnos(cantidadAlumnos);

const usarSisetma = () => {
    let tomarAsistencia = prompt("Desea tomar asistencia? S/N (de no tomas asistencia saldras del sistema): ")
    ToLowerCase(tomarAsistencia)
    let validarTomaDeAsistencia = validarSN(tomarAsistencia)
    while ((tomarAsistencia == "s" || tomarAsistencia == "si") && validarTomaDeAsistencia){
        for (i=0 ; i<cantidadAlumnos; i++){
            let asistenciaValidada = false;
            while (!asistenciaValidada){
                let asistencia = prompt(`${alumnos[i][0]} esta a(ausente), p(presente):`)                
                ToLowerCase(asistencia)
                asistenciaValidada = validarAsisetencia(asistencia)    
            }
            if (asistencia == "a"){
                alumnos[i][1] += 1;
                alumnos[i][3] += 1;
            }
            else{
                alumnos[i][2] += 1;
                alumnos[i][3] += 1;
            }

        }
    }
}

let usar = prompt("Desea Usar el Sistema de Asistencia: S/N")
ToLowerCase(usar)
valido = validarSN(usar);

if(valido){
    if( usar == "si" || usar == "s"){
        usarSisetma()
    }
    else{
        alert("adios, Vuelva Prontos!")
    }
}