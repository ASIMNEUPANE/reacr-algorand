import React, { useState } from 'react';
import ConnectWallet from '../components/ConnectWallet'; // Adjust the import path as needed

const NavBar = () => {
  const [openWalletModal, setOpenWalletModal] = useState(false);

  const toggleWalletModal = () => {
    setOpenWalletModal(!openWalletModal);
  };

  return (
    <div className="flex flex-row justify-between items-center mb-[35px] gap-6">
      <div className="text-white">
        <h1 className="text-2xl">Rahat Algorand Dapp</h1>
      </div>
      <div className="flex justify-end items-center gap-4">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={toggleWalletModal}
        >
          {openWalletModal ? 'Connect Wallet' : 'Disconnect Wallet'}
        </button>
      </div>
      {openWalletModal && <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />}
    </div>
  );
};

export default NavBar;
