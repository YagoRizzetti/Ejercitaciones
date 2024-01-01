dineroCofla = prompt("Cuanto dinero tiene Cofla?:");
dineroRoberto = prompt("Cuanto dinero tiene Roberto?:");
dineroJuan = prompt("Cuanto dinero tiene Juan?:");

precioPalitoAgua = 2;
precioPalitoCrema = 5;
precioBombonCrocante = 7;
precioBombonEscoses = 8;
precioBombonSuizo = 10;
precioPoteHelado1kg = 50;
precioPoteHeladoMediokg = 30;

if (dineroCofla >= precioPalitoAgua && dineroCofla < precioPalitoCrema){
    sobrante = dineroCofla-precioPalitoAgua
    alert("Cofla Puede comprar un palito de agua y le sobra una cantidad de $"+sobrante)
}
else if(dineroCofla >= precioPalitoCrema && dineroCofla < precioBombonCrocante){
    sobrante = dineroCofla-precioPalitoCrema
    alert("Cofla Puede comprar un palito de crema y le sobra una cantidad de $"+sobrante)
}
else if(dineroCofla >= precioBombonCrocante && dineroCofla < precioBombonEscoses){
    sobrante = dineroCofla-precioBombonCrocante
    alert("Cofla Puede comprar un Bombon Crocante y le sobra una cantidad de $"+sobrante)
}
else if(dineroCofla >= precioBombonEscoses && dineroCofla < precioBombonSuizo){
    sobrante = dineroCofla-precioBombonEscoses
    alert("Cofla Puede comprar un Bombon Escoses y le sobra una cantidad de $"+sobrante)
}
else if(dineroCofla >= precioBombonSuizo && dineroCofla < precioPoteHeladoMediokg){
    sobrante = dineroCofla-precioBombonSuizo
    alert("Cofla Puede comprar un Bombon Suizo y le sobra una cantidad de $"+sobrante)
}
else if(dineroCofla >= precioPoteHeladoMediokg && dineroCofla < precioPoteHelado1kg){
    sobrante = dineroCofla-precioPoteHeladoMediokg
    alert("Cofla Puede comprar un Pote de helado de medio Kg y le sobra una cantidad de $"+sobrante)
}
else if(dineroCofla >= precioPoteHelado1kg){
    sobrante = dineroCofla-precioPoteHelado1kg
    alert("Cofla Puede comprar un Pote de Helado de 1Kg y le sobra una cantidad de $"+sobrante)
}
else{
    alert("Cofla No Puede Comprar Nada")
}


if (dineroRoberto >= precioPalitoAgua && dineroRoberto < precioPalitoCrema){
    sobranteRoberto = dineroRoberto-precioPalitoAgua
    alert("Roberto Puede comprar un palito de agua y le sobra una cantidad de $"+sobranteRoberto)
}
else if(dineroRoberto >= precioPalitoCrema && dineroRoberto < precioBombonCrocante){
    sobranteRoberto = dineroRoberto-precioPalitoCrema
    alert("Roberto Puede comprar un palito de crema y le sobra una cantidad de $"+sobranteRoberto)
}
else if(dineroRoberto >= precioBombonCrocante && dineroRoberto < precioBombonEscoses){
    sobranteRoberto = dineroRoberto-precioBombonCrocante
    alert("Roberto Puede comprar un Bombon Crocante y le sobra una cantidad de $"+sobranteRoberto)
}
else if(dineroRoberto >= precioBombonEscoses && dineroRoberto < precioBombonSuizo){
    sobranteRoberto = dineroRoberto-precioBombonEscoses
    alert("Roberto Puede comprar un Bombon Escoses y le sobra una cantidad de $"+sobranteRoberto)
}
else if(dineroRoberto >= precioBombonSuizo && dineroRoberto < precioPoteHeladoMediokg){
    sobranteRoberto = dineroRoberto-precioBombonSuizo
    alert("Roberto Puede comprar un Bombon Suizo y le sobra una cantidad de $"+sobranteRoberto)
}
else if(dineroRoberto >= precioPoteHeladoMediokg && dineroRoberto < precioPoteHelado1kg){
    sobranteRoberto = dineroRoberto-precioPoteHeladoMediokg
    alert("Roberto Puede comprar un Pote de helado de medio Kg y le sobra una cantidad de $"+sobranteRoberto)
}
else if(dineroRoberto >= precioPoteHelado1kg){
    sobranteRoberto = dineroRoberto-precioPoteHelado1kg
    alert("Roberto Puede comprar un Pote de Helado de 1Kg y le sobra una cantidad de $"+sobranteRoberto)
}
else{
    alert("Roberto No Puede Comprar Nada")
}

if (dineroJuan >= precioPalitoAgua && dineroJuan < precioPalitoCrema){
    sobranteJuan = dineroJuan-precioPalitoAgua
    alert("Juan Puede comprar un palito de agua y le sobra una cantidad de $"+sobranteJuan)
}
else if(dineroJuan >= precioPalitoCrema && dineroJuan < precioBombonCrocante){
    sobranteJuan = dineroJuan-precioPalitoCrema
    alert("Juan Puede comprar un palito de crema y le sobra una cantidad de $"+sobranteJuan)
}
else if(dineroJuan >= precioBombonCrocante && dineroJuan < precioBombonEscoses){
    sobranteJuan = dineroJuan-precioBombonCrocante
    alert("Juan Puede comprar un Bombon Crocante y le sobra una cantidad de $"+sobranteJuan)
}
else if(dineroJuan >= precioBombonEscoses && dineroJuan < precioBombonSuizo){
    sobranteJuan = dineroJuan-precioBombonEscoses
    alert("Juan Puede comprar un Bombon Escoses y le sobra una cantidad de $"+sobranteJuan)
}
else if(dineroJuan >= precioBombonSuizo && dineroJuan < precioPoteHeladoMediokg){
    sobranteJuan = dineroJuan-precioBombonSuizo
    alert("Juan Puede comprar un Bombon Suizo y le sobra una cantidad de $"+sobranteJuan)
}
else if(dineroJuan >= precioPoteHeladoMediokg && dineroJuan < precioPoteHelado1kg){
    sobranteJuan = dineroJuan-precioPoteHeladoMediokg
    alert("Juan Puede comprar un Pote de helado de medio Kg y le sobra una cantidad de $"+sobranteJuan)
}
else if(dineroJuan >= precioPoteHelado1kg){
    sobranteJuan = dineroJuan-precioPoteHelado1kg
    alert("Cofla Puede comprar un Pote de Helado de 1Kg y le sobra una cantidad de $"+sobranteJuan)
}
else{
    alert("Juan No Puede Comprar Nada")
}