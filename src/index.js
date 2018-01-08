import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'mobx-react';
import CounterStore from './store/CounterStore';

const Root = (
    <Provider CounterStore={CounterStore}>
        <App />
    </Provider>
)

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(Root, document.getElementById('root'));
