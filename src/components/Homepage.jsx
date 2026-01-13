import React from "react";

const Homepage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Shop Smart <br /> Buy Quality Products
            </h1>
            <p className="mt-4 text-lg text-indigo-100">
              Best deals on electronics, fashion and daily essentials.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition">
              Shop Now
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
              alt="Shopping"
              className="w-72"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-gray-800">Free Delivery</h3>
            <p className="mt-2 text-gray-600">Free shipping on all orders above $50</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-gray-800">Secure Payment</h3>
            <p className="mt-2 text-gray-600">100% secure online payments</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-gray-800">Easy Returns</h3>
            <p className="mt-2 text-gray-600">7 days easy return policy</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Popular Products
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "Smart Watch",
                price: "$99.99",
                img: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png",
              },
              {
                id: 2,
                name: "Headphones",
                price: "$59.99",
                img: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
              },
              {
                id: 3,
                name: "Sneakers",
                price: "$79.99",
                img: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
              },
            ].map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-40 object-contain"
                />

                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>

                <p className="text-indigo-600 font-bold mt-1">
                  {product.price}
                </p>

                <button className="mt-4 w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Homepage;
