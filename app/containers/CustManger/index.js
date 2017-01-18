import * as React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {addNum, minusNum} from '../App/actions';
import {addNum as addCustNum, minusNum as minusCustNum} from './actions';


export class CustManger extends React.Component {
    render() {
        return (
            <div>
                <h1>客户管理</h1>
                <div>
                    <p>全局数:{this.props.num}</p>
                    <button onClick={this.props.onAddNum}>加jjj</button>
                    <button onClick={this.props.onMinusNum}>减</button>
                </div>
                <div>
                    <p>客户数:{this.props.custNum}</p>
                    <button onClick={this.props.onAddCustNum}>加</button>
                    <button onClick={this.props.onMinusCustNum}>减</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        num: state.global.num,
        custNum: state.custManger.custNum,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAddNum: ()=>dispatch(addNum()),
        onMinusNum: ()=>dispatch(minusNum()),
        onAddCustNum: ()=>dispatch(addCustNum()),
        onMinusCustNum: ()=>dispatch(minusCustNum()),
    };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(CustManger);
