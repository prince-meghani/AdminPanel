import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './layout/adminlayout';
import Dashboard from './pages/dashboard';
import Users from './pages/user';
import Products from './pages/product';
import AddProduct from './pages/addproduct';
import Orders from './pages/order';
import Settings from './pages/setting';
import Profile from './pages/profile';
import NotFound from './pages/notfound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
