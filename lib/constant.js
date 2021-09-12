module.exports = {
	BACKWARD: "backward",
	FORWARD: "forward",
	METHOD: {
		// échange les positions des deux premièrs élèments
		SWAP_LIST_A : "sa",
		SWAP_LIST_B : "sb",
		SWAP_BOTH : "sc",

		// prend le premier élèment de B et le place à la première position de A
		PUSH_LIST_A : "pa",
		// prend le premier élèment de A et le place à la première position de B
		PUSH_LIST_B : "pb",

		// rotation vers le début; le premier élèment devient le dernier
		ROTATION_LIST_A_BACKWARD : "ra",
		ROTATION_LIST_B_BACKWARD : "rb",
		ROTATION_BOTH_BACKWARD : "rr",

		// rotation vers la fin; le dernier élèment devient le premier
		ROTATION_LIST_A_FORWARD : "rra",
		ROTATION_LIST_B_FORWARD : "rrb",
		ROTATION_BOTH_FORWARD : "rrr",
	},
	// used by CLI TODO: could be automatically generated
	LIST_METHOD: [
		"sa", "sb", "sc", "pa", "pb", "ra", "rb", "rr", "rra", "rrb", "rrr"
	]
}