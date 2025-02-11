# React useEffect Hook with Incorrect Dependency Array

This repository demonstrates a common error in React's `useEffect` hook: using a non-primitive value in the dependency array. This leads to the effect running on every render, even if the relevant values haven't changed.  This example uses a `setInterval` to update a counter. Incorrectly including non-primitive values in the dependency array creates unnecessary renders and negatively impacts performance. The solution showcases the correct implementation, ensuring the effect runs only when needed.

## How to reproduce:

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe that the counter updates every second, but the component re-renders unnecessarily.

## Solution:

The solution file demonstrates the correct usage of the `useEffect` hook's dependency array, using appropriate primitive values or avoiding unnecessary dependencies entirely.