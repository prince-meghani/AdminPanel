// src/admin/components/Sidebar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  PlusSquare,
  Settings,
  User as UserIcon,
  Menu,
  X,
} from 'lucide-react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  const linkStyle = ({ isActive }) =>
    `nav-link text-white d-flex align-items-center mb-2 ${isActive ? 'fw-bold bg-primary px-2 rounded' : ''}`;

  return (
    <div
      className={`bg-dark text-white p-3 position-relative`}
      style={{
        width: collapsed ? '60px' : '220px',
        height: 'auto',
        transition: 'width 0.3s ease',
      }}
    >
      {/* Toggle Button */}
      <div
        className="position-absolute top-0 end-0 mt-2 me-2 d-md-none"
        onClick={toggleSidebar}
        style={{ cursor: 'pointer' }}
      >
        {collapsed ? <Menu size={20} /> : <X size={20} />}
      </div>

      <h5 className="mb-4">{!collapsed && 'Admin'}</h5>

      <nav className="nav flex-column pt-4">
        <NavLink to="/" className={linkStyle}>
          <LayoutDashboard size={18} className="me-2" />
          {!collapsed && 'Dashboard'}
        </NavLink>
        <NavLink to="/users" className={linkStyle}>
          <Users size={18} className="me-2" />
          {!collapsed && 'Users'}
        </NavLink>
        <NavLink to="/products" className={linkStyle}>
          <Package size={18} className="me-2" />
          {!collapsed && 'Products'}
        </NavLink>
        <NavLink to="/orders" className={linkStyle}>
          <ShoppingCart size={18} className="me-2" />
          {!collapsed && 'Orders'}
        </NavLink>
        <NavLink to="/products/add" className={linkStyle}>
          <PlusSquare size={18} className="me-2" />
          {!collapsed && 'Add Product'}
        </NavLink>
        <NavLink to="/settings" className={linkStyle}>
          <Settings size={18} className="me-2" />
          {!collapsed && 'Settings'}
        </NavLink>
        <NavLink to="/profile" className={linkStyle}>
          <UserIcon size={18} className="me-2" />
          {!collapsed && 'Profile'}
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
