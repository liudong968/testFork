define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Div = void 0;
    var Div = (function () {
        function Div(content) {
            this.content = content;
            var elem = document.createElement('div');
            elem.innerText = content;
            document.body.appendChild(elem);
        }
        return Div;
    }());
    exports.Div = Div;
});
define("page", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page = (function () {
        function Page() {
            new components_1.Div('This is Hedaer');
            new components_1.Div('This is Content');
            new components_1.Div('This is Footer');
        }
        return Page;
    }());
    exports.default = Page;
    $(function () {
        alert('JSPang');
    });
});
