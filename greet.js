console.log('Hello World')

function greet (name) {
  if(name == null || name.trim() == "") return "Hello, my friend.";
  return `Hello, ${name}.`
}

module.exports = greet
