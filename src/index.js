import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { fireBase, FieldValue } from './lib/firebase';

ReactDOM.render(
    <FirebaseContext.Provider value={{ fireBase, FieldValue }}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root'));

