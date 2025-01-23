# JavaScript Null Return Value Bug

This repository demonstrates a common bug in JavaScript related to null return values.  The `foo` function returns `null` if either input is null.  However, if the calling function doesn't check for this `null` value before trying to access properties, a runtime error will occur.  The solution demonstrates how to handle this using a simple check.

## Bug

The `bug.js` file contains the buggy function.

## Solution

The `bugSolution.js` file provides a fix that checks for the `null` value before accessing the properties of the input objects.