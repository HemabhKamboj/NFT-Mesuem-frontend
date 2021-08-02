import { useState } from 'react';

import CollectionCard from '@/components/CollectionCard';
import Header from '@/components/Header';

const COLORS = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'magenta',
];

const Home = () => {
  const [showSearch, setShowSearch] = useState(true);

  const onClickSearchIcon = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <div
        style={{ height: 'calc(100vh - 30px)' }}
        className="p-4 bg-light-gray"
      >
        <Header showSearch={showSearch} onClickSearch={onClickSearchIcon} />

        {!showSearch && (
          <>
            <input
              placeholder="Search"
              className="w-full bg-gray-200 rounded-md p-2 focus:border-green-700"
            />

            <div className="my-6">
              <div className="text-sm font-medium text-gray-500 mb-2">
                Categories
              </div>
              <div className="flex flex-wrap items-center">
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
            </div>
          </>
        )}

        <div className="flex justify-between items-center my-8">
          <span className="text-sm font-medium text-gray-500">Collections</span>
          <span className="text-sm font-medium text-gray-300">
            SORT / FILTER
          </span>
        </div>

        <div className="flex flex-wrap justify-between">
          {[1, 2, 3, 4].map((item) => (
            <CollectionCard key={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
