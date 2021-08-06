import * as Home from './pages/home/route';
import * as Library from './pages/library/route';
import * as OneCollection from './pages/one-collection/route';
import * as CreateCollection from'./pages/createCollection/route';
import * as Auth from'./pages/Auth/route';
export default [Home, Library, CreateCollection, OneCollection, Auth];

export const TabRoutes = [CreateCollection, Home, Library];
