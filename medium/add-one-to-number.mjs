import { LinkedList } from "../construct-linked-list.mjs";

class AddOneToNum extends LinkedList {
  addOneToNum() {
    let current = this.head;
    let num = "";

    while (current) {
      num += current.element;
      current = current.next;
    }

    return parseInt(num) + 1;
  }
}

const ll = new AddOneToNum();

ll.add(2);
ll.add(2);
ll.add(1);
ll.add(1);
ll.add(0);

console.log(ll.addOneToNum());
