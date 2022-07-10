import React from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';
import { legacy_createStore, compose, applyMiddleware } from 'redux';
import { rootReduser } from './redux/rootReduser';
import { Provider } from 'react-redux/es/exports';
import './index.css';
import App from './App';
import { spamFilter } from './redux/middleware';


const store = legacy_createStore(rootReduser, compose(
	applyMiddleware(
		thunk,
		spamFilter
	),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);