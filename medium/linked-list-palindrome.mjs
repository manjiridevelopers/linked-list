import { LinkedList } from "../construct-linked-list.mjs";

class PalindromeChecker extends LinkedList {
  reverse(cur) {
    let nex = null;
    let prev = null;

    while (cur) {
      nex = cur.next;
      cur.next = prev;
      prev = cur;
      cur = nex;
    }

    return prev;
  }

  checkPalindrome() {
    let slow = this.head;
    let fast = this.head;
    let isPalindrome = true;

    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    slow = this.reverse(slow.next);

    let start = this.head;

    while (slow) {
      if (slow.element !== start.element) {
        isPalindrome = false;
        break;
      }
      slow = slow.next;
      start = start.next;
    }

    return isPalindrome;
  }
}

const ll = new PalindromeChecker();

ll.add(1);
ll.add(2);
ll.add(3);
ll.add(3);
ll.add(2);
ll.add(1);

console.log(ll.checkPalindrome());
