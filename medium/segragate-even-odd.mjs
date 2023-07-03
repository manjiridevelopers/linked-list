import { LinkedList } from "../construct-linked-list.mjs";

class segragateEvenOdd extends LinkedList {
  swap(oddPtr, evenPtr) {
    let temp = oddPtr.element;
    oddPtr.element = evenPtr.element;
    evenPtr.element = temp;
  }

  segragate() {
    let oddPtr = this.head;
    let evenPtr = this.head;

    while (oddPtr && evenPtr) {
      if (oddPtr.element % 2 != 0 && evenPtr.element % 2 == 0) {
        this.swap(oddPtr, evenPtr);
      } else if (oddPtr.element % 2 == 0) {
        oddPtr = oddPtr.next;
      } else if (evenPtr.element % 2 != 0) {
        evenPtr = evenPtr.next;
      }
    }
  }
}

const ll = new segragateEvenOdd();

ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(7);
ll.add(9);
ll.segragate();

console.log(ll);
