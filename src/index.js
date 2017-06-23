import React from 'react';
import ReactDOM from 'react-dom';
import Test from './Test';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Test />, document.getElementById('root'));
registerServiceWorker();
