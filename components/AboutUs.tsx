import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 ml-15 mr-15">
      {/* Top Image */}
      <div className="w-full h-74 mb-8">
        <img
          src="http://globalitassociates.org/wp-content/uploads/2016/08/about-us-banner.jpg"
          alt="Top Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 pr-8 mb-8 md:mb-0 pl-5">
          <ul className="list-none">
            <li className="mb-6">
              <a href="#" className="text-lg font-semibold text-black hover:text-gray-700">About Us</a>
            </li>
            <li className="mb-6">
              <a href="#" className="text-lg text-gray-600 hover:text-gray-800">Artworks</a>
            </li>
            <li className="mb-6">
              <a href="#" className="text-lg text-gray-600 hover:text-gray-800">Artists</a>
            </li>
            <li className="mb-6">
              <a href="#" className="text-lg text-gray-600 hover:text-gray-800">Investors</a>
            </li>
            <li className="mb-6">
              <a href="#" className="text-lg text-gray-600 hover:text-gray-800">Suppliers</a>
            </li>
            <li className="mb-6">
              <a href="#" className="text-lg text-gray-600 hover:text-gray-800">Recommendations</a>
            </li>
            <li className="mb-6">
              <a href="#" className="text-lg text-gray-600 hover:text-gray-800">Featured Artworks</a>
            </li>
            <li className="mb-6">
              <a href="#" className="text-lg text-gray-600 hover:text-gray-800">New Arrivals</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-lg text-gray-600 hover:text-gray-800">Artist Platform</a>
            </li>
          </ul>
        </div>

        {/* Main Text Content */}
        <div className="w-full md:w-3/4 pr-">
          <h1 className="text-4xl font-bold text-black mb-4">About Us</h1>
          <p className="text-lg text-gray-800 mb-6">
          We carefully select and curate artworks from both emerging and established artists, ensuring a diverse and high-quality collection. Our curators are passionate about discovering new talents and bringing their work to a wider audience.          </p>
          <p className="text-lg text-gray-800 mb-6">
          We carefully select and curate artworks from both emerging and established artists, ensuring a diverse and high-quality collection. Our curators are passionate about discovering new talents and bringing their work to a wider audience.          </p>

          {/* Secondary Section with Image */}
          <div className="flex flex-wrap md:flex-nowrap items-start mt-8">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <img
                src="https://as1.ftcdn.net/v2/jpg/08/35/92/88/1000_F_835928877_vrmh7CQqJBJVSfNr1kMPMFyAztRTuKbA.jpg"
                alt="How We Work"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h2 className="text-2xl font-bold text-black mb-4">How We Work</h2>
              <p className="text-lg text-gray-800 mb-6">
                At Art Gallery, we believe that art is for everyone. Our team is committed to making the art buying experience as seamless and enjoyable as possible. Here s how we work to achieve this:
              </p>
              <p className="text-lg text-gray-800 mb-6">
                <strong>Curated Collections:</strong> We carefully select and curate artworks from both emerging and established artists, ensuring a diverse and high-quality collection. Our curators are passionate about discovering new talents and bringing their work to a wider audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
