/*

Binary Search Tree!

Name your class Tree. 

I'd suggest making another class called Node. You don't have to; you can make them all plain JS objects

Here you'll make a BST. Your Tree class will have keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree
delete - 

*/

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
    console.log(value, "value");
    let pointer = this._findNode(value);
    if (!pointer) return;
    console.log(pointer, "pointer");
    if (!pointer?.right) {
      pointer = pointer.left;
      return;
    }
    const changer = this._findLeastRightChild(pointer);
    //on pointer - change value to changer value, add left and right from pointer
    //on changer - change node to node from changer.right
    console.log(changer, "changer");
    console.log(this.root);
  }

  _findLeastRightChild(pointer) {
    if (pointer.right?.value) pointer = pointer.right;
    while (pointer.left?.value) {
      pointer = pointer.left;
      // console.log(pointer);
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
