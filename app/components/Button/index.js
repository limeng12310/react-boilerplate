import * as classNames from 'classnames';
import { PropTypes } from 'react';
import * as React from 'react';
export default class Button extends React.Component {
  static defaultProps = {
    prefixCls: 'bm-button',
    type: 'button',
    disabled: false,
    onClick: () => { },
    className: '',
  };

  render() {
    const {prefixCls, className, size, type, disabled, onClick, children} = this.props;
    const btnClass = classNames({
      [className]: true,
      [prefixCls]: true,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-small`]: size === 'small',
    })
    return (
        <button className={btnClass} type={type} disabled={disabled} onClick={onClick} >{children}</button>
    );
  }
}