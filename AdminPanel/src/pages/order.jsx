// src/admin/pages/Orders.jsx
import React, { useState } from 'react';
import { Button, Table, Modal, Form, Badge } from 'react-bootstrap';

const initialOrders = [
  {
    id: 101,
    customer: 'John Doe',
    amount: 1499,
    status: 'Pending',
    date: '2025-07-06',
  },
  {
    id: 102,
    customer: 'Jane Smith',
    amount: 999,
    status: 'Shipped',
    date: '2025-07-05',
  },
  {
    id: 103,
    customer: 'Ravi Patel',
    amount: 2599,
    status: 'Delivered',
    date: '2025-07-04',
  },
];

const Orders = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleUpdateStatus = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleSave = () => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === selectedOrder.id ? selectedOrder : order
      )
    );
    setShowModal(false);
  };

  const getBadgeVariant = (status) => {
    switch (status) {
      case 'Pending':
        return 'warning';
      case 'Shipped':
        return 'info';
      case 'Delivered':
        return 'success';
      case 'Cancelled':
        return 'danger';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="container mt-4">
      <h2>Order Management</h2>
      <Table striped bordered hover responsive className="mt-3">
        <thead className="table-dark">
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Amount (₹)</th>
            <th>Status</th>
            <th>Date</th>
            <th style={{ width: '150px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.amount}</td>
              <td>
                <Badge bg={getBadgeVariant(order.status)}>{order.status}</Badge>
              </td>
              <td>{order.date}</td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleUpdateStatus(order)}
                >
                  Update
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Status Update Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Order Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="orderStatus">
              <Form.Label>Status</Form.Label>
              <Form.Select
                value={selectedOrder?.status || ''}
                onChange={(e) =>
                  setSelectedOrder({ ...selectedOrder, status: e.target.value })
                }
              >
                <option>Pending</option>
                <option>Shipped</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Orders;
