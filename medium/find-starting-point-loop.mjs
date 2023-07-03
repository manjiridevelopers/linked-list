import { LinkedList } from "../construct-linked-list.mjs";

class DetectLoop extends LinkedList {
  loopCreator(index) {
    let lastNode = null;
    let jointNode = null;
    let currentNode = this.head;
    let pos = 0;

    while (currentNode) {
      if (pos == index) jointNode = currentNode;
      if (currentNode.next == null) lastNode = currentNode;
      currentNode = currentNode.next;
      pos++;
    }

    lastNode.next = jointNode;
  }

  detectLoop() {
    let slow = this.head;
    let fast = this.head;

    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow == fast) return fast;
    }

    return false;
  }

  jointPosition() {
    let slow = this.head;
    let fast = this.detectLoop();
    let currentNode = this.head;
    let pos = 0;

    while (fast && slow != fast) {
      slow = slow.next;
      fast = fast.next;
    }

    while (currentNode !== slow) {
      pos++;
      currentNode = currentNode.next;
    }

    return pos;
  }
}

const ll = new DetectLoop();

ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);

ll.loopCreator(2);

const position = ll.jointPosition();
console.log(position);
