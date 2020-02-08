var math = require('./math');

test('Adding 2 and 3', () => {
    expect( math.add([ 2, 3 ]) ).toBe(5);
});

test('Adding 2, 3, and 4', () => {
    expect( math.add([2, 3, 4]) ).toBe(9);
});

test('Division 10/2', () => {
    expect( math.div(10, 2) ).toBe(5);
});

test('Division by zero', () => {
    expect( math.div(10, 0) ).toBe('Error');
});
