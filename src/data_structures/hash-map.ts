export class HashMap<V> {
  private readonly data: { [key: string]: V };

  public constructor() {
    this.data = {};
  }

  public containsKey(k: string): boolean {
    const v = this.get(k);
    return v !== undefined && v !== null;
  }

  public get(k: string): V {
    return this.data[k];
  }

  public put(k: string, v: V): V {
    this.data[k] = v;
    return this.get(k);
  }

  public remove(k: string): V {
    const v = this.data[k];
    delete this.data[k];
    return v;
  }

  public clear() {
    const keys = Object.keys(this.data);
    keys.forEach(k => delete this.data[k]);
  }

  public getOrDefault(k: string, v: V): V {
    if (this.containsKey(k)) {
      return this.get(k);
    } else {
      return v;
    }
  }

  public putIfAbsent(k: string, v: V): V {
    if (!this.containsKey(k)) {
      this.put(k, v);
    }

    return this.get(k);
  }

  public computeIfAbsent(k: string, cb: (k: string) => V): V {
    if (!this.containsKey(k)) {
      const v = cb(k);
      this.put(k, v);
    }

    return this.get(k);
  }

  public size() {
    return Object.keys(this.data).length;
  }

  public keySet(): string[] {
    return Object.keys(this.data);
  }

  public values(): V[] {
    return Object.values(this.data);
  }

  public forEach(cb: (k: string, v: V) => void) {
    this.keySet().forEach(k => {
      const v = this.get(k);
      cb(k, v);
    });
  }
}
