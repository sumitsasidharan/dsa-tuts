// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
   constructor(data, next = null) {
      this.data = data;
      this.next = next;
   }
}

class LinkedList {
   constructor() {
      this.head = null;
   }

   insertFirst(data) {
      this.insertAt(data, 0);
      // 2) const node = new Node(data, this.head);
      // this.head = node;
      // 1) this.head = new Node(data, this.head);
   }

   size() {
      let counter = 0;
      let node = this.head;

      while (node) {
         counter++;
         node = node.next;
      }

      return counter;
   }

   getFirst() {
      return this.getAt(0);
      // return this.head;
   }

   getLast() {
      // if (!this.head) {
      //    return null;
      // }

      // let node = this.head;
      // while (node) {
      //    if (!node.next) {
      //       return node;
      //    }

      //    node = node.next;
      // }

      return this.getAt(this.size() - 1);
   }

   clear() {
      this.head = null;
   }

   removeFirst() {
      if (!this.head) {
         return;
      }

      // the first node will point to null
      this.head = this.head.next;
   }

   removeLast() {
      if (!this.head) {
         return;
      }

      // if there's nothing in first node's next
      if (!this.head.next) {
         this.head = null;
         return;
      }

      let previous = this.head;
      let node = this.head.next;
      while (node.next) {
         previous = node;
         node = node.next;
      }
      previous.next = null;
   }

   insertLast(data) {
      const last = this.getLast();

      if (last) {
         // there are some existing nodes in our chain
         last.next = new Node(data);
      } else {
         // the chain is empty!
         this.head = new Node(data);
      }
   }

   getAt(index) {
      // if (!this.head) {
      //    return null;
      // }

      let counter = 0;
      let node = this.head;
      while (node) {
         if (counter === index) {
            return node;
         }

         counter++;
         node = node.next;
      }
      return null;
   }

   removeAt(index) {
      if (!this.head) {
         return;
      }

      if (index === 0) {
         this.head = this.head.next;
         return;
      }

      const previous = this.getAt(index - 1);
      if (!previous || !previous.next) {
         return;
      }
      previous.next = previous.next.next;
   }

   insertAt(data, index) {
      if (!this.head) {
         this.head = new Node(data);
         return;
      }

      if (index === 0) {
         this.head = new Node(data, this.head);
         return;
      }

      const previous = this.getAt(index - 1) || this.getLast();
      const node = new Node(data, previous.next);
      previous.next = node;
   }
}

module.exports = { Node, LinkedList };