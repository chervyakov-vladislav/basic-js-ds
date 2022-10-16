const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootTree = null
  }

  root() {
    return this.rootTree
  }

  add(data) {
    this.rootTree = this.addNode(this.rootTree, data)
  }

  addNode(node, data) {
    if (!node) return new Node(data)
    if (node.data == data) return data

    if (data < node.data) {
      node.left = this.addNode(node.left, data)

    } else {
      node.right = this.addNode(node.right, data)
    }
    return node
  }

  

  has(data) {
    this.rootTree = this.searchNode(this.rootTree, data)
  }

  searchNode(node, data) {
    if (!node) return false
    if (node.data == data) return true

    if (data < node.data) {
      return this.searchNode(node.left, data)
    } else {
      return this.searchNode(node.right, data)
    }
  }

  find(data) {
    this.rootTree = this.returnNode(this.rootTree, data)
  }

  returnNode(node ,data) {
    if (!node) return null
    if (node.data == data) return node.data

    if (data < node.data) {
      return this.returnNode(node.left, data)
    } else {
      return this.returnNode(node.right, data)
    }
  }

  remove(data) {
    this.rootTree = this.removeNode(this.rootTree, data)
  }

  removeNode(node, data) {
    if (!node) return null

    if (data < node.data) {
      node.left = this.removeNode(node.left, data)
      return node
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data)
      return node
    } else {
      if (!node.left && !node.right) return null

      if (!node.left) return node.right
      if (!node.right) return node.left

      let minFromRight = node.right;

      while (minFromRight.left) {
        minFromRight = minFromRight.left
      }

      node.data = minFromRight.data;

      node.right = this.removeNode(node.right, minFromRight.data);

      return node;
    }
  }

  min() {
    if (!this.rootTree) return null

    let leftValues = this.rootTree

    while (leftValues.left) leftValues = leftValues.left
    return leftValues.data
  }

  max() {
    if (!this.rootTree) return null

    let rightValues = this.rootTree

    while (rightValues.right) rightValues = rightValues.right
    return rightValues.data
  }
}

module.exports = {
  BinarySearchTree
};