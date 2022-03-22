/* 
21. Merge Two Sorted ListsEasy

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
*/
//const mergeTwoLists = (list1, list2) => [...list1, ...list2].sort()
var mergeTwoLists = function (list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])) //[1,1,2,3,4,4]
console.log(mergeTwoLists([], [])) // []
console.log(mergeTwoLists([], [0])) // 0
