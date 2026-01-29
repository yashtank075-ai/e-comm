import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'
import {Toaster} from "sonner";
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectionPage from './pages/CollectionPage';
import ProductDetails from './components/products/ProductDetails';
import Checkout from './components/Cart/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import OrderDetailsPage from './pages/OrderDetailsPage';
import MyOrdersPage from './pages/MyOrdersPage';
import AdminLayout from './components/Admin/AdminLayout';
import AdminHomePage from './pages/AdminHomePage';
import UserManagement from './components/Admin/UserManagement';
import ProductManagement from './components/Admin/ProductManagement';
import EditProducts from './components/Admin/EditProducts';
import OrderManagement from './components/Admin/OrderManagement';
function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-right" />
     <Routes>
      <Route path="/" element={<UserLayout/>}>
       <Route index element={<Home/>}></Route>
       <Route path="/login" element={<Login />}></Route>
       <Route path="/register" element={<Register />}></Route>
       <Route path="/profile" element={<Profile/>}></Route>
       <Route path="/collections/:collection" element={<CollectionPage />}></Route>
       <Route path="products/:id" element={<ProductDetails/>}></Route>
       <Route path="/checkout" element={<Checkout/>}></Route>
       <Route path="/order-confirmation" element={<OrderConfirmation />}></Route>
       <Route path="/order/:id" element={<OrderDetailsPage />}></Route>
       <Route path="my-orders" element={<MyOrdersPage />}></Route>
      </Route>

      <Route path="/admin" element={<AdminLayout />}>{/*Admin Routes */}
      <Route index element={<AdminHomePage />}/>
      <Route path="users" element={<UserManagement />}></Route>
        <Route path="products" element={<ProductManagement />}></Route>
        <Route path="products/:id/edit" element={<EditProducts />}></Route>
        <Route path="orders" element={<OrderManagement/>}></Route>
      </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App

