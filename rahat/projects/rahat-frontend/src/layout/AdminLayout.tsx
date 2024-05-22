import  Sidebar  from './Sidebar';
import Slidebar from './Sidebar'
import {AdminNavbar} from './AdminNavbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
export default function AdminLayout() {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative px-20">
        <Sidebar />
      </div>

      <main className="flex-shrink-0 d-flex flex-column min-vh-100 ">
        <Navbar />

        <div className="container mt-2 mb-5 w-dvw">
          <Outlet />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
