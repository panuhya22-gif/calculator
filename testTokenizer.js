const { tokenize } = require('./src/utils/expressionParser');

console.log(tokenize('12 + 34.5 - (6*7) / 8'));