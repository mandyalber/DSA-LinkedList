/*Write an algorithm that will sort a given linked list. For example given a list such as 3->2->5->7->1, your program will output the sorted version of this list which will be 1->2->3->5->7. You may not use another list or any other data structure such as an array to store the data.*/

const { LinkedList } = require("./LinkedList");
const suppFuncs = require("./supplemental-functions");

const sortList = new LinkedList
let items = [3, 2, 5, 7, 1]
items.forEach(item => sortList.insertLast(item))

function sort(list) {
    let currentNode = list.head
    let tempNode
    let shouldSort = true
    
    if (list.next === null) {
        return 'there are less than 2 items in the list'
    }

    while (shouldSort) {
        shouldSort = false

        while (currentNode.next !== null) {
            if (currentNode.value > currentNode.next.value) {
                tempNode = currentNode.value
                currentNode.value = currentNode.next.value
                currentNode.next.value = tempNode
                shouldSort = true
            }
            currentNode = currentNode.next
        }
        if (!currentNode.next) {
            currentNode = list.head
        }
    }
    return list
}

console.log(suppFuncs.display(sort(sortList)))
