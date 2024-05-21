import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';
import UserLayout from './layout/UserLayout';
('./layout/UserLayout');
import { AdminRoute } from './components/Routes';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import Transaction from './pages/Transaction';
import AddProject from './AddProject';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/home/add" element={<AddProject />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route
              path="/admin/dashboard"
              element={
                <AdminRoute>
                  <Dashboard />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/project"
              element={
                <AdminRoute>
                  <Project />
                </AdminRoute>
              }
            />
            {/* <Route
              path="/admin/project/add"
              element={
                <AdminRoute>
                  < AddProject/>
                </AdminRoute>
              }
            /> */}
            <Route
              path="/admin/transaction"
              element={
                <AdminRoute>
                  <Transaction />
                </AdminRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
