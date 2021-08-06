import { Tabs } from 'antd';
import {
  HomeOutlined,
  UnorderedListOutlined,
  PlusSquareOutlined,
} from '@ant-design/icons';

import { useHistory } from 'react-router';

const TabA = () => (
  <div className="flex flex-col justify-between items-end">
    <PlusSquareOutlined className="mb-2" />
    <span className="text-xs">Creations</span>
  </div>
);

const TabB = () => (
  <div className="flex flex-col justify-between items-end">
    <HomeOutlined className="mb-2" />
    <span className="text-xs">Home</span>
  </div>
);

const TabC = () => (
  <div className="flex flex-col justify-between items-end">
    <UnorderedListOutlined className="mb-2" />
    <span className="text-xs">Library</span>
  </div>
);

const TabBar = () => {
  const history = useHistory();

  const changeRoute = (key) => {
    console.log(key);
    if (key == 10) {
      console.log('asd');
      history.push('/createCollection');
    } else if (key == 20) {
      history.push('/');
    } else if (key == 30) {
      history.push('/library');
    } else {
      // history.push('/');
    }
  };

  return (
    <Tabs
      tabPosition="bottom"
      centered
      defaultActiveKey="20"
      onChange={(key) => changeRoute(key)}
    >
      <Tabs.TabPane tab={<TabA />} key="10"></Tabs.TabPane>
      <Tabs.TabPane tab={<TabB />} key="20"></Tabs.TabPane>
      <Tabs.TabPane tab={<TabC />} key="30"></Tabs.TabPane>
    </Tabs>
  );
};

export default TabBar;
