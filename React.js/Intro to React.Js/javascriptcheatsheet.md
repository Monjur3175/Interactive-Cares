# JavaScript Web Development Cheatsheet
## 📦 VARIABLES & DATA TYPES
### Declaration
```
let variable = "can change";     // Block-scoped, mutable
const constant = "cannot change"; // Block-scoped, immutable
var old = "avoid";               // Function-scoped (legacy)
```
### Primitive Types
```
typeof "text"    // "string"
typeof 42        // "number"
typeof true      // "boolean"
typeof undefined // "undefined"
typeof null      // "object" (bug!)
typeof Symbol()  // "symbol"
typeof 10n       // "bigint"
```
### Type Conversion
```
String(123)      // "123"
Number("123")    // 123
Boolean(1)       // true
parseInt("10")   // 10
parseFloat("10.5") // 10.5
```
## 🔢 OPERATORS
### Arithmetic
```
a + b    // Addition
a - b    // Subtraction
a * b    // Multiplication
a / b    // Division
a % b    // Remainder
a ** b   // Exponentiation (ES7)
a++      // Post-increment
++a      // Pre-increment
```
### Comparison
```
a == b   // Loose equality (type coercion)
a === b  // Strict equality (no coercion)
a != b   // Loose not equal
a !== b  // Strict not equal
a > b    // Greater than
a < b    // Less than
a >= b   // Greater or equal
a <= b   // Less or equal
```
### Logical
```
a && b   // AND (both true)
a || b   // OR (either true)
!a       // NOT (inverse)

// ES6+ Operators
a ?? b   // Nullish coalescing
a?.b     // Optional chaining
...arr   // Spread operator
```
## 📊 ARRAYS
### Creation
```
const arr = [1, 2, 3];
const arr2 = new Array(5).fill(0);
```
### Common Methods
```
arr.push(4)           // Add to end → [1,2,3,4]
arr.pop()             // Remove from end → [1,2,3]
arr.unshift(0)        // Add to start → [0,1,2,3]
arr.shift()           // Remove from start → [1,2,3]
arr.concat([4,5])     // Merge → [1,2,3,4,5]
arr.slice(1,3)        // Copy portion → [2,3]
arr.splice(1,1,'a')   // Remove/add → [1,'a',3]
arr.indexOf(2)        // Find index → 1
arr.includes(2)       // Check exists → true
arr.join('-')         // Join to string → "1-2-3"
```
### ES6+ Methods
```
arr.map(x => x*2)     // Transform → [2,4,6]
arr.filter(x => x>1)  // Filter → [2,3]
arr.find(x => x>1)    // Find first → 2
arr.findIndex(x=>x>1) // Find index → 1
arr.reduce((a,b)=>a+b,0) // Accumulate → 6
arr.some(x => x>2)    // Any match → true
arr.every(x => x>0)   // All match → true
arr.sort((a,b)=>a-b)  // Sort numeric
arr.reverse()         // Reverse
```
### Destructuring
```
const [first, ...rest] = arr; // first=1, rest=[2,3]
const newArr = [...arr, 4];   // [1,2,3,4]
```
## 🧍 OBJECTS
### Creation
```
const obj = { key: 'value', num: 42 };
const obj2 = new Object();
```
### Access
```
obj.key              // Dot notation → 'value'
obj['key']           // Bracket notation → 'value'
const {key} = obj;   // Destructuring → key='value'
const {key:alias} = obj; // Rename → alias='value'
```
### Methods
```
Object.keys(obj)     // ['key', 'num']
Object.values(obj)   // ['value', 42]
Object.entries(obj)  // [['key','value'], ['num',42]]
Object.assign({}, obj, {new:true}) // Merge
{...obj, new:true}   // Spread merge (ES6)
obj.hasOwnProperty('key') // Check property → true
'key' in obj         // Check property (including inherited)
```
### ES6+ Features
```
const dynamicKey = 'id';
const es6Obj = {
  [dynamicKey]: 123,      // Computed key
  method() { },           // Method shorthand
  get computed() { },     // Getter
  set value(val) { },     // Setter
  ...spread              // Spread properties
};
```
## ⚙️ FUNCTIONS
### Declaration Types
```
function name(params) { }          // Hoisted
const name = function(params) { }  // Function expression
const arrow = (params) => { }      // Arrow function (no 'this')
(param) => expression              // Implicit return
async function name() { }          // Async function
```
### Parameters
```
function fn(a, b=10) { }           // Default parameter
function fn(...args) { }           // Rest parameters
function fn({a,b}) { }             // Destructuring parameter
```
### **this** Behavior
```
function regular() { this }        // Depends on call
const arrow = () => { this }       // Inherits from parent scope
```
### Common Patterns
```
// IIFE (Immediately Invoked)
(function() { })();

// Callback
fn(() => { });

// Closure
function outer() { 
  let secret; 
  return function inner() { 
    return secret; 
  }; 
}

// Currying
const add = a => b => a + b;
```
## 🔄 CONTROL FLOW
### Conditionals
```
if (condition) { }
else if (condition) { }
else { }

condition ? trueExpr : falseExpr  // Ternary

switch(value) {
  case 1: break;
  case 2: break;
  default: break;
}
```
### Loops
```
for (let i=0; i<5; i++) { }
for (const item of array) { }
for (const key in object) { }
while (condition) { }
do { } while (condition)
```
### Control
```
break;      // Exit loop
continue;   // Skip to next iteration
return;     // Exit function
throw new Error('msg'); // Throw error
```
## 🎯 **this** BINDING QUICK REFERENCE
### Regular Functions:
```
fn()                    // Global/undefined (strict)
obj.method()            // obj
new Constructor()       // New instance
fn.call(ctx, args)      // ctx (explicit)
fn.apply(ctx, [args])   // ctx (explicit)
fn.bind(ctx)            // ctx (bound)
```
### Arrow Functions:
```
() => { }              // Inherits from parent scope
                       // (Lexical this, cannot be changed)
```
## 🏛️ CLASSES & OOP
### javascript
```
class ClassName {
  constructor(params) {
    this.property = value;
  }
  
  method() { }
  
  get getter() { }
  set setter(val) { }
  
  static staticMethod() { }
  
  #privateField = "secret"; // Private (ES2022)
}

class Child extends Parent {
  constructor(params) {
    super(params); // Call parent constructor
  }
}

// Instantiation
const instance = new ClassName(args);
instance instanceof ClassName; // true
```
## 🎛️ DOM MANIPULATION
### Selection
```
document.getElementById('id')
document.querySelector('.class')
document.querySelectorAll('.class')
element.closest('.parent')
element.matches('.selector')
```
### Traversal
```
element.parentElement
element.children
element.firstElementChild
element.lastElementChild
element.previousElementSibling
element.nextElementSibling
```
### Manipulation
```
document.createElement('div')
element.appendChild(child)
element.removeChild(child)
element.innerHTML = '<p>text</p>'
element.textContent = 'text'
element.setAttribute('name', 'value')
element.getAttribute('name')
element.classList.add('class')
element.classList.remove('class')
element.classList.toggle('class')
element.style.property = 'value'
```
## 🎪 EVENTS
### Common Events
```
'click', 'dblclick'
'mouseenter', 'mouseleave', 'mousemove'
'keydown', 'keyup', 'keypress'
'submit', 'change', 'input', 'focus', 'blur'
'load', 'DOMContentLoaded', 'resize', 'scroll'
```
## Event Object Properties
```
event.target      // Element that triggered
event.currentTarget // Element with listener
event.preventDefault() // Stop default action
event.stopPropagation() // Stop bubbling
```
### Event Delegation
```
parent.addEventListener('click', (e) => {
  if (e.target.matches('.child')) {
    // Handle child click
  }
});
```
## ⏳ ASYNCHRONOUS JS
### Promises
```
const promise = new Promise((resolve, reject) => {
  if (success) resolve(value);
  else reject(error);
});

promise
  .then(value => { })
  .catch(error => { })
  .finally(() => { });
```
### Promise Methods
```
Promise.all([p1, p2])        // All must succeed
Promise.allSettled([p1, p2]) // Wait for all to settle
Promise.race([p1, p2])       // First to settle wins
Promise.any([p1, p2])        // First to succeed wins
```
### Async/Await
```
async function fetchData() {
  try {
    const data = await fetch(url);
    return await data.json();
  } catch (error) {
    console.error(error);
  }
}
```
### Fetch API
```
fetch(url, {
  method: 'GET|POST|PUT|DELETE',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(data => console.log(data));
```
## 💾 BROWSER STORAGE
```
// localStorage (persistent)
localStorage.setItem('key', 'value');
localStorage.getItem('key'); // 'value'
localStorage.removeItem('key');
localStorage.clear();
localStorage.length;

// sessionStorage (tab session only)
sessionStorage.setItem('key', 'value');

// Cookies
document.cookie = "name=value; max-age=3600; path=/";
```
## 🔧 ERROR HANDLING
```
try {
  // Risky code
  throw new Error('Message');
} catch (error) {
  console.error(error.name);     // 'Error'
  console.error(error.message);  // 'Message'
  console.error(error.stack);    // Stack trace
} finally {
  // Always executes
}

// Custom Errors
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}
```
## ✨ ES6+ FEATURES QUICK REFERENCE
```
// Arrow Functions
const sum = (a, b) => a + b;

// Template Literals
`Hello ${name}!`

// Destructuring
const [a, b] = array;
const {x, y} = object;

// Default Parameters
function fn(param = defaultValue) { }

// Rest/Spread
function fn(...args) { }
const newArr = [...oldArr, newItem];
const newObj = {...oldObj, newProp};

// Optional Chaining (ES2020)
obj?.prop?.nested?.method?.();

// Nullish Coalescing (ES2020)
const value = input ?? 'default';

// Logical Assignment (ES2021)
a ||= b; // a = a || b
a &&= b; // a = a && b
a ??= b; // a = a ?? b
```
## 📐 ARRAY METHODS CHEAT TABLE

