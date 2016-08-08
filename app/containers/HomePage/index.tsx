import * as React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {createStructuredSelector} from 'reselect';
import {selectNum} from '../App/selectors';

import {addNum, minusNum} from '../App/actions';
import Nav from '../../components/Nav';

interface HomePageProps {
    num:number;
    onAddNum: Function;
    onMinusNum: Function;
    changeRoute?: Function;
}

export class HomePage extends React.Component<HomePageProps, any> {

    componentDidMount() {
    }
    openAboutPage = () => {
        this.props.changeRoute('/about');
    }
    openAboutPageTest () {
        this.props.changeRoute('/about');
    }
    render() {
        return (
            <div>
                <Nav color="red"/>
                这是首页
                <p>全局数:{this.props.num}</p>
                <button onClick={this.props.onAddNum}>加</button>
                <button onClick={this.props.onMinusNum}>减</button>
                <button onClick={this.openAboutPage}>切换到关于我们1</button>
                <button onClick={() => this.props.changeRoute('/about')}>切换到关于我们2</button>
                <button onClick={this.openAboutPageTest.bind(this)}>切换到关于我们3</button>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch: any):{} {
    return {
        onAddNum: ()=>dispatch(addNum()),
        onMinusNum: ()=>dispatch(minusNum()),
        changeRoute: (url) => dispatch(push(url)),
        dispatch,
    };
}

const mapStateToProps = createStructuredSelector({
    num: selectNum(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
