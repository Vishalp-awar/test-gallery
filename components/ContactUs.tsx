import { useState } from 'react';

const ContactUs = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setName('');
    setEmail('');
    setUsername('');
    setPassword('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { name, email, username, password });
    closeModal();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-center transition duration-300 transform hover:scale-105">
          Contact Us
        </h1>
        <div className="w-full max-w-7xl flex flex-col md:flex-row mx-4">
          <div className="flex-1 relative">
            <img
              src="https://st4.depositphotos.com/13193658/28578/i/600/depositphotos_285780618-stock-photo-selective-focus-attractive-woman-headset.jpg"
              alt="Background"
              className="w-full h-full object-cover"

            />
            
            {!modalOpen && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div>
                <button
                  className="bg-transparent text-black text-xl font-bold py-2 px-4 border border-white rounded transition duration-300 hover:bg-white hover:text-gray-800"
                  onClick={openModal}
                >
                  Contact Us
                </button>
                </div>
              </div>
            )}
          </div>
          {modalOpen && (
            <div className="flex-1 p-8 bg-slate-800 ">
              <div className="bg-slate-900 text-white border border-gray-300 p-6 rounded-lg shadow-lg ">
                <h3 className="font-bold text-lg text-center mb-4">
                  Contact Information
                </h3>
                <p className="pb-4">
                  Please fill out the form below or contact us via email or phone.
                </p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <label className="input input-bordered flex items-center gap-2 text-black">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2 text-black">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2 text-black">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2 text-black">
                    <input
                      type="password"
                      className="grow"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </label>
                  <div className="modal-action flex justify-center">
                    <button type="submit" className="btn bg-white hover:bg-slate-500 text-slate-900">
                      Submit
                    </button>
                    <button type="button" className="btn bg-white hover:bg-slate-500 text-slate-900" onClick={closeModal}>
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    
  );
  
};

export default ContactUs;
