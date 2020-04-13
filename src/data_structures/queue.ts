export class Queue<T> {
  private readonly array: T[];

  public constructor(private maxLength?: number) {
    this.array = [];
  }

  public offer(t: T) {
    if (!this.maxLength || this.size() < this.maxLength) {
      this.array.unshift(t);
    } else {
      throw new Error('Queue full');
    }
  }

  public poll(): T {
    return this.array.pop();
  }

  public peek(): T {
    return this.array[0];
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
