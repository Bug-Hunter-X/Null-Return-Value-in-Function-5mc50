function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will cause an error if you try to access a property of a null value later in the code
  }
  return a.bar + b.bar;
}