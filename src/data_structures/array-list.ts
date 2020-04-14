export class ArrayList<T> {
  private readonly array: T[];

  public constructor() {
    this.array = [];
  }

  public size(): number {
    return this.array.length
  }

  public isEmpty(): boolean {
    return this.size() === 0;
  }

  public contains(t: T): boolean {
    return this.array.indexOf(t) !== -1;
  }

  public add(t: T): boolean {
    this.array.push(t);
    return true;
  }

  public addToIndex(i: number, t: T): boolean {
    this.checkIndex(i);
    this.array.splice(i, 0, t);
    return true;
  }

  public remove(t: T): boolean {
    const index = this.indexOf(t);
    if (index === -1) {
      return false;
    }

    this.array.splice(index, 1);
    return true;
  }

  public clear(): void {
    this.array.splice(0, this.size());
  }

  public get(i: number): T {
    this.checkIndex(i);
    return this.array[i];
  }

  public set(i: number, t: T): T {
    this.checkIndex(i);
    this.array[i] = t;
    return t;
  }

  public indexOf(t: T): number {
    return this.array.indexOf(t);
  }

  public lastIndexOf(t: T): number {
    return this.array.lastIndexOf(t);
  }

  public forEach(cb: (t: T) => void): void {
    this.array.forEach(cb);
  }

  private checkIndex(i: number) {
    if (i >= this.size()) {
      throw new Error('Index out of bound');
    }
  }
}
