(function() {

	/**
	 * Take from the source and push to the target
	 * @param  {number[]} target
	 * @param  {number[]} source
	 */
	this.push = function(target, source) { // TODO
		if(source.length === 0) {
			return
		}
		target.splice(0, 0, source[0])
		source.splice(0, 1)
	}

	/**
	 * Swap position of first and second elements
	 * @param  {number[]} array
	 */
	this.swap = function(array) { // TODO
		if(array.length <= 1) {
			return
		}
		array.splice(0, 2, array[1], array[0])
	}

	/**
	 * Rotate array toward a given direction
	 * @param  {number[]} array    
	 * @param  {string} direction
	 */
	this.rotate = function(array, direction) { // TODO
		if(array.length <= 1) {
			return
		}
		let array2 = []
		if(direction === constant.BACKWARD) {
			array2.push(array[1])
			for(let i = 2; i < array.length; i++) {
				array2.push(array[i])
			}
			array2.push(array[0])
		} else if(direction === constant.FORWARD) {
			array2.push(array[array.length -1])
			for(let i = 0; i < array.length - 1; i++) {
				array2.push(array[i])
			}
		}
		array.splice(0, array.length, ...array2);
	}

	/**
	 * Run a method on an array
	 * @param  {string} name The name of the method
	 * @param  {number[]} listA
	 * @param  {number[]} listB
	 * @param  {string[]} instructions
	 */
	this.runMethod = function(name, listA, listB, instructions) {
		if(name === constant.METHOD.SWAP_LIST_A) {
			this.swap(listA)
		} else if(name === constant.METHOD.SWAP_LIST_B) {
			this.swap(listB)
		} else if(name === constant.METHOD.SWAP_BOTH) {
			this.swap(listA)
			this.swap(listB)
		} else if(name === constant.METHOD.PUSH_LIST_A) {
			this.push(listA, listB)
		} else if(name === constant.METHOD.PUSH_LIST_B) {
			this.push(listB, listA)
		} else if(name === constant.METHOD.ROTATION_LIST_A_BACKWARD) {
			this.rotate(listA, constant.BACKWARD)
		} else if(name === constant.METHOD.ROTATION_LIST_B_BACKWARD) {
			this.rotate(listB, constant.BACKWARD)
		} else if(name === constant.METHOD.ROTATION_BOTH_BACKWARD) {
			this.rotate(listA, constant.BACKWARD)
			this.rotate(listB, constant.BACKWARD)
		} else if(name === constant.METHOD.ROTATION_LIST_A_FORWARD) {
			this.rotate(listA, constant.FORWARD)
		} else if(name === constant.METHOD.ROTATION_LIST_B_FORWARD) {
			this.rotate(listB, constant.FORWARD)
		} else if(name === constant.METHOD.ROTATION_BOTH_FORWARD) {
			this.rotate(listA, constant.FORWARD)
			this.rotate(listB, constant.FORWARD)
		}
		instructions.push(name)
	}

	/**
	 * Sort an array using a limited set of methods
	 * @param  {number[]} listA
	 * @param  {number[]} listB
	 */
	this.sort = function(listA, listB) {
		// first and foremost lets get started by getting the ascending position
		let positions = util.getPositions(listA)
		let instructions = []
		let position = 0
		let passes = 0
		util.log("\npositions", positions)
		while(true) {
			this.passes++
			util.log("\n=====Sorting "+ passes +" pass(es)======")
			let number = listA[0] // the number we are looking at
			let target = positions.find(data => data.position === position) // the number we're looking for
			util.log("target", target)
			util.log("position", position)
			util.log("number", number)
			util.log("listA", listA)
			util.log("listB", listB)
			if(target.number === number) {
				position++		
				util.log("[info] We found the target, we're pushing it to b")
				push_swap.runMethod(constant.METHOD.PUSH_LIST_B, listA, listB, instructions)
			} else { // we're looking at the wrong number
				util.log("[info] We did not found the target")
				// if the next number is our target then use swap instead
				if(listA[1] === target.number) {
					util.log("[info] Next number is our target")
					util.log("[info] Swapping listA...")
					push_swap.runMethod(constant.METHOD.SWAP_LIST_A, listA, listB, instructions)
				} else if(listA.indexOf(target.number) >= Math.round(listA.length / 2)) { // target is at the back
					util.log("[info] Target is at the back; Rotating forward...")
					push_swap.runMethod(constant.METHOD.ROTATION_LIST_A_FORWARD, listA, listB, instructions)
				} else { // target is at the front
					util.log("[info] Target is at the front; Rotating backward...")
					push_swap.runMethod(constant.METHOD.ROTATION_LIST_A_BACKWARD, listA, listB, instructions)
				}
			}
			if(listA.length === 0 || util.isArraySorted(listA) === true) { // TODO
				util.log("[info] And... We're done sorting the numbers")
				// push back each item
				let length = listB.length
				if(length >= 1) {
					util.log("[info] Pushing back items to listA...")
				}
				for(let i = 0; i < length; i++) {
					push_swap.runMethod(constant.METHOD.PUSH_LIST_A, listA, listB, instructions)
				}
				break
			}
		}
		return instructions
	}

}).call(module.exports)
