import { lazy } from 'react';

export const path = '/auth';
export const exact = true;
export const title = 'Auth';
export const component = lazy(() => import('./Auth'));
