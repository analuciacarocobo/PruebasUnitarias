const suma = require('./suma');

test('Sumar 5 y 5 debe ser igual a 10', () => {
       expect(suma(5, 5)).toBe(10);
 });

 test('Sumar 3 y 7 debe ser igual a 10', () => {
    expect(suma(3, 7)).toBe(10);
});

test('Sumar -2 y 8 debe ser igual a 6', () => {
    expect(suma(-2, 8)).toBe(6);
});

test('Sumar -36 y 25 debe ser igual a -11', () => {
    expect(suma(-36,25)).toBe(-11);
});

test('Sumar -4 y 5 debe ser igual a 1', () => {
    expect(suma(-4, 5)).toBe(1);
});