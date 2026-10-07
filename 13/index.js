
let contador = 0;
let frutas = ["uva", "manzana", "pera", "mandarina", "naranja"];
while (contador < frutas.length) {
console.log(`Fruta ${contador + 1}: ${frutas[contador]}`);
contador++; //Actualizar para evitar loop infinito
}

console.log(frutas[1]) 

const productos=[150,80,200]
const totalVentas = productos
.filter(p => p.precio > 100) 
.map(p => p.precio) 
.reduce((a, b) => a + b, 0);

console.log(totalVentas); // 350

/*
const totalVentas = productos.reduce((acc, p) => p.precio > 100 ? acc + p.precio : acc, 0);
console.log(totalVentas); // 350
*/
