import { lazy } from 'react';

export const path = '/one-collection';
export const title = 'OneCollection';
export const exact = true;
export const component = lazy(() => import('./OneCollection'));
