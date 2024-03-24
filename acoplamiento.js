// Clase Orden
class Orden {
    constructor(producto, cantidad) {
      this.producto = producto;
      this.cantidad = cantidad;
    }
  
    verificarDisponibilidad() {
      // Aquí es donde se produce el acoplamiento
      const inventario = new Inventario();
      return inventario.verificarStock(this.producto, this.cantidad);
    }
  }
  
  // Clase Inventario
  class Inventario {
    constructor() {
      this.stock = {
        'producto1': 8,
        'producto2': 0,
        // Otros productos y cantidades en el inventario
      };
    }
  
    verificarStock(producto, cantidad) {
      if (this.stock[producto] >= cantidad) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  // Uso de las clases
  const orden1 = new Orden('producto1', 8);
  console.log('¿Producto disponible?', orden1.verificarDisponibilidad()); // Devuelve true o false
  