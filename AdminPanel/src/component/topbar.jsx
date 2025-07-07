// src/admin/components/Topbar.jsx
import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Dropdown, Form, InputGroup } from 'react-bootstrap';

const Topbar = () => {
  return (
    <div className="bg-dark d-flex justify-content-between align-items-center p-3 border-bottom shadow-sm">
      {/* Search Bar */}
      <InputGroup style={{ maxWidth: '300px' }}>
        <InputGroup.Text className="bg-white border-end-0">
          <Search size={16} />
        </InputGroup.Text>
        <Form.Control placeholder="Search..." className="border-start-0" />
      </InputGroup>

      {/* Right Side */}
      <div className="d-flex align-items-center gap-3">
        <Bell size={20} color="light" />
        <Dropdown align="end">
          <Dropdown.Toggle
            variant="light"
            className="d-flex align-items-center border-0"
          >
            <User size={18} className="me-2" />
            <span>Admin</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/profile">Profile</Dropdown.Item>
            <Dropdown.Item href="/settings">Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Topbar;
