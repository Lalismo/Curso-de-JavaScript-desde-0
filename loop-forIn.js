/*
for in se utiliza para iterar objetos numerables y se componen por
 propiedades y que a su vez tiene un valor

for (variable in objeto){
    codigo a ejecutar
}
 */

const listaDeCompras = {
    manzana : 5,
    pera : 3,
    naranja: 2,
    uva: 1
}

for (fruta in listaDeCompras){
    console.log(fruta)
}
console.log("----------------")
for (fruta in listaDeCompras){
    console.log(`${fruta} : ${listaDeCompras[fruta]}`)
}