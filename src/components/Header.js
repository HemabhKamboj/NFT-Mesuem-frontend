import { MenuOutlined, SearchOutlined, CloseOutlined } from '@ant-design/icons';
import LogoSVG from '@/assets/logo.svg';

const Header = ({ showSearch = false, onClickSearch = () => {} }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <MenuOutlined />
      <LogoSVG />
      {showSearch ? (
        <SearchOutlined onClick={onClickSearch} />
      ) : (
        <CloseOutlined onClick={onClickSearch} />
      )}
    </div>
  );
};

export default Header;
