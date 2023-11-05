const multi = require('./multi');

test('multi 5 y 2 debe ser igual a 10 ', () => {
    expect(multi(5, 2)).toBe(10);
});

test('multi 6 y 2 debe ser igual a 12', () => {
    expect(multi(6, 2)).toBe(12);
});

test('multi -7 y 8 debe ser igual a -56', () => {
    expect(multi(-7, 8)).toBe(-56);
});

test('multi 12 y -2 debe ser igual a -24', () => {
    expect(multi(12, -2)).toBe(-24);
});

test('multi 9.5 y 4 debe ser igual a 38', () => {
    expect(multi(9.5, 4)).toBe(38);
});