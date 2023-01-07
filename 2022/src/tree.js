class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        let node = new Node(value);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            // at least one node exists, 
            // new node first, previous
            // first is .next of new first.
            let temp = this.first;
            this.first = node;
            this.first.next = temp;
        }

        // return incremented this.size
        return this.size++;
    }

    pop(){
        // no nodes:
        if (!this.first) {
            return null;
        }
        let temp = this.first;
        // only one node:
        if (this.first === this.last) {
            this.last = null;
        }
        // set first to be next
        this.first = this.first.next;

        this.size--;
        return temp.value;
    }
}

export { Stack , Node };