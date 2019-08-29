class _Node {
  constructor(value, next = null,prev=null) {
    this.value = value;
    this.next = next;
    this.prev=prev;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail= null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;

      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }


      tempNode.next = new _Node(item, null,tempNode);

    }
  }

  insertBefore(item, value) {
    let currNode = this.head;

    if (this.head === null) return;

    if (this.head.value === value) {
      this.head = new _Node(item, currNode);
    } else {
      while (currNode.next !== null) {
        if (currNode.next.value === value) {
          const newNode = new _Node(item, currNode.next,currNode);
          currNode.next = newNode;
          return;
        }

        currNode = currNode.next;
      }
    }
  }

  insertAfter(item, value) {
    let currNode = this.head;
    while (currNode !== null) {
      if (currNode.value === value) {
        currNode.next = new _Node(item, currNode.next,currNode);
        return;
      } else {
        currNode = currNode.next;
      }
    }
  }

  insertAt(value, index) {
    let currNode = this.head;
    if (index === 0) {
      this.insertBefore(value, currNode.value);
      return;
    }
    for (let i = 0; i < index - 1; i++) {
      if (currNode !== null) {
        // console.log(currNode.value);
        currNode = currNode.next;
      } else {
        console.log('Invalid Index');
        return;
      }
    }
    // console.log(currNode.value);
    currNode.next = new _Node(value, currNode.next,currNode);
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) return null;
      else currNode = currNode.next;
    }

    return currNode;
  }

  remove(item) {
    if (!this.head) return null;

    if (this.head === item) {
      this.head = this.head.next;
      this.head.prev=null;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;
    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log('Item not found.');
      return;
    }

    previousNode.next = currNode.next;
    currNode.next.prev=previousNode;
  }

  print() {
    let list = '';
    let currNode = this.head;
    while (currNode !== null) {
      list +=
        currNode.next !== null ? `${currNode.value} -> ` : `${currNode.value}`;

      currNode = currNode.next;
    }

    return list;
  }
}

module.exports = DoubleLinkedList;