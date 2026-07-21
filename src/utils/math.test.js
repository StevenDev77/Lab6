const { fibonacci, factorial } = require('./math');

describe('Funciones matemáticas (math.js)', () => {
    test('El fibonacci de 4 debe ser 3', () => {
        expect(fibonacci(4)).toBe(3);
    });

    test('El factorial de 5 debe ser 120', () => {
        expect(factorial(5)).toBe(120);
    });

    test('El factorial de 0 debe ser 1', () => {
        expect(factorial(0)).toBe(1);
    });

    test('El factorial de número negativo debe retornar un mensaje de error', () => {
        expect(factorial(-1)).toBe('No definido para negativos');
    });
});
