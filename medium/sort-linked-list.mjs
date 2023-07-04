import { LinkedList } from "../construct-linked-list.mjs";

class SortLinkedList extends LinkedList {
  swap(ptr1, ptr2) {
    let temp = ptr1.element;
    ptr1.element = ptr2.element;
    ptr2.element = temp;
  }

  bubbleSort() {
    let check = true;
    let current = this.head;

    while (check) {
      check = false;
      while (current && current.next) {
        if (current.next.element < current.element) {
          this.swap(current, current.next);
          check = true;
        }
        current = current.next;
      }
      current = this.head;
    }
  }

  selectionSort() {
    let start = this.head;

    while (start && start.next) {
      let smallest = start;
      let dummy = smallest.next;

      while (dummy && dummy.next) {
        if (dummy.element < smallest.element) smallest = dummy;
        dummy = dummy.next;
      }

      this.swap(smallest, start);
      start = start.next;
    }
  }
}

const ll = new SortLinkedList();
const llTwo = new SortLinkedList();

ll.add(4);
ll.add(2);
ll.add(1);
ll.add(3);
ll.add(5);
ll.bubbleSort();

llTwo.add(4);
llTwo.add(2);
llTwo.add(1);
llTwo.add(3);
llTwo.add(5);
llTwo.selectionSort();

console.log(ll);
console.log(llTwo);
