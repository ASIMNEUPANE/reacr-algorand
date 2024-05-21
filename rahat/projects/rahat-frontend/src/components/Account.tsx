import { useWallet } from '@txnlab/use-wallet';
import * as algokit from '@algorandfoundation/algokit-utils';
import { useEffect, useMemo, useState } from 'react';
import { ellipseAddress } from '../utils/ellipseAddress';
import { getAlgodConfigFromViteEnvironment } from '../utils/network/getAlgoClientConfigs';

const algodConfig = getAlgodConfigFromViteEnvironment();
const algodClient = algokit.getAlgoClient({
  server: algodConfig.server,
  port: algodConfig.port,
  token: algodConfig.token,
});

const Account = () => {
  const { activeAddress, status, connectedAccounts } = useWallet();
  const [info, setInfo] = useState(null);

  const dappFlowNetworkName = useMemo(() => {
    return algodConfig.network === '' ? 'sandbox' : algodConfig.network.toLowerCase();
  }, [algodConfig.network]);

  useEffect(() => {
    const fetchAccountInfo = async () => {
      if (activeAddress) {
        try {
          const res = await algodClient.accountInformation(activeAddress).do();
          setInfo(res as any);
        } catch (error) {
          console.error('Error fetching account info:', error);
        }
      }
    };

    fetchAccountInfo();
  }, [activeAddress]);

  return (
    <div className="h-full">
      <a
        className="text-xl"
        target="_blank"
        rel="noopener noreferrer"
        href={`https://app.dappflow.org/setnetwork?name=${dappFlowNetworkName}&redirect=explorer/account/${activeAddress}/`}
      >
        <div>
          Address: {ellipseAddress(activeAddress)}
          <br />
          Status: {status} providers
          <br />
          Account Info: {info ? JSON.stringify(info) : 'Loading...'}
        </div>
      </a>
      <div className="text-xl">Network: {algodConfig.network === '' ? 'localnet' : algodConfig.network}</div>
    </div>
  );
};

export default Account;
