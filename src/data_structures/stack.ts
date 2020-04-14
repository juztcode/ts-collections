export class Stack<T> {
  private readonly array: T[];

  public constructor(private maxLength?: number) {
    this.array = [];
  }

  public push(t: T) {
    if (!this.maxLength || this.size() < this.maxLength) {
      this.array.push(t);
    } else {
      throw new Error('Stack full');
    }
  }

  public pop(): T {
    return this.array.pop();
  }

  public peek(): T {
    return this.array[this.size() - 1];
  }

  public size(): number {
    return this.array.length;
  }

  public forEach(cb: (v: T) => void) {
    for (let i = this.size() - 1; i > -1; i--) {
      cb(this.array[i]);
    }
  }
}
