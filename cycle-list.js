/*Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its next value pointing to an earlier node in the list). For this exercise, create a linked list with the name CycleList. Be sure to insert nodes in the list so that it has a cycle. Then test your program with a cycleList function.*/

const { LinkedList } = require('./LinkedList')
const suppFuncs = require('./supplemental-functions')

//create a linked list with the name CycleList. Be sure to insert nodes in the list so that it has a cycle
let CycleList = new LinkedList
let CycleItems = ['one','two','three', 'four']
CycleItems.forEach(item => CycleList.insertLast(item))


function cycleList(list) {
    let singleNode = list.head
    let doubleNode = list.head

    while(singleNode !== null && doubleNode !== null){
        singleNode = singleNode.next
        doubleNode = doubleNode.next.next

        if(singleNode === doubleNode){
            return true
        }
    }
    return false
}
console.log(cycleList(CycleList))
CycleList.head.next.next.next = CycleList.head.next
console.log(cycleList(CycleList))
