```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: Using a non-primitive value directly in the dependency array
    // This will cause unnecessary re-renders because the object reference changes on every render
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array causes useEffect to run only once

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```