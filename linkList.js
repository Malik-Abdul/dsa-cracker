var NodeTest = /** @class */ (function () {
    function NodeTest(data, next) {
        if (next === void 0) { next = null; }
        this.data = data;
        this.next = next;
    }
    return NodeTest;
}());
var LinkList = /** @class */ (function () {
    function LinkList() {
        this.head = null;
        this.size = 0;
    }
    LinkList.prototype.insertion = function (data) {
        if (!this.head) {
            this.head = new NodeTest(data, this.head);
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new NodeTest(data);
        }
        this.size++;
    };
    LinkList.prototype.deletion = function (index) {
        if (index > this.size || !this.head) {
            return "Error: index is too large";
        }
        else {
            var count = 0;
            var current = this.head;
            var prev = null;
            while (count < index) {
                count++;
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
        }
    };
    LinkList.prototype.showData = function () {
        console.log("-----Show Data------");
        var current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    };
    return LinkList;
}());
var list = new LinkList();
list.insertion(15);
list.insertion(25);
list.insertion(26);
list.insertion(27);
list.insertion(29);
list.insertion(31);
list.insertion(34);
list.insertion(36);
list.showData();
list.deletion(6);
list.showData();
