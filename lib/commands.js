module.exports = {
	exit: function() {
		console.log("\nBye bye!")
		process.exit(1)
	},
	old: function() {
		console.log("\n", cli.oldListA)
	},
	position: function() {
		console.log("\npositions", util.getPositions(cli.listA))
	},
	reset: function() {
		cli.reset()
		util.printDebug(cli.listA, cli.listB, cli.oldListA, cli.instructions)
	},
	set: function(args) {
		let listA = args.map(str => parseFloat(str)).filter(item => isNaN(item) === false)
		if(listA.length === 0) {
			console.log("\n", "Invalid arguments")
		} else {
			cli.reset()
			cli.listA = listA.slice()
			console.log("\n", "listA set to", listA)
		}
	},
	sort: function() {
		cli.listB = []
		let instructions = push_swap.sort(cli.listA, cli.listB)
		util.printDebug(cli.listA, cli.listB, cli.oldListA, instructions)
	},
	bench: function(args) {
		let count = config.BENCH_LIST_LENGTH
		if(args.length >= 1 && isNaN(parseFloat(args[0])) !== true) {
			count = parseFloat(args[0])
		}
		let bench = util.bench(count)
		util.printBench(bench)
	},
	validate: function() {
		console.log("\n" + util.isArraySorted(cli.listA))
	}
}