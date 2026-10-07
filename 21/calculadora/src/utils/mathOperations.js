export const mathOperations = {
  sumar: (a, b) => a + b,
  restar: (a, b) => a - b,
  multiplicar: (a, b) => a * b,
  dividir: (a, b) => {
    if (b === 0) {
      console.error("No se puede dividir por cero");
      //return 0; 
    }
    return a / b;
  }
}