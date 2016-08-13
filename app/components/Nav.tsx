import * as React from "react";
import { Link } from 'react-router';

interface NavProps {
    color: string;
}
export default class Nav extends React.Component<NavProps, any> {
    render() {
        return (
            <div>
                <ul role="nav">
                    <li><Link to="/about" activeStyle={{color: this.props.color}}>关于我们</Link></li>
                    <li><Link to="/main" activeStyle={{color: this.props.color}}>首页</Link></li>
                    <li><Link to="/cust" activeStyle={{color: this.props.color}}>客户管理</Link></li>
                </ul>
            </div>
        );
    }
}