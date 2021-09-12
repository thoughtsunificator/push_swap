(function() {

	this.bench = function(count) {
		let listA = []
		let listB = []
		for(let i = 0; i < count; i++) {
			listA.push(Math.random() * count)
		}
		let ms = new Date().getTime()
		let instructions = push_swap.sort(listA, listB)
		let duration = (new Date().getTime() - ms)
		return {
			listA,
			instructions,
			duration,
			count
		}
	}

	/**
	 * Retrieve the index of the least number of an array
	 * @param  {number[]} 	array 	An array of numbers
	 * @return {integer}	The index of the least number
	 */
	this.getIndexOfSmallest = function(array) { // TODO naming convention
		let least = null
		for(let [index, number] of array.entries()) {
			if(least === null || number < least) {
				least = number
			}
		}
		return array.indexOf(least)
	}

	/**
	 * Returns a position for numbers in the array so that it can be sorted in ascending order
	 * @param {number[]} An array of numbers
	 * @return {number[]}
	 */
	this.getPositions = function(array) { // TODO naming convention
		let positions = []
		// find the smallest number
		let i = this.getIndexOfSmallest(array)
		let least = array[i]
		let length = array.length
		let array2 = array.slice()
		let index = 0
		while(array2.length > 0) {
			if(index + 1 > array.length) {
				index = 0
			} else {
				index++
			}
			let number = array[index]
			let next = Math.min(...array2.filter(n => n >= least))
			if(next == number) {
				positions.push({
					position: positions.length,
					number,
					index
				})
				least = number
				array2.splice(array2.indexOf(number), 1)
			}
		}
		// sort by index
		positions.sort(function(a, b) {
			if(a.index > b.index) {
				return 1
			}
			if(b.index > a.index) {
				return -1
			}
			return 0
		})
		return positions
	}

	/**
	 * Check whether an array of numbers is in ascending order
	 * @param  {number[]} array
	 * @returns {boolean}
	 */
	this.isArraySorted = function(array) { // TODO naming convention
		let isAscending = true
		for(let [index, number] of array.entries()) {
			if(index >= 1 && min !== null && number < min) {
				isAscending = false
			} else {
				min = number
			}
		}
		return isAscending
	}

	/**
	 * Show various useful information
	 * @param  {number[]} listA
	 * @param  {number[]} listB
	 */
	this.printDebug = function(listA, listB, oldListA, instructions) { // TODO this is crap
		console.log("\n===========Debug Informations===========")
		console.log("oldListA", oldListA)
		console.log("instructions", instructions)
		console.log("listA", listA)
		console.log("listB", listB)
		console.log("========================================")
	}

	this.printBench = function(bench) {
		console.log(`\nTook ${bench.duration}ms and ${bench.instructions.length} instructions for ${bench.count} numbers`)
		console.log("isArraySorted", util.isArraySorted(bench.listA))
	}

	this.log = function(...msg) {
		if(config.DEBUG === false) {
			return
		}
		console.log.apply(null, msg)
	}

}).call(module.exports)
