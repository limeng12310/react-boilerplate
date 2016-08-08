const React = require("react");
const react_router_1 = require('react-router');
class Nav extends React.Component {
    render() {
        return (React.createElement("div", null, React.createElement("ul", {role: "nav"}, React.createElement("li", null, React.createElement(react_router_1.Link, {to: "/about", activeStyle: { color: this.props.color }}, "关于我们")), React.createElement("li", null, React.createElement(react_router_1.Link, {to: "/main", activeStyle: { color: this.props.color }}, "首页")), React.createElement("li", null, React.createElement(react_router_1.Link, {to: "/cust", activeStyle: { color: this.props.color }}, "客户管理")))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Nav;
//# sourceMappingURL=Nav.js.map