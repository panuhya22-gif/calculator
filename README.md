# React Calculator

A modern, production-style React calculator application with safe expression evaluation, operator precedence, and history persistence.

## 🎯 Features

- ✅ **Arithmetic Operations**: `+`, `-`, `×`, `÷`
- ✅ **Correct Operator Precedence**: Respects BODMAS/PEMDAS
- ✅ **Safe Evaluation**: Uses Shunting-Yard algorithm, no `eval()`
- ✅ **Error Handling**: Division by zero, invalid expressions
- ✅ **Input Validation**: Prevents operator stacking, multiple decimals
- ✅ **Keyboard Support**: Enter (=), Escape (Clear), Backspace
- ✅ **History**: Last 5 calculations with localStorage persistence
- ✅ **Accessibility**: ARIA labels, semantic HTML
- ✅ **Dark Theme**: Responsive CSS Grid, mobile friendly

## 🚀 Quick Start

```bash
npm install
npm start          # Dev server
npm run build      # Production build
npm test           # Run parser tests
npm run deploy     # Deploy to GitHub Pages
```

## 🧮 Usage

**Mouse**: Click buttons to build expression, press `=`  
**Keyboard**: Type numbers/operators, press `Enter`, `Escape` to clear

## 📦 Deployment

Update `package.json` homepage, then:
```bash
npm run deploy
```

See **[DETAILED README](./README_DETAILED.md)** for full documentation.