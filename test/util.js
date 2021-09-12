let util = require("../src/util")

exports.getIndexOfSmallest = function(test) {
	test.expect(3)
	test.equals(util.getIndexOfSmallest([1, 2 ,3]), 0)
	test.equals(util.getIndexOfSmallest([1, 2, -3]), 2)
	test.equals(util.getIndexOfSmallest([1, 0, 3]), 1)
	test.done()
}

// exports.getPositions = function(test) {
// 	test.expect(3)
// 	test.equals(util.getPositions([-1, -2, -3]))
// 	test.equals(util.getPositions([1, 2, 3]), true)
// 	test.equals(util.getPositions([1, 2, 3]), true)
// 	test.done()
// }

exports.isArraySorted = function(test) {
	test.expect(3)
	test.equals(util.isArraySorted([1, 2, 3]), true)
	test.equals(util.isArraySorted([1, 3, 2]), false)
	test.equals(util.isArraySorted([-1, -2, -3]), false)
	test.done()	
}