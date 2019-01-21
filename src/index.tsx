import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TriangleView from './triangle/TriangleView';
import TriangleModel from './triangle/TriangleModel';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

var model = new TriangleModel();
ReactDOM.render(<TriangleView model={model} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
