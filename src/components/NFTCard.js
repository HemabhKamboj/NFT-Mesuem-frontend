import { StarOutlined, ArrowRightOutlined } from '@ant-design/icons';
import NFTSVG from '@/assets/nft.svg';

const NFTCard = () => {
  return (
    <>
      <div className="relative bg-white w-full h-32 rounded-md p-4 mb-4">
        <div className="flex justify-between align-center">
          <NFTSVG className="w-20 h-20 rounded-md" />
          <div className="w-4/6">
            <div className="flex justify-between items-center text-md font-medium text-gray-900 mb-2">
              Old dream
              <span className="flex">
                <StarOutlined />
                <p className="mx-2 text-xs font-normal">1,133</p>
              </span>
            </div>
            <div className="text-xs font-normal text-gray-700 my-2">
              Also known as door hinge. Used as a joint.
            </div>
          </div>
        </div>
        <button className="bg-blue-200 static -mt-20 ml-2 w-16 h-8 rounded-md">$ 100</button>
      </div>
    </>
  );
};

export default NFTCard;
