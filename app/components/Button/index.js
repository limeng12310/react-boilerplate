const classNames = require('classnames');
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