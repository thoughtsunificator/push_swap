const readline = require("readline");
const commands = require("../lib/commands.js");

(function() {

	/**
	 * This will old the readline interface
	 */
	let _interface
	/**
	 * This will be the main list of numbers we will be working with
	 */
	this.listA = []
	/**
	 * This list will be used as a "shelter" to sort our number
	 */
	this.listB = []

	this.oldListA = []

	this.instructions = []

	/**
	 * Initialize our variables and prompt
	 * @param  {number[]} listA
	 * @param  {number[]} listB
	 */
	this.init = function(listA, listB) {
		_interface = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		})
		console.log("\n", "listA", listA)
		this.oldListA = listA.slice()
		this.listA = listA
		this.listB = listB
		this.prompt()
	}


	/**
	 * Reset the state of our CLI
	 */
	this.reset = function() {
		this.listA = this.oldListA.slice()
		this.listB = []
		this.instructions = []
	}

	/**
	 * Bug user for an answer
	 * @param  {boolean} printDebug
	 */
	this.prompt = function() {
		_interface.question("\nMethod: ", answer => {
			let command = answer.split(" ")[0]
			let args = answer.split(" ").slice(1)
			if(constant.LIST_METHOD.includes(answer) === true) {
				push_swap.runMethod(answer, this.listA, this.listB, this.instructions)
				util.printDebug(this.listA, this.listB, this.oldListA, this.instructions)
			} else if(commands.hasOwnProperty(command)) {
				commands[command](args)
			} else {
				console.log("\nAvailable methods and commands: " + constant.LIST_METHOD.concat(Object.keys(commands)).join(", "))
			}
			this.prompt()
		});
	}

}).call(module.exports)
