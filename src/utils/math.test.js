const { fibonacci, factorial } = require('./math');

describe('Pruebas unitarias para funciones matemáticas', () => {
    test('El fibonacci de 4 debe ser 3', () => {
        expect(fibonacci(4)).toBe(3);
    });

    test('El factorial de 5 debe ser 120', () => {
        expect(factorial(5)).toBe(120);
    });

    test('Debe retornar null al calcular negativos', () => {
        expect(factorial(-1)).toBeNull();
    });

    // Tests para Fibonacci
    test('Debe retornar null para números negativos en fibonacci', () => {
        expect(fibonacci(-5)).toBeNull();
    });
});
