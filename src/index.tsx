// Import to get Fetch working in IE
import 'whatwg-fetch'
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components/App';

ReactDOM.render (
    <App/>,
  document.getElementById("root")
);