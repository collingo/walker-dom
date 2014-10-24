function WalkerDom() {};
WalkerDom.prototype = {
	constructor: WalkerDom,
	child: function(node) {
		return node.firstChild;
	},
	sibling: function(node) {
		return node.nextSibling;
	}
};
module.exports = WalkerDom;