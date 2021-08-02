import { Tabs } from 'rmc-tabs';
import routes from '@/routes';
import { useHistory } from 'react-router';

const TabBar = () => {
  const history = useHistory();

  const changeRoute = (props) => {
    history.push(props.key === 'Home' ? '/' : props.key.toLowerCase());
  };

  return (
    <Tabs
      style={{ height: '30px' }}
      className="fixed bottom-0"
      onTabClick={changeRoute}
      tabs={routes.map((props) => ({
        key: props.title,
        title: props.title,
      }))}
      initalPage={'Home'}
    />
  );
};

export default TabBar;
