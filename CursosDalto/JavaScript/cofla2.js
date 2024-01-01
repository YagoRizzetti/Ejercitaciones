let primeraPersona = true

const validarPersona = (hora) => {
    edad = prompt("cual es tu edad?: ")
    parent(edad)
    if(edad >= 18){
        if (hora >= 20 && hora <=7){
            if(hora >= 2 && hora < 7 && primeraPersona){
                alert("Podes pasar Gratis por ser la primera persona despues de las 2 de la mañana")
                primeraPersona = false
            }
            alert("Podes pasar y la entrada te sale $2000")
        }
        else{
            alert("No podes pasar basicamente porque el Boliche esta cerrado")
        }
    }
    else{
        alert("No podes pasar porque sos menor de edad")
    }
}

validarPersona(23)
validarPersona(24)
validarPersona(1)
validarPersona(2)
validarPersona(3)
validarPersona(5)
validarPersona(8)