class ArrayList {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(num) {
    this.data[this.length] = num;
    this.length++;
  }

  pop() {
    const res = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return res;
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    if (index > this.length) return;
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
