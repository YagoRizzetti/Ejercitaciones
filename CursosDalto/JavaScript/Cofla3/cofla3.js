// --------------------------------Ejercicio 1------------------------------------

class Celular{
    constructor(marca,modelo,resolucion,tamaño,almacenamiento,memoria,precio){
        this.marca = marca;
        this.modelo = modelo;
        this.resolucion = resolucion;
        this.tamaño = tamaño;
        this.almacenamiento = almacenamiento;
        this.memoria = memoria;
        this.precio = precio;
    }

}

class CelularGamaMedia extends Celular{
    constructor(marca,modelo,resolucion,tamaño,almacenamiento,memoria,precio,reconocimientoFacial,detectorDeHuella,cantidadDeCamaras,camaraFrontal){
        super (marca,modelo,resolucion,tamaño,almacenamiento,memoria,precio)
        this.reconocimientoFacial = reconocimientoFacial;
        this.detectorDeHuella = detectorDeHuella;
        this.cantidadDeCamaras = cantidadDeCamaras;
        this.camaraFrontal = camaraFrontal;
    }
}
class CelularAltaGama extends CelularGamaMedia{
    constructor(marca,modelo,resolucion,tamaño,almacenamiento,memoria,precio,reconocimientoFacial,detectorDeHuella,cantidadDeCamaras,camaraFrontal,InteligenciaArtificial){
        super (marca,modelo,resolucion,tamaño,almacenamiento,memoria,precio,reconocimientoFacial,detectorDeHuella,cantidadDeCamaras,camaraFrontal)
        this.InteligenciaArtificial = InteligenciaArtificial;
    }
}

const celular1 = Celular("Nokia","1100","No Tiene Camara","2 pulgadas","500 Mb", "200 Mb", 1000);
const celular2 = Celular("Samsung","J7","4 Mpx","4,2 pulgadas", "32 Gb", "2 Gb", 48000);
const celular3 = CelularGamaMedia("Samsung","S10+","12 Mpx", "7 pulgadas","128 Gb", "8 Gb", 350000,"Si","Si",3,"Si");
const celular4 = CelularGamaMedia("Samsung","S20","16 Mpx", "7,2 pulgadas","128 Gb", "8 Gb", 450000,"Si","Si",3,"Si");
const celular5 = CelularAltaGama("Samsung","S23 Ultra","24 Mpx", "8,6 pulgadas","516 Gb", "12 Gb", 1000000,"Si","Si",3,"Si","Si");
const celular6 = CelularAltaGama("Iphone","14 Pro Max","12 Mpx", "7,8 pulgadas","516 Gb", "8 Gb", 1200000,"Si","Si",3,"Si","Si");


