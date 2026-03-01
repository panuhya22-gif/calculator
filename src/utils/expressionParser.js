// Purpose: Expression parser utility (tokenize → shunting-yard → evaluate)
// Inputs: `expression` (string)
// Outputs: numeric result or throws Error on invalid expression

// NOTE: Implementation will be completed in Task 2. For now export stubs.

export function tokenize(expr) {
  // Take an arithmetic expression string and break it into tokens.
  // Tokens can be numbers (including decimals), operators, and parentheses.
  // Spaces are ignored. Throws if an invalid character is found.
  const tokens = [];
  let numberBuffer = '';

  const pushNumber = () => {
    if (numberBuffer !== '') {
      tokens.push(numberBuffer);
      numberBuffer = '';
    }
  };

  for (let i = 0; i < expr.length; i++) {
    const ch = expr[i];

    // skip whitespace
    if (ch === ' ' || ch === '\t' || ch === '\n') {
      continue;
    }

    // part of a number (digit or decimal point)
    if ((ch >= '0' && ch <= '9') || ch === '.') {
      numberBuffer += ch;
      continue;
    }

    // operator or parenthesis
    if ('+-*/()'.includes(ch)) {
      pushNumber();
      tokens.push(ch);
      continue;
    }

    // if we get here, it's an unexpected character
    throw new Error(`Invalid character in expression: '${ch}'`);
  }

  // flush remaining number
  pushNumber();

  return tokens;
}

export function toPostfix(tokens) {
  // Shunting-Yard Algorithm: Convert infix tokens to postfix notation.
  // Respects operator precedence: * / > + -
  // All operators are left-associative.
  // Throws on mismatched parentheses.
  
  const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
  const output = [];
  const stack = [];
  
  for (const token of tokens) {
    // If token is a number, add to output
    if (!isNaN(token) && token !== '') {
      output.push(token);
      continue;
    }
    
    // If token is an operator
    if (precedence[token] !== undefined) {
      // Pop operators with >= precedence from stack to output
      while (
        stack.length > 0 &&
        stack[stack.length - 1] !== '(' &&
        precedence[stack[stack.length - 1]] >= precedence[token]
      ) {
        output.push(stack.pop());
      }
      stack.push(token);
      continue;
    }
    
    // If token is '('
    if (token === '(') {
      stack.push(token);
      continue;
    }
    
    // If token is ')'
    if (token === ')') {
      // Pop from stack to output until '(' is found
      while (stack.length > 0 && stack[stack.length - 1] !== '(') {
        output.push(stack.pop());
      }
      if (stack.length === 0) {
        throw new Error('Mismatched parentheses: unmatched )');
      }
      stack.pop(); // Remove the '('
      continue;
    }
  }
  
  // Pop all remaining operators to output
  while (stack.length > 0) {
    const op = stack.pop();
    if (op === '(') {
      throw new Error('Mismatched parentheses: unmatched (');
    }
    output.push(op);
  }
  
  return output;
}

export function evaluatePostfix(postfixTokens) {
  // Evaluate postfix (RPN) tokens safely.
  // Uses a stack: push numbers, pop two operands for each operator.
  // Throws on divide by zero or invalid expression.
  
  const stack = [];
  
  for (const token of postfixTokens) {
    // If token is a number, push to stack
    if (!isNaN(token) && token !== '') {
      stack.push(parseFloat(token));
      continue;
    }
    
    // If token is an operator, pop two operands and apply
    if ('+-*/'.includes(token)) {
      if (stack.length < 2) {
        throw new Error('Invalid expression: insufficient operands');
      }
      const b = stack.pop();
      const a = stack.pop();
      
      let result;
      switch (token) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          if (b === 0) {
            throw new Error('Division by zero');
          }
          result = a / b;
          break;
        default:
          throw new Error(`Unknown operator: ${token}`);
      }
      
      stack.push(result);
      continue;
    }
    
    // Unknown token
    throw new Error(`Unknown token: ${token}`);
  }
  
  // At the end, stack should have exactly one element (the result)
  if (stack.length !== 1) {
    throw new Error('Invalid expression: too many operands');
  }
  
  return stack[0];
}

export default function evaluate(expression) {
  // Main entry point: tokenize → toPostfix → evaluatePostfix
  // Returns numeric result or throws Error.
  if (!expression || expression.trim() === '') {
    throw new Error('Empty expression');
  }
  const tokens = tokenize(expression);
  const postfixTokens = toPostfix(tokens);
  return evaluatePostfix(postfixTokens);
}
