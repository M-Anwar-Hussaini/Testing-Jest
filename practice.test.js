/* ******* *
 * Task 01 *
 ********* */
const stringLength = (string) => string.length;

test('hamid should return 5', () => {
  expect(stringLength('h')).toBe(1);
});

/* ******* *
 * Task 01 *
 ********* */
const reverseString = string => [...string].reverse().join('');
test('hamid should return dimad', () => {
  expect(reverseString('hamid')).toBe('dimah');
})