class LinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  pop() {
    if (!this.head) return;
    if (this.head === this.tail) {
      const res = this.head;
      this.head = this.tail = null;
      this.length--;
      return res.value;
    } else {
      const prevNode = this._find(this.length - 2);
      const res = this.tail;
      prevNode.next = null;
      this.tail = prevNode;
      this.length--;
      return res.value;
    }
  }

  _find(index) {
    if (index > this.length) return;
    let counter = index;
    let res = this.head;
    while (counter) {
      res = res.next;
      counter--;
    }
    return res;
  }

  get(index) {
    if (index >= this.length) return;
    return this._find(index).value;
  }

  delete(index) {
    if (!this.head) return;
    if (this.head === this.tail) {
      this.head = this.tail = null;
      this.length--;
    } else if (index === this.length - 1) {
      const removed = this._find(index);
      const prevNode = this._find(index - 1);
      prevNode.next = removed.next;
      this.tail = prevNode;
      this.length--;
    } else if (index === 0) {
      this.head = this.head.next;
      this.length--;
    } else {
      const removed = this._find(index);
      const prevNode = this._find(index - 1);
      prevNode.next = removed.next;
      this.length--;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
