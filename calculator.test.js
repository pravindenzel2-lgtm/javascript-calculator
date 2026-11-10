const { test } = require("node:test");
const assert = require("node:assert");

const {
  add,
  subtract,
  multiply,
  divide,
} = require("./calculator");

test("addition should return the correct result", () => {
  assert.strictEqual(add(10, 5), 15);
});

test("subtraction should return the correct result", () => {
  assert.strictEqual(subtract(10, 5), 5);
});

test("multiplication should return the correct result", () => {
  assert.strictEqual(multiply(10, 5), 50);
});

test("division should return the correct result", () => {
  assert.strictEqual(divide(10, 5), 2);
});

test("division by zero should throw an error", () => {
  assert.throws(() => divide(10, 0), /Cannot divide by zero/);
});