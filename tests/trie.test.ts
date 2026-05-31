import { Trie } from "./../src";
import { describe, expect, it } from "vitest";
describe("Trie", () => {
  it("should insert and search words", () => {
    const trie = new Trie();

    trie.insert("apple");

    expect(trie.search("apple")).toBe(true);
    expect(trie.search("app")).toBe(false);
  });

  it("should find prefixes", () => {
    const trie = new Trie();

    trie.insert("apple");

    expect(trie.startsWith("app")).toBe(true);
    expect(trie.startsWith("xyz")).toBe(false);
  });

  it("should support multiple words", () => {
    const trie = new Trie();

    trie.insert("apple");
    trie.insert("app");

    expect(trie.search("apple")).toBe(true);
    expect(trie.search("app")).toBe(true);
  });

  it("should delete words", () => {
    const trie = new Trie();

    trie.insert("apple");

    trie.delete("apple");

    expect(trie.search("apple")).toBe(false);
  });

  it("should not affect other words sharing prefix", () => {
    const trie = new Trie();

    trie.insert("app");
    trie.insert("apple");

    trie.delete("apple");

    expect(trie.search("app")).toBe(true);
    expect(trie.search("apple")).toBe(false);
  });
});
