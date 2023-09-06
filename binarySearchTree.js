class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let node = new Node(value);
    let pointer = this.root;
    if (!this.root) {
      this.root = node;
      return;
    }
    // console.log(this.root, "root");
    // console.log(value);

    while (pointer.left?.value || pointer.right?.value) {
      if (!pointer.left?.value && value <= pointer.value) {
        pointer.left = node;
        // console.log(`hi cheat left`);
        return;
      }

      if (!pointer.right?.value && value > pointer.value) {
        pointer.right = node;
        // console.log(`hi cheat right`);
        return;
      }

      pointer = this._setPointer(value, pointer);
      // console.log(pointer, "pointer");
    }
    node.value <= pointer.value
      ? (pointer.left = node)
      : (pointer.right = node);
  }

  delete(value) {
    // console.log(value, "value");
    let pointer = this._findNode(value);
    //if there is no value return undefined
    if (!pointer) return;

    // console.log(pointer, "pointer");
    //if there is no right side, put left side instead deleted
    if (!pointer?.right) {
      let { value, left, right } = pointer.left;
      pointer.value = value;
      pointer.right = left;
      pointer.left = right;
      return;
    }
    const changer = this._findLeastRightChild(pointer);
    //on pointer - change value to changer value, add left and right from pointer
    // console.log(changer, "changer");
    pointer.value = changer.value;
    //on changer - change node to node from changer.right
    changer.value = changer.right.value;
    changer.right = changer.right.right;
  }

  _findLeastRightChild(pointer) {
    if (pointer.right?.value) pointer = pointer.right;
    while (pointer.left?.value) {
      pointer = pointer.left;
    }
    return pointer;
  }

  _findNode(value) {
    let pointer = this.root;
    if (this.root.value === value) return this.root;

    while (pointer?.left?.value || pointer?.right?.value) {
      if (pointer.left?.value === value || pointer.right?.value === value) {
        return pointer.left?.value === value ? pointer.left : pointer.right;
      }

      pointer = pointer.value < value ? pointer.right : pointer.left;
    }

    return pointer;
  }

  _setPointer(value, pointer) {
    if (value > pointer.value) return pointer.right;
    if (value <= pointer.value) return pointer.left;
  }

  toObject() {
    return this.root;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
