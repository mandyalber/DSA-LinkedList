/*Write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch.*/

class _Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    //insertFirst
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }
    //insertLast
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }
    //remove 
    remove(item) {
        if (!this.head) {
            return null
        }
        if (this.head.value === item) {
            this.head = this.head.next
            return
        }
        let currentNode = this.head
        let previousNode = this.head

        while ((currentNode !== null) && (currentNode.value !== item)) {
            previousNode = currentNode
            currentNode = currentNode.next
        }
        if (currentNode === null) {
            console.log('item not found')
            return
        }
        previousNode.next = currentNode.next
    }
    //find
    find(item) {
        let currentNode = this.head
        if (!this.head) {
            return null
        }
        while (currentNode.value !== item) {
            if (currentNode.next === null) {
                return null
            }
            else {
                currentNode = currentNode.next
            }

        }
        return currentNode
    }

    //Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
    insertBefore(item, key) {
        if (!this.head) {
            return null
        }
        let currentNode = this.head
        let previousNode = this.head

        while (currentNode.value !== key) {
            if (currentNode.next === null) {
                return null
            }
            else {
                previousNode = currentNode
                currentNode = currentNode.next
            }
        }
        previousNode.next = new _Node(item, currentNode)
    }

    //Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
    insertAfter(item, key) {
        if (!this.head) {
            return null
        }
        let currentNode = this.head

        while (currentNode.value !== key) {
            if (currentNode.next === null) {
                return null
            }
            else {
                currentNode = currentNode.next
            }
        }
        currentNode.next = new _Node(item, currentNode.next)
    }

    //Implement a function called insertAt() that inserts an item at a specific position in the linked list.
    insertAt(item, index) {
        if(!this.head){
            return null
        }
        if (index === 0){
            this.insertFirst(item)
        }
        let currentNode = this.head
        let previousNode = this.head
        let count = 0
        while (count < index){
            if(currentNode.next === null){
                return null
            }
            else{
                count++
                previousNode=currentNode
                currentNode=currentNode.next
            }

        }
        previousNode.next = new _Node(item, currentNode)
    }

}

module.exports = {
    LinkedList, _Node
}

