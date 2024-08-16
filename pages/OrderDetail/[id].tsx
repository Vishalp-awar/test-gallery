// pages/OrderDetail/[id].tsx

import { useRouter } from 'next/router';
import React from 'react';
import orders from '@/data/orders';
import OrderDetailComponent from '@/components/OrderDetailComponent';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const OrderDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const order = orders.find((order) => order.id === parseInt(id as string, 10));

  if (!order) {
    return <p>Order not found</p>;
  }

  return <><Navbar/>
  <OrderDetailComponent order={order} />
  <Footer/>
  </>;
};

export default OrderDetail;
