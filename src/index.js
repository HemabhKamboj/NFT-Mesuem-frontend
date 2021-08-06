import React from 'react';
import { render } from 'react-dom';
import { ContractKitProvider } from '@celo-tools/use-contractkit';

import './styles/fonts.css';
import './styles/style.css';
// import '@celo-tools/use-contractkit/lib/styles.css';
import 'rmc-tabs/assets/index.css';
import App from './App';

const root = document.createElement('div');
document.body.appendChild(root);

render(<App />, root);
