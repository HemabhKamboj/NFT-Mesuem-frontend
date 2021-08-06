import { useState, useEffect } from 'react';
import { Button } from 'antd';
// import { useContractKit } from '@celo-tools/use-contractkit';

import LogoSVG from '@/assets/logo.svg';
import ArtMuseumSVG from '@/assets/art_museum.svg';
import { PoweroffOutlined } from '@ant-design/icons';

const Auth = () => {
//   const { connect, address } = useContractKit();

  useEffect(() => {
    const localUserAuthID = localStorage.getItem('nft-museum-user-id');

    if (localUserAuthID) {
      localStorage.removeItem('nft-museum-user-id');
    }
  }, []);

  const getUserDetails = () => {
    // connect().then((res) => {
    //   console.log(res, address);
    //   localStorage.setItem('nft-museum-user-id', res);
    // });
  };

  return (
    <>
      <div
        style={{ height: 'calc(100vh' }}
        className="p-4 flex flex-col items-center bg-white"
      >
        <br />
        <br />
        <LogoSVG />
        <br />
        <ArtMuseumSVG style={{ width: '300px' }} />
        <span className="text-sm text-center font-medium text-gray-500">
          A mobile first platform for art lovers to curate their favorite
          digital art pieces as NFT collections
        </span>
        <br />
        <br />
        <br />
        <br />
        <Button
          style={{ backgroundColor: '#1BB775' }}
          className="flex items-center"
          type="primary"
          icon={<PoweroffOutlined />}
          size="large"
          shape="round"
          onClick={getUserDetails}
        >
          Connect your Wallet
        </Button>
      </div>
    </>
  );
};

export default Auth;
