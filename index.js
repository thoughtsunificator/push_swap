const fs = require("fs")
constant = require("./lib/constant")
util = require("./src/util")
config = require("./lib/config.json")
push_swap = require("./src/push_swap")
cli = require("./src/cli")

// merge env with config
if(fs.existsSync("./env.json") === true) {
	config = {...config, ...require("./env.json")}
}

if(process.argv.includes("--debug") === true) {
	config.DEBUG = true
}

let listA = process.argv.slice(2).map(str => parseFloat(str)).filter(item => isNaN(item) === false)
let listB = []

if(listA.length === 0) {
	listA = Array.from({length: 10}, () =>  Math.floor(Math.random() * (50 - -5) + -5));
}

 // TODO
if(process.argv.includes("--bench") === true) {
	console.log("\nBench mode")
	let bench = util.bench(config.BENCH_LIST_LENGTH)
	util.printBench(bench)
} else if(process.argv.includes("--cli") === true) {
	console.log("\nCLI mode")
	cli.init(listA, listB)
} else {
	const original = listA.slice()
	let instructions = push_swap.sort(listA, listB)
	if(config.DEBUG === true) {
		util.printDebug(listA, listB, original, instructions)
	} else {
		console.log(instructions.join(" "))
	}
}
