class Calculadora {
    sumar(a, b) {
      return a + b;
    }
  
    restar(a, b) {
      return a - b;
    }
  
    multiplicar(a, b) {
      return a * b;
    }
  
    dividir(a, b) {
      if (b === 0) {
        throw new Error('No se puede dividir por cero');
      }
      return a / b;
    }
  }
  
  // Uso de la clase Calculadora
  const miCalculadora = new Calculadora();
  console.log('Suma:', miCalculadora.sumar(5, 3)); // Devuelve 8
  console.log('Resta:', miCalculadora.restar(10, 4)); // Devuelve 6
  console.log('Multiplicación:', miCalculadora.multiplicar(2, 6)); // Devuelve 12
  console.log('División:', miCalculadora.dividir(10, 2)); // Devuelve 5
  