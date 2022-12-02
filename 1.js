function contarOvejas(ovejas) {
  return ovejas.filter(
    (sheep) =>
      sheep.color === "rojo" &&
      sheep.name.toUpperCase().includes("N") &&
      sheep.name.toUpperCase().includes("A")
  );
}
