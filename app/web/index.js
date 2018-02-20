import React          from 'react';
import { render }     from 'react-dom';
// import Root           from './containers/Root';
// import configureStore from '../store/configureStore';

// load our css
// require('./styles/style.less');

// const store = configureStore();
const rootElement = document.getElementById('root');
const element = <h1>Hello, world. I am web . hhhh</h1>;
render( element, rootElement );

// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('root'));