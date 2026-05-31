export class TrieNode {
  public children = new Map<string, TrieNode>();
  public isEndOfWord = false;
}
