const ReactData = [
	{
		id: 1,
		question: "What is a React component?",
		answer:
			"A reusable, self-contained piece of UI that can be either a function (returning JSX) or a class (with a render() method). It accepts inputs called 'props' and returns React elements.",
	},
	{
		id: 2,
		question:
			"What is the difference between a Functional Component and a Class Component?",
		answer:
			"Functional components are plain JavaScript functions that accept props and return JSX. Class components extend React.Component, have a render() method, and used to manage state/lifecycle before Hooks. Today, functional components with Hooks are the standard.",
	},
	{
		id: 3,
		question: "What is JSX, and why do we use it?",
		answer:
			"JSX is a syntax extension that looks like HTML but gets transpiled to React.createElement() calls. It makes UI code more readable and allows embedding JavaScript logic inside {}.",
	},
	{
		id: 4,
		question:
			"What is the difference between a 'dumb' (presentational) and 'smart' (container) component?",
		answer:
			"Presentational components focus on how things look – they receive data via props and have little to no state. Container components focus on how things work – they manage state, fetch data, and pass it down to presentational children. With Hooks, this distinction is less rigid.",
	},
	{
		id: 5,
		question: "What are props, and how do you pass them?",
		answer:
			"Props (short for properties) are read-only data passed from parent to child via HTML-like attributes. The child receives them as a single object parameter.",
	},
	{
		id: 6,
		question: "What is props.children, and why is it useful?",
		answer:
			"props.children is a special prop that contains whatever is nested between the opening and closing tags of a component. It enables component composition: <Card><h1>Title</h1></Card>.",
	},
	{
		id: 7,
		question: "What are 'pure components' in React?",
		answer:
			"React.PureComponent (for classes) and React.memo (for functions) perform a shallow comparison of props/state. If nothing changed, they skip re-rendering. This is a performance optimization, not a guarantee.",
	},
	{
		id: 8,
		question: "What is the displayName property used for?",
		answer:
			"It sets the name displayed in React DevTools for debugging. Useful when using HOCs or anonymous components to make the component tree easier to read.",
	},
	{
		id: 9,
		question: "What is state in React?",
		answer:
			"State is mutable, internal data that a component owns and can update over time. Changing state triggers a re-render. In functional components, state is managed with the useState Hook.",
	},
	{
		id: 10,
		question: "How do you update state correctly?",
		answer:
			"Always use the setter function from useState (or dispatch from useReducer). Never mutate state directly (e.g., state.count++). For objects/arrays, create a new copy using the spread operator or map/filter.",
	},
	{
		id: 11,
		question: "Why is state update asynchronous in React?",
		answer:
			"React batches multiple state updates for performance. The setter function schedules a re-render but doesn't update the value immediately. To get the latest state, use the functional update: setCount(prev => prev + 1).",
	},
	{
		id: 12,
		question: "What is 'lifting state up'?",
		answer:
			"Moving shared state to the closest common ancestor of components that need it. The parent manages the state and passes it down via props, along with callbacks to update it.",
	},
	{
		id: 13,
		question: "What is 'prop drilling,' and how do you avoid it?",
		answer:
			"Prop drilling is passing data through many intermediate components that don't need it. Avoid it with Context API, component composition, or global state management (Redux/Zustand).",
	},
	{
		id: 14,
		question: "What is the Context API, and when should you use it?",
		answer:
			"A built-in solution for passing global data (theme, user, language) without prop drilling. It uses createContext(), a Provider, and useContext(). Use it for medium-frequency data, not for high-frequency updates (use Redux for that).",
	},
	{
		id: 15,
		question: "What is a 'controlled component' in React?",
		answer:
			"A form input whose value is controlled by React state. The value prop is tied to state, and onChange updates that state. React becomes the single source of truth.",
	},
	{
		id: 16,
		question: "What is an 'uncontrolled component'?",
		answer:
			"A form input where the DOM handles the value internally. You access the current value using a ref (e.g., ref.current.value). Useful for simple forms or integrating non-React code.",
	},
	{
		id: 17,
		question: "What is the difference between props and state?",
		answer:
			"Props are read-only and passed from parent to child. State is mutable, internal, and managed within the component. Changing state triggers a re-render; changing props does not (the parent re-renders and sends new props).",
	},
	{
		id: 18,
		question: "How does data flow in React?",
		answer:
			"React uses one-way data binding – data flows from parent to child via props. Child components communicate back to parents by receiving callback functions as props and invoking them with data.",
	},
	{
		id: 19,
		question: "What are React Hooks?",
		answer:
			"Functions that let you 'hook into' React state and lifecycle features from functional components. Introduced in React 16.8 to replace class components. Common Hooks: useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef.",
	},
	{
		id: 20,
		question: "What are the Rules of Hooks?",
		answer:
			"Only call Hooks at the top level (never inside loops, conditions, or nested functions). Only call Hooks from React function components or custom Hooks. React relies on the call order to preserve state correctly.",
	},
	{
		id: 21,
		question: "How does useState work?",
		answer:
			"It returns an array with two elements: the current state value and a setter function. On first render, it initializes the state. On subsequent renders, it returns the stored state. The setter schedules a re-render with the new value.",
	},
	{
		id: 22,
		question: "What is the difference between useState and useReducer?",
		answer:
			"useState is simpler for independent, primitive state values. useReducer is better for complex state logic involving multiple sub-values or when the next state depends on the previous one (like a reducer in Redux). It accepts a reducer function and an initial state.",
	},
	{
		id: 23,
		question: "What is the purpose of useEffect?",
		answer:
			"It handles side effects – data fetching, subscriptions, timers, DOM manipulation, and logging. It runs after the render is painted to the screen. The dependency array controls when it re-executes.",
	},
	{
		id: 24,
		question: "What is the difference between useEffect and useLayoutEffect?",
		answer:
			"useEffect runs after the browser paints (asynchronously). useLayoutEffect runs before the browser paints (synchronously), so it can block visual updates. Use useLayoutEffect for measuring DOM elements or to prevent flickering, but default to useEffect.",
	},
	{
		id: 25,
		question: "What is useRef, and how is it different from state?",
		answer:
			"useRef returns a mutable object with a current property that persists across renders. Updating ref.current does not trigger a re-render. State updates do trigger re-renders. Use refs for DOM references, timers, or storing mutable values.",
	},
	{
		id: 26,
		question: "What is the difference between useState and useReducer?",
		answer:
			"useState is simpler for independent, primitive state values. useReducer is better for complex state logic involving multiple sub-values or when the next state depends on the previous one (like a reducer in Redux). It accepts a reducer function and an initial state.",
	},
	{
		id: 27,
		question: "What is a custom Hook, and why would you write one?",
		answer:
			"A custom Hook is a JavaScript function that starts with use and can call other Hooks. It extracts reusable logic (e.g., useFetch, useLocalStorage, useWindowSize) to share across multiple components without duplicating code.",
	},
	{
		id: 28,
		question: "How do you handle errors in Hooks?",
		answer:
			"Use an Error Boundary (a class component with componentDidCatch) – error boundaries don't work with Hooks directly. For data fetching, use try/catch inside useEffect or libraries like React Query that handle errors gracefully.",
	},
	{
		id: 29,
		question: "What is the Virtual DOM, and how does it work?",
		answer:
			"The Virtual DOM is a lightweight JavaScript representation of the real DOM. React creates a new Virtual DOM tree on every state/prop change, diffs it against the previous tree, and updates only the changed nodes in the real DOM (reconciliation). This makes updates efficient.",
	},
	{
		id: 30,
		question: "What is reconciliation?",
		answer:
			"The process where React compares the new Virtual DOM with the previous one using a diffing algorithm. It determines the minimal set of changes needed to update the real DOM. Keys and element types play a major role in this algorithm.",
	},
	{
		id: 31,
		question: "What is the key prop, and why is it important?",
		answer:
			"The key prop helps React identify which items in a list have changed, been added, or removed. It optimizes reconciliation. Keys must be unique, stable, and predictable among siblings – never use array indices unless the list is static.",
	},
	{
		id: 32,
		question: "What is React.memo, and when would you use it?",
		answer:
			"React.memo is a higher-order component that memoizes a functional component. It performs a shallow comparison of props and skips re-rendering if props haven't changed. Use it for components that render frequently with the same props.",
	},
	{
		id: 33,
		question: "What is the difference between React.memo and useMemo?",
		answer:
			"React.memo memoizes an entire component. useMemo memoizes the result of a specific computation inside a component. Both prevent unnecessary work but at different levels.",
	},
	{
		id: 34,
		question: "What is useCallback, and when should you use it?",
		answer:
			"useCallback returns a memoized function reference that only changes when its dependencies change. Use it when passing callbacks to child components that rely on referential equality (especially those wrapped in React.memo).",
	},
	{
		id: 35,
		question: "What is code splitting, and how do you implement it in React?",
		answer:
			"Code splitting breaks your bundle into smaller chunks that load on demand. In React, use React.lazy() for dynamic imports and wrap it with Suspense to show a fallback UI: const LazyComponent = React.lazy(() => import('./Component')).",
	},
	{
		id: 36,
		question: "What is the Suspense component used for?",
		answer:
			"Suspense is a built-in component that shows a fallback UI (like a loading spinner) while waiting for asynchronous data or components to load. It works with React.lazy() for code splitting and will support data fetching in the future.",
	},
	{
		id: 37,
		question: " What causes a component to re-render?",
		answer:
			"A component re-renders when: (1) its own state changes, (2) its parent component re-renders (even if props don't change), (3) its props change, or (4) it calls forceUpdate() (in classes). Use React.memo and useMemo to optimize.",
	},
	{
		id: 38,
		question: "How do you prevent unnecessary re-renders?",
		answer:
			"Use React.memo to memoize components, useMemo to cache expensive calculations, useCallback to stabilize function references, and lift state down to components that actually need it. Also, ensure you're not creating new objects/arrays inline in props.",
	},
	{
		id: 39,
		question: "What is a Higher-Order Component (HOC)?",
		answer:
			"A function that takes a component and returns an enhanced component. Example: withAuth(Component) adds authentication logic. HOCs are a legacy pattern mostly replaced by Hooks, but you may still see them in older codebases.",
	},
	{
		id: 40,
		question: "What is the difference between an HOC and a Hook?",
		answer:
			"HOCs wrap a component and modify its props/behavior. Hooks attach directly to functional components and compose logic more flexibly. Hooks are simpler to reason about and don't create 'wrapper hell.'",
	},
	{
		id: 41,
		question: "What is a Render Prop?",
		answer:
			"A technique where a component accepts a function as a prop that returns JSX. The component calls this function instead of rendering its own UI. Example: <DataFetcher render={(data) => <Display data={data} />} />. Also largely replaced by Hooks.",
	},
	{
		id: 42,
		question: " What is Redux, and why would you use it?",
		answer:
			"Redux is a predictable state container for JavaScript apps. It manages global state using a single store, actions, and reducers. Use it for complex applications with many interacting pieces of state (e.g., e-commerce carts, multi-step forms). For simpler apps, Context API + useReducer may suffice.",
	},
	{
		id: 43,
		question: "What is the difference between Redux and React's Context API?",
		answer:
			"Context API is built-in and great for low-to-medium frequency updates (theme, auth). Redux is more powerful for high-frequency, complex state with time-travel debugging, middleware (thunks/sagas), and robust dev tools. Redux also prevents unnecessary re-renders more efficiently.",
	},
	{
		id: 44,
		question: "What is React Router, and how does it work?",
		answer:
			"React Router is the standard routing library for React. It uses components like <BrowserRouter>, <Routes>, <Route>, and <Link> to manage navigation. It renders different components based on the URL without page reloads using the HTML5 History API.",
	},
	{
		id: 45,
		question: "What is the difference between BrowserRouter and HashRouter?",
		answer:
			"BrowserRouter uses the HTML5 History API and requires server configuration to handle client-side routing. HashRouter uses the hash part of the URL (e.g., /#/about) and works without server setup – good for static file hosting.",
	},
	{
		id: 46,
		question: "What is the useNavigate Hook used for?",
		answer:
			"It returns a function that lets you navigate programmatically: const navigate = useNavigate(); navigate('/dashboard');. Replaces the older useHistory Hook. Use it inside event handlers, not inside the main render body.",
	},
	{
		id: 47,
		question: "What are React's 'Strict Mode' and what does it do?",
		answer:
			"<React.StrictMode> is a development-only wrapper that helps catch potential problems. It: (1) identifies unsafe lifecycles, (2) warns about legacy string refs, (3) detects unexpected side effects by double-invoking certain functions (e.g., useEffect), and (4) checks for deprecated APIs.",
	},
	{
		id: 48,
		question:
			"What is the difference between client-side rendering (CSR) and server-side rendering (SSR)?",
		answer:
			"CSR: React renders everything in the browser after loading the JS bundle. SSR: React renders components to HTML on the server and sends the fully-rendered page to the client (using Next.js or Remix). SSR improves SEO and initial load time. CSR is simpler and better for highly interactive apps.",
	},
];

export default ReactData;
