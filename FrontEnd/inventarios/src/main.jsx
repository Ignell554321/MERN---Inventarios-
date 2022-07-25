import React from 'react';
import ReactDOM from 'react-dom/client';

import { FirstApp } from './fistApp';

import {App} from './HelloWorldApp';

//import './styles.css';

//import App from './HelloWorldApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="hola"  subtitle={123}/>
        <App title="hola"></App>
    </React.StrictMode>
)