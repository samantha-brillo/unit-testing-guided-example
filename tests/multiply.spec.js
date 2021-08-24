const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  test('should multiply two positive integers correctly', () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });
  test('el resul debe ser negativo al dividir un entero negativo y uno positivo', () => {
    const result = multiply(-1, 2);
    expect(result).toBe(-2);
  });
  test('deberia ser 0 al multiplicar cualquier num por 0', () => {
    const result = multiply(0, 2);
    expect(result).toBe(0);
  });
  // Our tests will be added here.
});
