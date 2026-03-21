import { ListNode } from "./node";

export class SinglyLinkedList<T> {
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;
  private length = 0;

  append(value: T): void {
    const node = new ListNode(value);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }

    this.length++;
  }

  prepend(value: T): void {
    const node = new ListNode(value, this.head);
    this.head = node;

    if (!this.tail) this.tail = node;

    this.length++;
  }

  remove(value: T): boolean {
    if (!this.head) return false;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return true;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        if (!current.next) this.tail = current;
        this.length--;
        return true;
      }
      current = current.next;
    }

    return false;
  }

  find(value: T): ListNode<T> | null {
    let current = this.head;

    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }

    return null;
  }

  size(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}
