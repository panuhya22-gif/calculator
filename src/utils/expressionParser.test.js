// Tests for expressionParser.js
const { tokenize, toPostfix, evaluatePostfix } = require('../src/utils/expressionParser');
const evaluate = require('../src/utils/expressionParser').default;

// Tokenizer tests
console.log('=== Tokenizer Tests ===');
console.log('Test 1:', JSON.stringify(tokenize('2 + 3 * 4')) === JSON.stringify(['2', '+', '3', '*', '4']) ? 'PASS' : 'FAIL');
console.log('Test 2:', JSON.stringify(tokenize('(10 - 5) / 2.5')) === JSON.stringify(['(', '10', '-', '5', ')', '/', '2.5']) ? 'PASS' : 'FAIL');

try {
  tokenize('2 @ 3');
  console.log('Test 3: FAIL (should throw on invalid char)');
} catch (e) {
  console.log('Test 3: PASS (throws on invalid char)');
}

// Shunting-Yard tests
console.log('\n=== Shunting-Yard Tests ===');
const tokens1 = tokenize('2 + 3 * 4');
const postfix1 = toPostfix(tokens1);
console.log('Test 4:', JSON.stringify(postfix1) === JSON.stringify(['2', '3', '4', '*', '+']) ? 'PASS' : 'FAIL', '(post

fix:', postfix1, ')');

// Evaluator tests
console.log('\n=== Evaluator Tests ===');
console.log('Test 5: 2 + 3 * 4 =', evaluate('2 + 3 * 4') === 14 ? 'PASS (14)' : 'FAIL');
console.log('Test 6: (2 + 3) * 4 =', evaluate('(2 + 3) * 4') === 20 ? 'PASS (20)' : 'FAIL');
console.log('Test 7: 10 / 2 - 3 =', evaluate('10 / 2 - 3') === 2 ? 'PASS (2)' : 'FAIL');

try {
  evaluate('5 / 0');
  console.log('Test 8: FAIL (should throw on divide by zero)');
} catch (e) {
  console.log('Test 8: PASS (throws on divide by zero)');
}

console.log('\n=== All Parser Tests Complete ===');
