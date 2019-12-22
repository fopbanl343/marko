var VNode = require("./VNode");
var inherit = require("raptor-util/inherit");

function VComponent(component, key, preserve) {
    this.___VNode(null /* childCount */);
    this.___key = key;
    this.___component = component;
    this.___preserve = preserve;
}

VComponent.prototype = {
    ___nodeType: 2
};

inherit(VComponent, VNode);

module.exports = VComponent;
