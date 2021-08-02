import { lazy } from 'react';

export const path = '/createCollection';
export const exact = true;
export const title = 'CreateCollection';
export const component = lazy(() => import('./CreateCollection'));
