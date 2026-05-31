export interface ITrie {
  insert(word: string): void;
  search(word: string): boolean;
  startsWith(prefix: string): boolean;
  delete(word: string): boolean;
}
