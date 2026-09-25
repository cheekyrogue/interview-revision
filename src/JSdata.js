const data = [
	{
		id: 1,
		question: "What is the difference between let, const, and var?",
		answer:
			"Var is function-scoped, hoisted, and can be redeclared. Var attaches to the window object; let/const do not. Let and const are block-scoped and cannot be redeclared in the same scope. Const cannot be reassigned (but its properties are mutable). Let allows reassignment. ",
	},
	{
		id: 2,
		question: "What are JavaScript primitive data types?",
		answer:
			"JavaScript has 7 primitive types: string, number, bigint, boolean, undefined, symbol, and null. Primitives are immutable values and are compared by their value.",
	},
	{
		id: 3,
		question: "What is the difference between == and === ?",
		answer:
			"== performs type coercion before comparing (e.g., 1 == '1' is true). === compares both value and type without coercion (1 === '1' is false). Always use === to avoid unexpected bugs.",
	},
	{
		id: 4,
		question:
			"What is an Arrow Function, and how does it differ from a regular function?",
		answer:
			"Arrow functions have a shorter syntax and inherit this lexically from their surrounding scope (they don't have their own this). Regular functions bind their own this based on how they're called. Arrow functions also cannot be used as constructors with new.",
	},
	{
		id: 5,
		question: "Explain this in JavaScript.",
		answer:
			"this refers to the execution context. In a method, it points to the owning object. In a regular function (non-strict), it points to the global object (window). In arrow functions, it inherits from the outer scope. In React class components, you must bind event handlers or use arrow functions to preserve this.",
	},
	{
		id: 6,
		question: "What is a Closure?",
		answer:
			"A closure is a function that retains access to variables from its outer (lexical) scope even after the outer function has returned. Used heavily in React Hooks for preserving state across renders.",
	},
	{
		id: 7,
		question: "What is hoisting?",
		answer:
			"Hoisting describes how JavaScript processes declarations before executing code. var declarations are hoisted and initialized as undefined. Function declarations are hoisted with their definitions. let and const are hoisted but remain inaccessible in the temporal dead zone (TDZ) until their declaration is reached.",
	},
	{
		id: 8,
		question: "What is the Spread Operator (...) and Rest Parameter (...)?",
		answer:
			"Spread expands an iterable into individual elements: const newArr = [...oldArr, 4] or const newObj = { ...oldObj, key: 'value' }. Rest collects remaining arguments into an array: function logAll(...args) { console.log(args) }. Both are essential for immutable state updates in React.",
	},
	{
		id: 9,
		question: "What is Array Destructuring and Object Destructuring?",
		answer:
			"Destructuring extracts values into variables: const [first, second] = [1, 2] and const { name, age } = user. Used daily in React: const [count, setCount] = useState(0) and const { title } = props.",
	},
	{
		id: 10,
		question:
			"What is variable hoisting, and how does it affect functions vs. variables?",
		answer:
			"Hoisting is JavaScript's default behavior of moving declarations to the top of their current scope during the compilation phase. Var is hoisted and initialized as undefined; let and const are hoisted but remain uninitialized in the Temporal Dead Zone (TDZ) until execution reaches their line, throwing a ReferenceError if accessed early. Function Declarations (function foo(){}) are fully hoisted with their body, so they can be called before declaration. Function Expressions using var/let/const follow the hoisting rules of their respective variable keywords.",
	},
	{
		id: 11,
		question: "What is the difference between null and undefined?",
		answer:
			"undefined: Represents an unassigned or uninitialized variable by default (e.g., a function with no return value, or an uninitialized let variable). null: An explicit assignment representing the intentional absence of any value or object.",
	},
	{
		id: 12,
		question:
			"What is the difference between .map(), .forEach(), and .filter()?",
		answer:
			".map() returns a new array of the same length (transforms data) – used for rendering lists in React. .forEach() executes a function on each element but returns undefined (use for side effects only). .filter() returns a new array with elements that pass a test (reduces length).",
	},
	{
		id: 13,
		question: "What is a Pure Function?",
		answer:
			"A pure function always returns the same output for the same inputs and causes no side effects (no API calls, no DOM mutations, no modifying external state). React components aim to be pure, and reducers in useReducer must be pure functions.",
	},
	{
		id: 14,
		question: "What is the difference between a shallow copy and a deep copy?",
		answer:
			"A shallow copy copies top-level properties (spread {...obj} or Object.assign()). Nested objects still share the same reference. A deep copy copies all nested levels (structuredClone() or JSON.parse(JSON.stringify())). In React, you must create new copies of state objects to trigger re-renders.",
	},
	{
		id: 15,
		question: "What is Event Bubbling and Event Delegation?",
		answer:
			"Bubbling: events propagate from the target element up to the root of the DOM tree. Delegation: attaching a single event listener to a parent to handle events on its children (useful for dynamic lists in React). You can stop bubbling with e.stopPropagation().",
	},
	{
		id: 16,
		question: "Explain null, undefined, and undeclared variables.",
		answer:
			"undefined: a variable is declared but no value is assigned. null: an intentionally assigned empty value. undeclared: the variable was never defined in scope (throws ReferenceError). typeof null returns 'object' (a known JS bug).",
	},
	{
		id: 17,
		question: "What is the Ternary Operator and Optional Chaining (?.)?",
		answer:
			"Ternary: condition ? valueIfTrue : valueIfFalse – used for inline conditional rendering in React. Optional Chaining: user?.address?.city safely accesses nested properties without throwing an error if any intermediate is null/undefined.",
	},
	{
		id: 18,
		question:
			"What is the difference between function declaration and function expression?",
		answer:
			"A declaration: function greet() {} – is hoisted, so you can call it before its definition. An expression: const greet = function() {} – is not hoisted (or const greet = () => {}). In React, you mostly use function declarations for components and arrow function expressions for callbacks.",
	},
	{
		id: 19,
		question: "What is localStorage and sessionStorage?",
		answer:
			"Both are Web Storage APIs for persisting key-value pairs as strings. localStorage persists data even after the browser is closed. sessionStorage clears data when the page session ends (tab closed). In React, you can use them with useEffect to persist user preferences or authentication tokens.",
	},
	{
		id: 20,
		question: "What is type coercion in JavaScript?",
		answer:
			"Type coercion is JavaScript automatically converting one data type into another, often during operations or comparisons.",
	},
	{
		id: 21,
		question: "What is the difference between primitive and reference values?",
		answer:
			"Primitives contain their actual value and are copied by value. Objects and arrays are reference values. Variables contain a reference to the object.",
	},
	{
		id: 22,
		question: "What are objects and arrays, and how are they different?",
		answer:
			"An object stores data using key-value pairs. An array is an ordered collection accessed primarily by numeric indexes. Arrays are technically objects, but they provide specialized methods and behavior for ordered collections.",
	},
	{
		id: 23,
		question: "What is destructuring?",
		answer:
			"Destructuring extracts values from arrays or objects into variables.",
	},
	{
		id: 24,
		question:
			"What is the difference between a function declaration and function expression?",
		answer:
			"Function declarations are hoisted with their function definition, while function expressions behave according to how their variable is declared.",
	},
	{
		id: 25,
		question: "What is scope in JavaScript?",
		answer:
			"Scope determines where a variable can be accessed.Common scopes include: Global scope, Function scope, Block scope. let and const are block-scoped, while var is function-scoped.",
	},
	{
		id: 26,
		question: "What is lexical scope?",
		answer:
			"Lexical scope means a function's access to variables is determined by where the function is written in the source code, not where it is called.",
	},
	{
		id: 27,
		question: "What are higher-order functions?",
		answer:
			"A higher-order function is a function that takes another function as an argument, returns a function, or both.",
	},
	{
		id: 28,
		question: "How do you add, remove, or update an array without mutating it?",
		answer: "Use methods that create new arrays.",
	},
	{
		id: 29,
		question: "What is synchronous vs. asynchronous JavaScript?",
		answer:
			"Synchronous code executes sequentially, with each operation generally completing before the next one runs. Asynchronous operations allow JavaScript to continue executing while waiting for things such as network requests or timers.",
	},
	{
		id: 30,
		question: "What is a Promise, and what are its states?",
		answer:
			"A Promise represents the eventual result of an asynchronous operation. It has three states: Pending: still running; Fulfilled: completed successfully; Rejected: failed.",
	},
	{
		id: 31,
		question: "What is async/await and how does it relate to Promises?",
		answer:
			"An async function always returns a Promise, and await pauses that function until a Promise settles.",
	},
	{
		id: 32,
		question: "What is the event loop?",
		answer:
			"The event loop allows JavaScript's single main thread to handle asynchronous operations. In simplified terms: JavaScript executes synchronous code. Asynchronous work is handled by the browser/runtime. Completed callbacks are placed into queues. The event loop moves eligible callbacks onto the call stack when it is free. This is why asynchronous callbacks don't necessarily execute immediately.",
	},
	{
		id: 33,
		question:
			"What is the difference between Promise.all(), Promise.allSettled(), and Promise.race()?",
		answer:
			"Promise.all() succeeds when all Promises succeed, but rejects if any one rejects. Promise.allSettled() waits for all Promises and reports each result regardless of success or failure. Promise.race() settles as soon as the first Promise settles. Promise.all() is particularly useful when several independent requests are required before continuing.",
	},
];

export default data;
