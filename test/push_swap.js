let push_swap = require("../src/push_swap")
constant = require("../lib/constant") // rotate method needs constant

exports.push = function(test) {
	test.expect(2)
	let listA = [1]
	let listB = []
	push_swap.push(listB, listA)
	test.deepEqual(listB, [1])
	test.equal(listA.length, 0)
	test.done()
}

exports.swap = function(test) {
	test.expect(1)
	let listA = [1, 2]
	push_swap.swap(listA)
	test.deepEqual(listA, [2, 1])
	test.done()
}

exports.rotate = function(test) {
	test.expect(2)
	// backward
	let listA = [1, 2, 3]
	push_swap.rotate(listA, constant.BACKWARD)
	test.deepEqual(listA, [2, 3, 1])
	// forward
	listA = [1, 2, 3]
	push_swap.rotate(listA, constant.FORWARD)
	test.deepEqual(listA, [3, 1, 2])
	test.done()
}
