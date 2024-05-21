import { useWallet } from '@txnlab/use-wallet';
import { Navigate } from 'react-router-dom';

export const UserRoute = ({ children }: { children: React.ReactNode }) => {
  const { activeAddress ,} = useWallet();
  return activeAddress ? children : <Navigate to="/home" />;
};

export const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { connectedAccounts } = useWallet();
  console.log(connectedAccounts);
  return connectedAccounts ? children : <Navigate to="/home" />;
};
