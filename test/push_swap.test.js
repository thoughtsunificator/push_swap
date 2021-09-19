const assert = require("assert")
const push_swap = require("../src/push_swap")
constant = require("../lib/constant")

it("push", function() {
	let listA = [1]
	let listB = []
	push_swap.push(listB, listA)
	assert.deepEqual(listB, [1])
	assert.strictEqual(listA.length, 0)
})

it("swap", function() {
	let listA = [1, 2]
	push_swap.swap(listA)
	assert.deepEqual(listA, [2, 1])
})

it("rotate", function() {
	// backward
	let listA = [1, 2, 3]
	push_swap.rotate(listA, constant.BACKWARD)
	assert.deepEqual(listA, [2, 3, 1])
	// forward
	listA = [1, 2, 3]
	push_swap.rotate(listA, constant.FORWARD)
	assert.deepEqual(listA, [3, 1, 2])
})
