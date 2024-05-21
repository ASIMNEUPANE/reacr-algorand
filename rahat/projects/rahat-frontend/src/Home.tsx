// src/components/Home.tsx
import { useWallet } from '@txnlab/use-wallet';
import React, { useState } from 'react';
import ConnectWallet from './components/ConnectWallet';
import Transact from './components/Transact';
import AppCalls from './components/AppCalls';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false);
  const [openDemoModal, setOpenDemoModal] = useState<boolean>(false);
  const [appCallsDemoModal, setAppCallsDemoModal] = useState<boolean>(false);
  const { activeAddress } = useWallet();

  return (
    <div className="">
      <div className=" m-10 flex align-middle justify-center items-center">
        <h1 className="">Welcome to the Rahat Dapp</h1>
      </div>

      <ConnectWallet openModal={openWalletModal} closeModal={() => setOpenWalletModal(false)} />
      <Transact openModal={openDemoModal} setModalState={setOpenDemoModal} />
      <AppCalls openModal={appCallsDemoModal} setModalState={setAppCallsDemoModal} />
    </div>
  );
};

export default Home;
