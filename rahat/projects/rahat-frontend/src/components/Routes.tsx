import { useWallet } from '@txnlab/use-wallet';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

export const UserRoute = ({ children }: { children: React.ReactNode }) => {
  const { activeAddress } = useWallet();
  return activeAddress ? children : <Navigate replace to="/home" />;
};

export const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate replace to="/" />;
};
