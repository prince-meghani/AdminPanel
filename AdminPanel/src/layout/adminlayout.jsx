// src/admin/components/AdminLayout.jsx
import React from 'react';
import Sidebar from '../component/sidebar';
import Topbar from '../component/topbar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="d-flex" style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column w-100">
        <Topbar />

        {/* Page Content */}
        <main className="flex-grow-1 p-3 bg-light">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
