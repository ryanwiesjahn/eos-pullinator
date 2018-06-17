import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import WebFont from 'webfontloader';
import registerServiceWorker from './registerServiceWorker';
import App from './App/App';

WebFont.load({
    google: {
      families: ['Ubuntu:300,500,700']
    }
});

injectGlobal`
    body {
        background: #F7F8FD;
        color: rgb(70, 85, 104);
        font-family: 'Ubuntu', sans-serif;
        font-size: 16px;
        font-weight: 300;
        margin: 0;
        padding: 0;
    }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();