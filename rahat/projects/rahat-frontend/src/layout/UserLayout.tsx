import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { Navbar } from './navBar';

export default function UserLayout() {
  return (
    <div>
      <Navbar />
      <main className="flex-shrink-0 d-flex flex-column min-vh-100">
        <div className="container mt-2 mb-5">
          <Outlet />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
