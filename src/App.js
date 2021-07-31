import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Loading from '@/components/Loading';
import routes from '@/routes';

// components
import TabBar from '@/components/TabBar';

const App = () => {
  return (
    <div className="">
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            {routes.map((props) => {
              console.log(props);
              return <Route key={props.title} {...props} />;
            })}
          </Switch>
        </Suspense>
        <TabBar />
      </Router>
    </div>
  );
};

export default App;
