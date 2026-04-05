import { Outlet } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';

const Layout = () => {
    return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="ml-64 min-h-screen flex flex-col">
        <div className="p-8 max-w-7xl mx-auto w-full flex-1">
          <Outlet />
        </div>
      </main>
    </div>
    );
};

export default Layout;