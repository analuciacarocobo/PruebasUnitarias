const area = require('./area');

test('area 9 y 2 debe ser igual a 9', () => {
    expect(area(9, 2)).toBe(9);
});

test('area 15 y 8 debe ser igual a 60', () => {
    expect(area(15, 8)).toBe(60);
});

test('area 9 y 6 debe ser igual a 27', () => {
    expect(area(9, 6)).toBe(27);
});

test('area 3 y 2 debe ser igual a 3', () => {
    expect(area(3, 2)).toBe(3);
});

test('area 13 y 5  debe ser igual a 32.5', () => {
    expect(area(13, 5)).toBe(32.5);
});