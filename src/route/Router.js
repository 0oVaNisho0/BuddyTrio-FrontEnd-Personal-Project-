import { Navigate, Route, Routes } from 'react-router-dom';
import AllLayout from '../components/layout/AllLayout';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import SearchPage from '../pages/SearchPage';
import LoginPage from '../pages/LoginPage';
import { useAuth } from '../contexts/AuthContext';
import ProductAdminPage from '../pages/ProductAdminPage';
import AddProductPage from '../pages/AddProductPage';
import ProductPage from '../pages/ProductPage';
// import NotFoundPage from '../pages/NotFoundPage';
import OrderSummeryPage from '../pages/OrderSummeryPage';
import { Spinner } from 'react-bootstrap';
import OrderListPage from '../pages/OrderListPage';

function Router() {
  const { user, loading } = useAuth();

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<AllLayout />}>
              <Route path="" element={<HomePage />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="product">
                {user.role === 'ADMIN' && (
                  <>
                    <Route path="admin" element={<ProductAdminPage />} />
                    <Route path="admin/add" element={<AddProductPage />} />
                    <Route
                      path="admin/id/:productId"
                      element={<AddProductPage />}
                    />
                  </>
                )}
                <Route path="id/:productId" element={<ProductPage />} />
              </Route>
              <Route path="order/summary" element={<OrderSummeryPage />} />
              <Route path="order/list" element={<OrderListPage />} />
              <Route
                path="order/list/order-id/:orderId"
                element={<OrderSummeryPage />}
              />
              <Route path="promotion/admin" element={<ProductAdminPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<AllLayout />}>
              <Route path="" element={<HomePage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="product">
                <Route path="id/:productId" element={<ProductPage />} />
                {/* <Route path="admin" element={<NotFoundPage />} />
                <Route path="admin/add" element={<NotFoundPage />} />
                <Route path="admin/id/:productId" element={<NotFoundPage />} /> */}
              </Route>
              {/* <Route path="order/summary" element={<NotFoundPage />} /> */}
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    );
  }
}

export default Router;
