
function HtmlElement() {
    this.click = function() {
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function() {
    console.log('focused');
}

function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function(item) {
        this.item.push(item);
    }

    this.removeItem = function(item) {
        this.item.splice(this.items.indexOf(item), 1);
    }
}

HtmlSelectElement.prototype = new HtmlElement();
