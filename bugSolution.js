function foo(a, b) {
  if (a === null || b === null) {
    return 0; // or handle it appropriately, for example, return a default value or throw an error
  }
  return a.bar + b.bar;
}