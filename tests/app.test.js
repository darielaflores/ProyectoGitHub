const { secureApp } = require("../src/index");

console.log("Ejecutando tests...");

if (secureApp() !== "Aplicación segura funcionando") {
  console.error("❌ Test fallido");
  process.exit(1);
}

console.log("Tests correctos");
