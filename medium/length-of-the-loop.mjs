/*
    To calculate the length of the loop in a linked list, you can modify the Floyd's cycle 
    detection algorithm slightly. Once the tortoise and hare pointers meet, you can keep 
    one of the pointers fixed and move the other pointer until they meet again. The number
    of steps taken to meet again will give you the length of the loop.
*/

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

  lengthOfLoop() {
    let slow = this.head;
    let fast = this.head;
    let len = 1;

    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow == fast) {
        slow = slow.next;
        break;
      }
    }

    while (slow !== fast) {
      slow = slow.next;
      len++;
    }

    return len;
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

const length = ll.lengthOfLoop();
console.log(length);
