const divi = require('./divi');

test('divi 8 entre 2 debe ser igual a 4', () => {
    expect(divi(8, 2)).toBe(4);
});

test('divi 10 entre 5debe ser igual a 2', () => {
    expect(divi(10, 5)).toBe(2);
});

test('divi -4 entre 2 debe ser igual a -2', () => {
    expect(divi(-4, 2)).toBe(-2);
});

test('divi 15 entre 3 debe ser igual a 5', () => {
    expect(divi(15, 3)).toBe(5);
});

test('divi 7.5 entre 2.5 debe ser igual a 3', () => {
    expect(divi(7.5, 2.5)).toBe(3);
});
