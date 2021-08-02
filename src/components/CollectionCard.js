import { StarOutlined, ArrowRightOutlined } from '@ant-design/icons';
import DreamSVG from '@/assets/dream.svg';

const CollectionCard = () => {
  return (
    <div className="relative bg-gray-200 w-40 h-40 rounded-md p-4 mb-16">
      <DreamSVG className="static -mt-10 w-16 h-16 rounded-md" />
      <span className="absolute top-0 right-0 bg-green-200 rounded-bl-lg rounded-tr-lg">
        <ArrowRightOutlined rotate="-45" className="p-1" />
      </span>
      <div className="text-md font-medium text-gray-900 mb-2">Old dream</div>
      <div className="text-xs font-medium text-gray-700 my-2">
        Also known as door hinge. Used as a joint.
      </div>
      <span className="flex mt-6">
        <StarOutlined />
        <p className="mx-2 text-xs font-normal">1,133</p>
      </span>
    </div>
  );
};

export default CollectionCard;
