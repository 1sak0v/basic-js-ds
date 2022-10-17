const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootElemenet = null;
  }

  root() {
    return this.rootElemenet;
  }

  add(data) {
    const addElement = (node, data) => {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }
      
      if (data < node.data) {
        node.left = addElement(node.left, data);
      } else {
        node.right = addElement(node.right, data);
      }

      return node;
    };

    this.rootElemenet = addElement(this.rootElemenet, data);
  }

  has(data) {
    const searchElement = (node, data) => {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? searchElement(node.left, data) : searchElement(node.right, data);
    };

    return searchElement(this.rootElemenet, data);
  }

  find(data) {
    const searchElement = (node, data) => {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? searchElement(node.left, data) : searchElement(node.right, data);
    };

    return searchElement(this.rootElemenet, data);
  }

  remove(data) {
    const removeElement = (node, data) => {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeElement(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeElement(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxLeftElement = node.left;
        while (maxLeftElement.right) {
          maxLeftElement = maxLeftElement.right;
        }
        node.data = maxLeftElement.data;

        node.left = removeElement(node.left, maxLeftElement.data);

        return node;
      } 
    };
    
    this.rootElemenet = removeElement(this.rootElemenet, data);
  }

  min() {
    if (!this.root) {
      return;
    }

    let node = this.rootElemenet;
    while(node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.root) {
      return;
    }

    let node = this.rootElemenet;
    while(node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};