import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import OrderContextProvider from '../../contexts/OrderContext';
import ProductContextProvider from '../../contexts/ProductContext';
import Footer from './footer/Footer';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

function AllLayout() {
  const [open, setOpen] = useState(false);

  const handleNavOpen = () => setOpen((prev) => !prev);

  return (
    <div className=" tw-flex tw-bg-light-blue">
      <Sidebar handleNavOpen={handleNavOpen} open={open} />

      <div className="tw-flex-1  md:tw-w-full">
        <Header />
        <div className="content tw-z-0">
          <ProductContextProvider>
            <OrderContextProvider>
              <Outlet />
            </OrderContextProvider>
          </ProductContextProvider>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AllLayout;
