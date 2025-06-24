import React from 'react';

export default function Product() {
  return (
    <div>
      <section id="product" className="pt-28 pb-32 bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-12">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-0">
                Featured discounts
              </h1>
              <a className="text-green-400 hover:text-green-300 text-lg" href="#">
                VIEW ALL DISCOUNTS →
              </a>
            </div>
          </div>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product Card 1 */}
            <div className="group relative">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img src="/img/img-card1.png" alt="Nuraphone" className="w-full h-auto" />
                  <div className="absolute top-4 left-4">
                    <div className="discount-tag">
                      <div className='offer'>25% OFF</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <a href="#" className="block font-semibold text-xl text-black mb-2 hover:text-primary truncate">
                    Nuraphone
                  </a>
                  <div className="flex justify-center gap-2 mb-6 mt-auto">
                    <p className="font-medium text-base text-gray-500 line-through">$399</p>
                    <p className="font-medium text-base text-black">$299.25</p>
                  </div>
                  <div className="mt-auto">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <button className="w-full text-sm flex justify-center items-center text-white border rounded-full bg-blue-700 hover:bg-blue-800 transition duration-300 py-3 px-6 gap-2">
                        SHOP NOW 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="group relative">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img src="/img/img-card2.png" alt="NuraTrue" className="w-full h-auto" />
                  <div className="absolute top-4 left-4">
                    <div className="discount-tag">
                     <div className='offer'>30% OFF</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <a href="#" className="block font-semibold text-xl text-black mb-2 hover:text-primary truncate">
                    NuraTrue
                  </a>
                  <div className="flex justify-center gap-2 mb-6 mt-auto">
                    <p className="font-medium text-base text-gray-500 line-through">$199.99</p>
                    <p className="font-medium text-base text-black">$139.99</p>
                  </div>
                  <div className="mt-auto">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <button className="w-full text-sm flex justify-center items-center text-white border rounded-full bg-blue-700 hover:bg-blue-800 transition duration-300 py-3 px-6 gap-2">
                        SHOP NOW 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="group relative">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img src="/img/img-card3.png" alt="NuraBuds 2" className="w-full h-auto" />
                  <div className="absolute top-4 left-4">
                    <div className="discount-tag">
                      <div className='offer'>25% OFF</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <a href="#" className="block font-semibold text-xl text-black mb-2 hover:text-primary truncate">
                    NuraBuds 2
                  </a>
                  <div className="flex justify-center gap-2 mb-6 mt-auto">
                    <p className="font-medium text-base text-gray-500 line-through">$119</p>
                    <p className="font-medium text-base text-black">$89.25</p>
                  </div>
                  <div className="mt-auto">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <button className="w-full text-sm flex justify-center items-center text-white border rounded-full bg-blue-700 hover:bg-blue-800 transition duration-300 py-3 px-6 gap-2">
                        SHOP NOW 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="group relative">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img src="/img/img-card4.png" alt="Nura Bluetooth 5.3 Audio Transmitter" className="w-full h-auto" />
                  <div className="absolute top-4 left-4">
                    <div className="discount-tag">
                      <div className='offer'>25% OFF</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <a href="#" className="block font-semibold text-xl text-black mb-2 hover:text-primary truncate">
                    Nura Bluetooth® 5.3 Audio Transmitter
                  </a>
                  <div className="flex justify-center gap-2 mb-6 mt-auto">
                    <p className="font-medium text-base text-gray-500 line-through">$59</p>
                    <p className="font-medium text-base text-black">$45.25</p>
                  </div>
                  <div className="mt-auto">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <button className="w-full text-sm flex justify-center items-center text-white border rounded-full bg-blue-700 hover:bg-blue-800 transition duration-300 py-3 px-6 gap-2">
                        SHOP NOW 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
         .discount-tag {
          position: relative;
          height: 5rem;
            width: 5rem;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          font-weight: bold;
          padding: 0.75rem 0.98rem 0.750rem 1.35rem;
          border-radius: 9999px;
          font-size: 1.25rem;
          backdrop-filter: blur(4px);
          text-transform: uppercase;
          display: inline-block;
        }
        
        .discount-tag::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px; 
          padding: 2.13px; 
          background: linear-gradient(126.11deg, #EB48F7 3.36%, #F8D481 62.87%, #CCFF02 99.53%);
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        .offer{
          background: linear-gradient(123.72deg, #EB48F7 0.69%, #F8D481 63.6%, #CCFF02 102.35%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
             font-size: 1.15rem;
            font-weight: 600;
        }

      `}</style>
    </div>
  );
}