import { lazy } from 'react';

export const path = '/library';
export const exact = true;
export const title = 'Library';
export const component = lazy(() => import('./Library'));
