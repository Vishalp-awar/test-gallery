// data/orders.ts

export interface OrderItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }
  
  export interface Order {
    id: number;
    date: string;
    total: number;
    status: string;
    items: OrderItem[];
  }
  
  const orders: Order[] = [
    {
      id: 1,
      date: '2023-06-25',
      total: 120.5,
      status: 'Delivered',
      items: [
        { id: 1, name: 'Artwork A', price: 60.25, quantity: 1 },
        { id: 2, name: 'Artwork B', price: 60.25, quantity: 1 },
      ],
    },
    {
      id: 2,
      date: '2023-05-15',
      total: 75.0,
      status: 'Shipped',
      items: [
        { id: 3, name: 'Artwork C', price: 75.0, quantity: 1 },
      ],
    },
    // Add more orders as needed
  ];
  
  export default orders;
  