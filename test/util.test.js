const assert = require("assert")
const util = require("../src/util")

it("getIndexOfSmallest", function() {
	assert.strictEqual(util.getIndexOfSmallest([1, 2 ,3]), 0)
	assert.strictEqual(util.getIndexOfSmallest([1, 2, -3]), 2)
	assert.strictEqual(util.getIndexOfSmallest([1, 0, 3]), 1)
})

// it("getPositions", function() {
// 	assert.strictEqual(util.getPositions([-1, -2, -3]))
// 	assert.strictEqual(util.getPositions([1, 2, 3]), true)
// 	assert.strictEqual(util.getPositions([1, 2, 3]), true)
// })

it("isArraySorted", function() {
	assert.strictEqual(util.isArraySorted([1, 2, 3]), true)
	assert.strictEqual(util.isArraySorted([1, 3, 2]), false)
	assert.strictEqual(util.isArraySorted([-1, -2, -3]), false)
})
