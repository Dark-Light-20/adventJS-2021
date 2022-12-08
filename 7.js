function contains(item, product) {
  if (item === product) {
    return true;
  } else if (typeof item === "object") {
    for (let box of Object.values(item)) {
      if (contains(box, product)) return true;
    }
  }
  return false;
}

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta", // <- ¡Está aquí!
    },
  },
};

const a1 = contains(almacen, "camiseta"); // true
console.log(a1);

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: "cd-rom",
      "otro-objeto": "disquette",
      "otra-cosa": "mando",
    },
  },
};

const a2 = contains(otroAlmacen, "gameboy");
console.log(a2);
