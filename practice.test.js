/* ******* *
 * Task 01 *
 ********* */
const stringLength = (string) => string.length;

test('hamid should return 5', () => {
  expect(stringLength('h')).toBe(1);
});

/* ******* *
 * Task 02 *
 ********* */
const reverseString = (string) => [...string].reverse().join('');
test('hamid should return dimad', () => {
  expect(reverseString('hamid')).toBe('dimah');
});

/* ******* *
 * Task 03 *
 ********* */
class Calculator {
  static add = (a, b) => a + b;
  static subtract = (a, b) => a - b;
  static divide = (a, b) => a / b;
  static multiply = (a, b) => a * b;
}

describe('Test Calculator', () => {
  // Add
  test('10 + 10 should be 20', () => {
    expect(Calculator.add(10, 10)).toBe(20);
  });

  // Subtract
  test('20 - 10 should be 10', () => {
    expect(Calculator.subtract(20, 10)).toBe(10);
  });

  // Multiply
  test('10 * 10 should be 100', () => {
    expect(Calculator.multiply(10, 10)).toBe(100);
  });

  // Divide
  test('20 / 10 should be 2', () => {
    expect(Math.round(Calculator.divide(20, 10))).toBe(2);
  });
});
