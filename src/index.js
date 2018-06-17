import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import WebFont from 'webfontloader';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
    google: {
      families: ['Ubuntu:300,700']
    }
});

injectGlobal`
    body {
        background: #F7F8FD;
        color: #1F2E41;
        font-family: 'Ubuntu', sans-serif;
        font-weight: 300;
        margin: 0;
        padding: 0;
    }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();