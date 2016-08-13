

import * as React from 'react';

function App(props) {
  return (
    <div>
        <header>hello biz-mobile!</header>
        {props.children}
    </div>
  );
}

export default App;
