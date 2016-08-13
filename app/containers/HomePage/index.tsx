import * as React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {createStructuredSelector} from 'reselect';
import {selectNum} from '../App/selectors';

import {addNum, minusNum} from '../App/actions';
import Nav from '../../components/Nav';
import Button from '../../components/Button';

interface HomePageProps {
    num:number;
    onAddNum: (x: any) => void;
    onMinusNum: (x: any) => void;
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
                这是首页kkk
                <p>全局数:{this.props.num}</p>
                <Button onClick={this.props.onAddNum} size="small">加</Button>
                <Button onClick={this.props.onMinusNum} disabled={true} size="small">减</Button>
                <Button onClick={this.openAboutPage}>切换到关于我们1</Button>
                <Button onClick={() => this.props.changeRoute('/about')} disabled={true}>切换到关于我们2</Button>
                <Button className="customer-btn" onClick={this.openAboutPageTest.bind(this)}>切换到关于我们3</Button>
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
