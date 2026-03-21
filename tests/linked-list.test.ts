import { describe, it, expect } from "vitest";
import { SinglyLinkedList, DoublyLinkedList, ListNode } from "../src";

// Singly Linked List Tests
describe("SinglyLinkedList", () => {
  it("should append values", () => {
    const list = new SinglyLinkedList<number>();

    list.append(1);
    list.append(2);

    expect(list.toArray()).toEqual([1, 2]);
  });

  it("should prepend values", () => {
    const list = new SinglyLinkedList<number>();

    list.append(2);
    list.prepend(1);

    expect(list.toArray()).toEqual([1, 2]);
  });

  it("should remove middle element", () => {
    const list = new SinglyLinkedList<number>();

    list.append(1);
    list.append(2);
    list.append(3);

    list.remove(2);

    expect(list.toArray()).toEqual([1, 3]);
  });

  it("should remove head element", () => {
    const list = new SinglyLinkedList<number>();

    list.append(1);
    list.append(2);

    list.remove(1);

    expect(list.toArray()).toEqual([2]);
  });

  it("should find element", () => {
    const list = new SinglyLinkedList<number>();

    list.append(1);
    list.append(2);

    const node = list.find(2);

    expect(node?.value).toBe(2);
  });

  it("should handle empty list", () => {
    const list = new SinglyLinkedList<number>();

    expect(list.remove(1)).toBe(false);
    expect(list.find(1)).toBeNull();
    expect(list.isEmpty()).toBe(true);
  });
});

// Doubly Linked List Tests
describe("DoublyLinkedList", () => {
  it("should append values", () => {
    const list = new DoublyLinkedList<number>();

    list.append(1);
    list.append(2);

    expect(list.toArray()).toEqual([1, 2]);
  });

  it("should remove middle node", () => {
    const list = new DoublyLinkedList<number>();

    list.append(1);
    list.append(2);
    list.append(3);

    new ListNode(2);

    let current: any = (list as any).head;
    while (current && current.value !== 2) {
      current = current.next;
    }

    list.remove(current);

    expect(list.toArray()).toEqual([1, 3]);
  });

  it("should remove head node", () => {
    const list = new DoublyLinkedList<number>();

    list.append(1);
    list.append(2);

    let head: any = (list as any).head;

    list.remove(head);

    expect(list.toArray()).toEqual([2]);
  });

  it("should remove tail node", () => {
    const list = new DoublyLinkedList<number>();

    list.append(1);
    list.append(2);

    let tail: any = (list as any).tail;

    list.remove(tail);

    expect(list.toArray()).toEqual([1]);
  });

  it("should handle single element removal", () => {
    const list = new DoublyLinkedList<number>();

    list.append(1);

    let node: any = (list as any).head;

    list.remove(node);

    expect(list.toArray()).toEqual([]);
    expect(list.size()).toBe(0);
  });
});
