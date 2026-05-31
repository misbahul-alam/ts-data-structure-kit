import { TrieNode } from "./trie-node";
import type { ITrie } from "./trie.interface";

export class Trie implements ITrie {
  private readonly root = new TrieNode();

  insert(word: string): void {
    let current = this.root;

    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }

      current = current.children.get(char)!;
    }

    current.isEndOfWord = true;
  }

  search(word: string): boolean {
    const node = this.findNode(word);
    return node !== null && node.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    return this.findNode(prefix) !== null;
  }

  delete(word: string): boolean {
    return this.deleteRecursive(this.root, word, 0);
  }

  private findNode(word: string): TrieNode | null {
    let current = this.root;

    for (const char of word) {
      const next = current.children.get(char);

      if (!next) {
        return null;
      }

      current = next;
    }

    return current;
  }

  private deleteRecursive(
    node: TrieNode,
    word: string,
    depth: number,
  ): boolean {
    if (depth === word.length) {
      if (!node.isEndOfWord) {
        return false;
      }

      node.isEndOfWord = false;

      return node.children.size === 0;
    }

    const char = word[depth]!;
    const child = node.children.get(char);

    if (!child) {
      return false;
    }

    const shouldDeleteChild = this.deleteRecursive(child, word, depth + 1);

    if (shouldDeleteChild) {
      node.children.delete(char);

      return node.children.size === 0 && !node.isEndOfWord;
    }

    return false;
  }
}
