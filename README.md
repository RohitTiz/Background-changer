# React Background Color Changer 🎨

![Project Screenshot](./screenshot.png) *(Upload a screenshot later)*

A beginner-friendly React application that demonstrates state management by changing background colors. Perfect for learning React hooks and event handling.

## Table of Contents
- [Features](#features)
- [How It Works](#how-it-works)
- [Detailed Code Explanation](#detailed-code-explanation)
- [Core Concepts Learned](#core-concepts-learned)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Customization](#customization)
- [FAQ](#faq)
- [Resources](#resources)
- [License](#license)

## Features ✨
- Interactive color changing with single click
- Responsive design that works on all devices
- Smooth color transitions
- Minimal and clean codebase
- Uses React hooks (useState)
- Styled with Tailwind CSS

## How It Works 🔧
The app maintains a single state variable (`color`) that determines the background color. When you click any color button:
1. The `onClick` handler updates the state
2. React re-renders the component
3. The background color changes instantly

## Detailed Code Explanation 💻
color: Stores current background color (initial value "olive")

setColor: Function to update the color state

useState: React hook that enables state in functional components
2. Dynamic Background
jsx
<div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
w-full h-screen: Tailwind classes for full width/height

duration-200: Adds smooth transition

style: Inline style that uses the current color state
3. Color Buttons
jsx
<button 
  onClick={() => setColor("red")}
  className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
  style={{backgroundColor: "red"}}>
  Red
</button>
onClick: Updates state to corresponding color

Tailwind classes for styling (padding, rounded corners, etc.)

Inline style sets button's background color

Core Concepts Learned 🧠
✔ React Components - Building UI with functions
✔ State Management - Using useState hook
✔ Event Handling - onClick events
✔ Dynamic Styling - Inline styles in JSX
✔ Tailwind CSS - Utility-first styling
✔ Component Re-rendering - How state changes update UI

### 1. State Management
```jsx
const [color, setColor] = useState("olive");
