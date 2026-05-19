const { sum } = require("../src/index");

console.log("Ejecutando tests...");

if (sum(2, 3) !== 5) {
  console.error("❌ Test fallido");
  process.exit(1);
}

console.log("✅ Tests correctos");