| Method      | Returns           | Mutates | Use Case          |
|-------------|-------------------|---------|-------------------|
| push()      | New length        | ✅      | Add to end        |
| pop()       | Removed element   | ✅      | Remove from end   |
| unshift()   | New length        | ✅      | Add to start      |
| shift()     | Removed element   | ✅      | Remove from start |
| slice()     | New array         | ❌      | Copy portion      |
| splice()    | Removed items     | ✅      | Remove/add items  |
| concat()    | New array         | ❌      | Merge arrays      |
| map()       | New array         | ❌      | Transform each    |
| filter()    | New array         | ❌      | Filter elements   |
| reduce()    | Single value      | ❌      | Accumulate        |
| find()      | First match       | ❌      | Find element      |
| some()      | Boolean           | ❌      | Test any element  |
| every()     | Boolean           | ❌      | Test all elements |

## 🔍 STRING METHODS
```
str.length                    // Length
str.includes('sub')          // Check substring
str.indexOf('sub')           // First index
str.startsWith('sub')        // Check start
str.endsWith('sub')          // Check end
str.slice(0, 5)              // Extract substring
str.split(',')               // Split to array
str.replace('old', 'new')    // Replace first
str.replaceAll('old', 'new') // Replace all (ES2021)
str.toLowerCase()            // To lowercase
str.toUpperCase()            // To uppercase
str.trim()                   // Remove whitespace
```
## 📅 DATE & TIME
```
const now = new Date();

// Get Methods
now.getFullYear()      // 2024
now.getMonth()         // 0-11 (0 = Jan)
now.getDate()          // 1-31
now.getHours()         // 0-23
now.getMinutes()       // 0-59
now.getSeconds()       // 0-59

// Formatting
now.toDateString()     // "Mon Jan 15 2024"
now.toISOString()      // "2024-01-15T10:30:00.000Z"
now.toLocaleDateString() // Localized date string
```
## 🔍 REGULAR EXPRESSIONS
```
// Creation
const regex = /pattern/flags;

// Flags
i  // Case-insensitive
g  // Global (all matches)
m  // Multiline

// Methods
regex.test('string')   // Boolean match
'string'.match(regex)  // Array of matches
'string'.replace(regex, 'replacement')

// Common Patterns
/\d+/       // One or more digits
/\w+/       // Word characters
/\s+/       // Whitespace
/^start/    // Starts with
/end$/      // Ends with
/[abc]/     // Any of a, b, c
/a{2,4}/    // 2 to 4 a's
```
## 🚀 PERFORMANCE TIPS
```
// 1. Cache DOM queries
const $el = document.getElementById('id');

// 2. Use event delegation
document.addEventListener('click', (e) => {
  if (e.target.matches('.btn')) handleClick();
});

// 3. Debounce rapid events
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// 4. Use DocumentFragment for multiple DOM inserts
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  fragment.appendChild(document.createElement('div'));
}
document.body.appendChild(fragment);
```
## 🛠️ DEBUGGING
```
console.log('Message')           // Basic log
console.info('Info')             // Informational
console.warn('Warning')          // Warning
console.error('Error')           // Error
console.table(data)              // Table view
console.time('timer')            // Start timer
console.timeEnd('timer')         // End timer
console.trace()                  // Stack trace
debugger;                        // Breakpoint
```
## 📌 QUICK REFERENCE CARD
```
Type Checking
javascript
Array.isArray(arr)      // Check array
typeof variable         // Primitive type
variable instanceof Class // Check instance
Number.isNaN(value)     // Check NaN
```
## Truthy/Falsy Values
```
// Falsy: false, 0, "", null, undefined, NaN
// Truthy: Everything else (including [], {})
```
## Common Shortcuts
```
!!value          // Convert to boolean
+value           // Convert to number
value || default // Default value (falsy)
value ?? default // Default value (null/undefined)
```
## Quick Conversions
```
JSON.stringify(obj)    // Object → JSON string
JSON.parse(json)       // JSON string → Object
Object.fromEntries(arr) // Array → Object (ES2019)
```
## 🎯 BEST PRACTICES

- Use **const** by default, **let** when needed
- Always use **===** instead of **==**
- Use template literals for strings
- Destructure objects/arrays
- Use arrow functions for callbacks
- Cache DOM queries
- Use event delegation
- Handle errors properly
- Write modular code
-comment complex logic