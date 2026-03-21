import { describe, it, expect } from "vitest";
import { Queue } from "../src";

describe("Queue", () => {
  it("should enqueue and dequeue correctly", () => {
    const queue = new Queue<number>();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
  });

  it("should maintain FIFO order", () => {
    const queue = new Queue<string>();

    queue.enqueue("A");
    queue.enqueue("B");
    queue.enqueue("C");

    expect(queue.dequeue()).toBe("A");
    expect(queue.dequeue()).toBe("B");
    expect(queue.dequeue()).toBe("C");
  });

  it("should return front element with peek", () => {
    const queue = new Queue<number>();

    queue.enqueue(10);
    queue.enqueue(20);

    expect(queue.peek()).toBe(10);
    expect(queue.size()).toBe(2);
  });

  it("should handle empty queue", () => {
    const queue = new Queue<number>();

    expect(queue.dequeue()).toBeUndefined();
    expect(queue.peek()).toBeUndefined();
    expect(queue.isEmpty()).toBe(true);
  });

  it("should clear queue", () => {
    const queue = new Queue<number>();

    queue.enqueue(1);
    queue.enqueue(2);

    queue.clear();

    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });
});
