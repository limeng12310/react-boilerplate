import * as classNames from 'classnames';
import { PropTypes } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
let closeDialog = () => {};

interface ButtonProps {
    text: string;
    className?: string;
    color?: string;
}

interface AlertConfigProps {
    title?: string;
    message?: string;
    buttons?: Array<ButtonProps>;
    onClick?: (x:any) => void;
}

interface AlertDialogProps {
    prefixCls?: string;
    title: string;
    message: string;
    className?: string;
    onClick: (x: any)=>void;
    buttons: Array<ButtonProps>;
    type: string;
}

class AlertDialog extends React.Component<AlertDialogProps, any> {
    static defaultProps = {
        prefixCls: 'bm-alert',
        title: '提示',
        message: '',
        buttons: [{text: '确定'}],
        className: '',
    };

    render() {
        const {prefixCls, title, message, buttons, className, onClick, type} = this.props;
        const alertClass = classNames({
            [className]: true,
            [prefixCls]: true,

        });
        const btnsClass = classNames({
            [`${prefixCls}-btns`]: true,
            [`${prefixCls}-btns-row`]: buttons.length === 2,
            [`${prefixCls}-btns-column`]: buttons.length !== 2,
        });
        return (
            <div className={alertClass}>
                <div className={`${prefixCls}-mask`}></div>
                <div className={`${prefixCls}-wrap`}>
                    <div className={`${prefixCls}-info`}>
                        <p className={`${prefixCls}-title`}>{title}</p>
                        <p className={`${prefixCls}-message`}>{message}</p>
                    </div>
                    <div className={btnsClass}>
                        {buttons.map((item, index) => {
                            const color = item.color;
                            let button = null;
                            if(item.color) {
                                button = <button style={{color: item.color}} key={index} className={`${prefixCls}-btn`} onClick={()=>onClick(index)}>{item.text}</button>;
                            } else {
                                button = <button key={index} className={`${prefixCls}-btn`} onClick={()=>onClick(index)}>{item.text}</button>;
                            }
                            return button;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}


function createDialog(config, type) {
    let div = document.createElement('div');
    document.body.appendChild(div);

    let onClick = config.onClick || (() => {});
    function close() {
        if (div) {
            document.body.style.overflow = '';
            ReactDOM.unmountComponentAtNode(div);
            div.parentNode.removeChild(div);
            div = null;
        }
    }
    closeDialog = close;
    function cb(buttonIndex) {
        onClick(buttonIndex);
        close();
    }
    document.body.style.overflow = 'hidden';
    ReactDOM.render(<AlertDialog type={type} onClick={cb} title={config.title} message={config.message} buttons={config.buttons}/>, div);
}

export default class Alert {
    static alert = (config?: AlertConfigProps) => {
        createDialog(config || {}, 'alert');
    }
    static confirm = (config?: AlertConfigProps) => {
        createDialog(config || {}, 'confirm');
    }
    static close = () => {
        closeDialog();
    }
};

