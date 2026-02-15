// Crear objeto
const persona = {
  nombre: "Lizeth",
  edad: 21,
  carrera: "Ingeniería en Sistemas"
};

// Convertir a JSON
const jsonData = JSON.stringify(persona);

// Convertir nuevamente a objeto
const objetoNuevo = JSON.parse(jsonData);

// Mostrar resultados
console.log("Objeto original:", persona);
console.log("JSON convertido:", jsonData);
console.log("Objeto nuevo:", objetoNuevo);