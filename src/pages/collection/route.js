import { lazy } from 'react';

export const path = '/collection';
export const exact = true;
export const title = 'Collection';
export const component = lazy(() => import('./Collection'));
