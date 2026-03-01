# Tasks for React Calculator

This file lists the actionable tasks for the React Calculator project.

- [x] Initialize project scaffold (create React app or minimal src/)
- [x] Create top-level `src/` structure and folders (`components`, `utils`, `styles`)
- [x] Add entry files: `index.js` and `App.jsx`
- [x] Create core components: `Calculator.jsx`, `Display.jsx`, `Button.jsx`
- [x] Add optional `History.jsx` component with UI placeholder
- [x] Create `styles/calculator.css` with dark responsive layout
- [x] Add `utils/expressionParser.js` file (parser module entry)
- [x] Parser: Implement tokenizer (numbers, operators, parentheses, decimals)
- [x] Parser: Implement Shunting Yard algorithm to produce postfix tokens
- [x] Parser: Implement postfix evaluator with safe math and divide-by-zero detection
- [x] Integrate parser with `Calculator.jsx` and evaluation button (`=`)
- [ ] UI logic: prevent invalid operator stacking and handle parentheses input
- [x] History: store last 5 calculations and persist to `localStorage`
- [ ] Accessibility & keyboard: add keyboard input, ARIA labels, focus states
- [ ] Tests: add unit tests for parser (tokenizer, shunting-yard, evaluator)
- [ ] Tests: add simple component render tests for `Calculator` and `Display`
- [ ] Deployment: add `homepage` to `package.json` and configure GitHub Pages workflow
- [ ] CI: add GitHub Actions to run tests and build on push
- [ ] Documentation: update `README.md` with install, run, test, and deploy instructions
- [ ] Polish: hover effects, responsive tweaks, and final QA
