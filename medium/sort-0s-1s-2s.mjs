import { LinkedList } from "../construct-linked-list.mjs";

class Sort0s1s2s extends LinkedList {
  sort0s2s1s() {
    let current = this.head;
    let count = [0, 0, 0];

    while (current) {
      count[current.element]++;
      current = current.next;
    }

    current = this.head;
    let i = 0;

    while (current) {
      current.element = i;
      count[i]--;
      if (count[i] == 0) i++;
      current = current.next;
    }
  }
}

const ll = new Sort0s1s2s();

ll.add(2);
ll.add(2);
ll.add(1);
ll.add(1);
ll.add(0);
ll.sort0s2s1s();

console.log(ll);
