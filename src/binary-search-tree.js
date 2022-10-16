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
    this.rootTree = addNode(this.rootTree, data)

    function addNode(node, data) {
      if (!node) return new Node(data)
      if (node.data == data) return data
  
      if (data < node.data) {
        node.left = addNode(node.left, data)
  
      } else {
        node.right = addNode(node.right, data)
      }
      return node
    }
  }

  

  has(data) {
    return searchNode(this.rootTree, data)

    function searchNode(node, data) {
      if (!node) return false
      if (node.data == data) return true
  
      if (data < node.data) {
        return searchNode(node.left, data)
      } else {
        return searchNode(node.right, data)
      }
    }
  }

  

  find(data) {
    return returnNode(this.rootTree, data)
      
    function returnNode(node, data) {
      if (!node) return null
      if (node.data == data) return node
  
      if (data < node.data) {
        return returnNode(node.left, data)
      } else {
        return returnNode(node.right, data)
      }
    }
  }

  

  remove(data) {
    this.rootTree = removeNode(this.rootTree, data)

    function removeNode(node, data) {
      if (!node) return null
  
      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else if (data > node.data) {
        node.right = removeNode(node.right, data)
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
  
        node.right = removeNode(node.right, minFromRight.data);
  
        return node;
      }
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


const tree = new BinarySearchTree();
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(8);
tree.add(4);
tree.add(32);
tree.add(12);
tree.add(14);
console.log(tree.find(8))//, 8);