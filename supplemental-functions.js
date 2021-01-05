/*Implement the following functions that operate on your linked list class. Note that these should be free functions instead of methods of the linked list class, so implement them outside the linked list class. Test each function using the list created in exercise 1.*/

const suppFuncs = {
    //display: displays the linked list
    display(list) {
        let listItems = []
        if (list.head === null) {
            return "list is empty"
        }
        if (list.head) {
            list = list.head
        }
        while (list.next !== null) {
            listItems.push(list.value)
            list = list.next
        }
        listItems.push(list.value)
        return listItems.join('\n')
    },
    //size: returns the size of the linked list
    size(list) {
        let listSize = 0
        if (list.head === null) {
            return "list is empty"
        }
        if (list.head) {
            list = list.head
        }
        while (list.next !== null) {
            listSize++
            list = list.next
        }
        listSize++
        return listSize
    },
    //isEmpty: finds if the list is empty or not 
    isEmpty(list) {
        if (!list.head) {
            return true
        }
        return false
    },
    //findPrevious: finds the node before the item you are looking for
    findPrevious(list, key) {
        if (!list.head) {
            return null
        }
        let currentNode = list.head
        let previousNode = list.head

        while (currentNode.value !== key) {
            if (currentNode.next === null) {
                return null
            }
            else {
                previousNode = currentNode
                currentNode = currentNode.next
            }
        }
        return previousNode
    },
    //findLast: returns the last node in the linked list
    findLast(list) {
        if (!list.head) {
            return null
        }
        let lastNode = list.head

        while (lastNode.next !== null) {
            lastNode = lastNode.next
        }
        return lastNode
    },
}


const { main } = require('./singly-linked-list');
let SSL = main()

console.log(suppFuncs.display(SSL))
console.log(suppFuncs.size(SSL))
console.log(suppFuncs.isEmpty(SSL))
console.log(suppFuncs.findPrevious(SSL, 'Helo'))
console.log(suppFuncs.findLast(SSL))

module.exports = suppFuncs


