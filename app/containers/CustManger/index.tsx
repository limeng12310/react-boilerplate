import * as React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {createStructuredSelector} from 'reselect';
import {selectCustNum} from './selectors';
import {selectNum} from '../App/selectors';

import {addNum, minusNum} from '../App/actions';
import {addNum as addCustNum, minusNum as minusCustNum} from './actions';
import Nav from '../../components/Nav';

interface CustMangerProps {
    num:number;
    custNum?: number;
    onAddNum: Function;
    onMinusNum: Function;
    onAddCustNum: Function;
    onMinusCustNum: Function;
}

export class CustManger extends React.Component<CustMangerProps, any> {
    render() {
        return (
            <div>
                <Nav color="blue"/>
                <h1>客户管理</h1>
                <div>
                    <p>全局数:{this.props.num}</p>
                    <button onClick={this.props.onAddNum}>加</button>
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

function mapDispatchToProps(dispatch: any):{} {
    return {
        onAddNum: ()=>dispatch(addNum()),
        onMinusNum: ()=>dispatch(minusNum()),
        onAddCustNum: ()=>dispatch(addCustNum()),
        onMinusCustNum: ()=>dispatch(minusCustNum()),
        dispatch,
    };
}

const mapStateToProps = createStructuredSelector({
    num: selectNum(),
    custNum: selectCustNum(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(CustManger);
