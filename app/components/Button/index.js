const classNames = require('classnames');
const react_1 = require('react');
const React = require('react');
class Button extends React.Component {
    render() {
        const { prefixCls, className, size, type, disabled, onClick, children } = this.props;
        const btnClass = classNames({
            [className]: true,
            [prefixCls]: true,
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-small`]: size === 'small',
        });
        return (React.createElement("button", {className: btnClass, type: type, disabled: disabled, onClick: onClick}, children));
    }
}
Button.propTypes = {
    prefixCls: react_1.PropTypes.string,
    type: react_1.PropTypes.string,
    size: react_1.PropTypes.string,
    disabled: react_1.PropTypes.bool,
    icon: react_1.PropTypes.bool,
    onClick: react_1.PropTypes.func,
    className: react_1.PropTypes.string,
};
Button.defaultProps = {
    prefixCls: 'bm-button',
    type: 'button',
    disabled: false,
    onClick: () => { },
    className: '',
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
//# sourceMappingURL=index.js.map