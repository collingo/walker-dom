function WalkerDom() {};
WalkerDom.prototype = {
  constructor: WalkerDom,
  child: function(cb, node) {
    if(node.firstChild) {
      cb(node.firstChild);
    }
  },
  sibling: function(cb, node) {
    if(node.nextSibling) {
      cb(node.nextSibling);
    }
  }
};
module.exports = WalkerDom;