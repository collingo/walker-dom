function WalkerDom() {};
WalkerDom.prototype = {
  constructor: WalkerDom,
  child: function(cb, node) {
    var next = node.firstChild;
    if(next) {
      cb(next);
    }
  },
  sibling: function(cb, node) {
    var next = node.nextSibling;
    if(next) {
      cb(next);
    }
  }
};
module.exports = WalkerDom;