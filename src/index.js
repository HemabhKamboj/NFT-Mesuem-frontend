import React from 'react';
import { render } from 'react-dom';

import './styles/fonts.css';
import './styles/style.css';
// import 'antd-mobile/dist/antd-mobile.css';
import 'rmc-tabs/assets/index.css';
import App from './App';

const root = document.createElement('div');
document.body.appendChild(root);

render(<App />, root);
