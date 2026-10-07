/* Esta función (Callback) solo sabe saludar */
const saludarAmigo = (nombre) => {
console.log(`¡Qué tal, ${nombre}!`);
};
/* Esta es la función principal (HOF) que acepta una función intrusa como
parámetro */
function procesarUsuario(nombreUsuario, funcionIntrusa) {
// Hace cosas...
console.log("Procesando en base de datos...");
// Al terminar, ejecuta la función que le pasaron por parámetro
funcionIntrusa(nombreUsuario);
}
/* Le inyectamos la función 'saludarAmigo' (Sin paréntesis, porque no
queremos ejecutarla todavía, solo se la entregamos) */
procesarUsuario("Lucas", saludarAmigo);

// 1. Búsqueda: .includes() -> Devuelve true o false si el string contiene
// el valor pasado por parámetro.
const frase = "Aprender JavaScript es genial";
console.log(frase.includes("JavaScript")); // true

// 2. Limpieza: .trim() -> Elimina espacios y saltos de línea al inicio y
// final, además considera los espacios vacíos “ ” como strings inválidos “”.
const emailSucio = "   usuario@correo.com \n";
console.log(emailSucio.trim()); // "usuario@correo.com"

// 3. Modificación: .toUpperCase() convierte en mayúsculas un string. /
// .toLowerCase() convierte en minúsculas un string.
console.log("hola".toUpperCase()); // "HOLA"

// 4. Extracción: .slice(inicio, fin) -> Corta un pedazo
console.log(frase.slice(9, 19)); // "JavaScript"

// 5. División: .split(separador) -> Rompe el texto y lo vuelve un Array
const frutasTexto = "uva,manzana,pera";
let arrayFrutas = frutasTexto.split(",");
console.log(arrayFrutas); // ["uva", "manzana", "pera"]

// Generar un número entero aleatorio entre 1 y 10
let min = 1;
let max = 10;
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Tu número de la suerte es: ${numeroAleatorio}`);

/* Usamos llaves { } para indicarle a JS que estamos creando un Objeto
Literal */
const perfilUsuario = {
// Clave : Valor
nombre: "Lucas",
// Propiedad (String)
edad: 28,
// Propiedad (Number)esPremium: true,
// Propiedad (Boolean)
// Método: Una acción que el objeto puede realizar
saludar() {
console.log(`Hola, mi nombre es ${this.nombre}`);
}
};

/* "Ve al objeto 'perfilUsuario', sácale una copia a 'nombre' y 'edad', y
crea dos variables flotantes con esos mismos nombres" */
const { nombre, edad } = perfilUsuario;
console.log(nombre); // Imprime "Lucas" directamente, sin usar el punto.

// Tienes un objeto
const cuentaBancaria = {
saldo: 1000 };
// . Tu compañero hace 
const miCuenta = cuentaBancaria; // y luego ejecuta 
miCuenta.saldo = 0;// . Sabiendo cómo funciona la Memoria de Referencia
// de los objetos, ¿cuánto dinero le quedó a cuentaBancaria y por qué?
console.log(cuentaBancaria.saldo); // 0, porque miCuenta y cuentaBancaria apuntan al mismo objeto en memoria.
console.log(miCuenta.saldo); // 0, porque miCuenta y cuentaBancaria apuntan al mismo objeto en memoria.


// Tienes un objeto
let original = 100
let copia = original;
console.log(copia); // 100
console.log(original); // 100   

cual es la diferencia entre let y const en JavaScript?
En JavaScript, `let` y `const` son dos formas de declarar variables, pero tienen diferencias importantes en cuanto a su mutabilidad y alcance:
1. **Mutabilidad**:
   - `let`: Permite reasignar el valor de la variable después de su declaración. Por ejemplo:
     ```javascript
     let edad = 25;
     edad = 26; // Esto es válido
     ```
   - `const`: No permite reasignar el valor de la variable después de su declaración. Una vez que se asigna un valor, no se puede cambiar. Por
    ejemplo:
        ```javascript
        const nombre = "Juan";
        nombre = "Pedro"; // Esto generará un error
        ```

