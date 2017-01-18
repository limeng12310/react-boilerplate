import * as React from 'react';
import NotFound from '../../components/NotFound'
function App(props) {
    return (
        props.children || <NotFound/>
    );
}

export default App;
