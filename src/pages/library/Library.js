import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Tabs } from 'antd';
import { StarOutlined } from '@ant-design/icons';

import { getCollection } from './service.js';

import CollectionCard from '@/components/CollectionCard';
import NFTCard from '@/components/NFTCard';

const Library = () => {
  return (
    <>
      <div
        style={{ height: 'calc(100vh - 46px)', backgroundColor: '#F5F7FA' }}
        className="p-4"
      >
        <Header showSearch={true} />

        <Tabs centered defaultActiveKey="2">
          <Tabs.TabPane tab="Collections" key="1">
            <div className="flex flex-wrap justify-between mt-8">
              {[1, 2, 3, 4].map((item) => (
                <CollectionCard key={item} />
              ))}
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="NFTs" key="2">
            {[1, 2].map((item) => (
              <NFTCard />
            ))}
          </Tabs.TabPane>
          <Tabs.TabPane tab="Creators" key="3">
            Content of Tab Pane 3
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default Library;
