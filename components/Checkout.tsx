import React, { useState } from 'react';

interface CheckoutForm {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  cardNumber: string;
  expiration: string;
  cvv: string;
}

const Checkout: React.FC = () => {
  const [form, setForm] = useState<CheckoutForm>({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiration: '',
    cvv: ''
  });
  
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', form);
    setPopupVisible(true); // Show popup after form submission
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="container mx-auto p-2">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden p-4">
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="input input-bordered w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Address</label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            className="input input-bordered w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">City</label>
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            className="input input-bordered w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">State</label>
          <input
            name="state"
            value={form.state}
            onChange={handleChange}
            className="input input-bordered w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Zip Code</label>
          <input
            name="zip"
            value={form.zip}
            onChange={handleChange}
            className="input input-bordered w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Card Number</label>
          <input
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            className="input input-bordered w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Expiration Date</label>
          <input
            name="expiration"
            value={form.expiration}
            onChange={handleChange}
            className="input input-bordered w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">CVV</label>
          <input
            name="cvv"
            value={form.cvv}
            onChange={handleChange}
            className="input input-bordered w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            required
          />
        </div>
        <button className="border border-slate-800 bg-slate-200 hover:bg-slate-600 hover:text-white text-black font-semibold py-2 px-4 rounded">
          Complete Purchase
        </button>
      </form>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-md p-4 max-w-sm mx-auto">
            <h2 className="text-xl font-bold mb-2">Purchase Complete</h2>
            <p className="mb-4">Thank you for your purchase!</p>
            <button
              onClick={closePopup}
              className="border border-slate-800 bg-slate-200 hover:bg-slate-600 hover:text-white text-black font-semibold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
