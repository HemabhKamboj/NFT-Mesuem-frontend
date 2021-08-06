import { useState } from 'react';
import { StarOutlined } from '@ant-design/icons';

import NFTCard from '@/components/NFTCard';
import Header from '@/components/Header';

const COLORS = ['pink', 'red'];

const OneCollection = () => {
  const [showSearch, setShowSearch] = useState(true);

  const onClickSearchIcon = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <div
        style={{ height: 'calc(100vh - 30px)', backgroundColor: '#F5F7FA' }}
        className="p-4"
      >
        <Header showSearch={true} />

        <div className="flex justify-between items-center px-6 mt-8 mb-4">
          <div>
            <div className="text-3xl font-medium text-gray-500">Old Dream</div>
            <div className="text-sm font-medium text-gray-300">
              by Rohan Aggarwal
            </div>
          </div>
          <div>
            <StarOutlined className="text-4xl" />
            <br />
            <span className="text-sm font-normal text-gray-500">1,333</span>
          </div>
        </div>

        <div className="flex justify-between items-start px-6 mb-6">
          <span className="w-3/4 text-sm font-normal text-gray-500">
            You do not understand. This is real art. For the elite only. You are
            not worthy.
          </span>
        </div>

        <div className="flex justify-between items-center mb-2 px-6">
          <span className="text-sm font-medium text-gray-500">Categories</span>
          <span className="text-md font-medium text-green-300">
            214 NFTs
          </span>
        </div>
        <div className="flex flex-wrap items-center px-6 mb-6">
          {COLORS.map((color) => (
            <span
              className="p-2 rounded-md text-xs mb-2 mr-2"
              key={color}
              style={{ backgroundColor: color }}
            >
              {color}
            </span>
          ))}
        </div>

        <NFTCard />
      </div>
    </>
  );
};

export default OneCollection;
