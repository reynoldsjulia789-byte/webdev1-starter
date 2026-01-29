// index.js
console.log('Hello from Node.js!');

// Simple function example
function greet(name) 
{
  return `Hello, ${name}!`;
}

console.log(greet('Julia'));

const message = greet('World');
console.log(message);

// Export for use in other files
module.exports = { greet };