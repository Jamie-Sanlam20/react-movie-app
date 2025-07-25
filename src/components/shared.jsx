// Export
// 1. Named - Preffered - Multiple per file
// 2. Default - Per file only one default export

// Named Export
function double(n) {
  return n * 2;
}

// Named Export
const quote = "Super cool";

const sum = (a, b) => a + b;

// Good Practice
export { double, quote };
