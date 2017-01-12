import * as React from 'react';
import Nav from '../../components/Nav';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <Nav color="green"/>
                <h1>关于我们</h1>
                <h2>专业的FE</h2>
            </div>
        );
    }
}
