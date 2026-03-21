import { describe, it, expect } from "vitest";
import { Stack } from "../src";

describe("Stack", () => {
  it("should push and pop correctly", () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it("should return top element using peek", () => {
    const stack = new Stack<string>();

    stack.push("A");
    stack.push("B");

    expect(stack.peek()).toBe("B");
    expect(stack.size()).toBe(2);
  });

  it("should check isEmpty correctly", () => {
    const stack = new Stack<number>();

    expect(stack.isEmpty()).toBe(true);

    stack.push(10);
    expect(stack.isEmpty()).toBe(false);
  });

  it("should clear stack", () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);

    stack.clear();

    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  it("should convert to array", () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);

    expect(stack.toArray()).toEqual([1, 2]);
  });

  it("should handle empty pop safely", () => {
    const stack = new Stack<number>();

    expect(stack.pop()).toBeUndefined();
    expect(stack.peek()).toBeUndefined();
  });
});
