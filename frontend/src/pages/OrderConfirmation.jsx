const Checkout = {
  id: "12312",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "jacket",
      color: "black",
      size: "M",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "2",
      name: "jacket",
      color: "black",
      size: "M",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  shippingAddress: {
    address: "123 Fashion Street",
    city: "New York",
    country: "USA",
  },
};

const OrderConfirmation = () => {
  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank You For Your Order
      </h1>

      {Checkout && (
        <>
          {/* Order info */}
          <div className="flex justify-between mb-10">
            <div>
              <h2 className="text-xl font-semibold">
                Order ID: {Checkout.id}
              </h2>
              <p className="text-gray-500">
                Order Date:{" "}
                {new Date(Checkout.createdAt).toLocaleString()}
              </p>
            </div>

            <p className="text-emerald-700 text-sm">
              Estimated Delivery:{" "}
              {calculateEstimatedDelivery(Checkout.createdAt)}
            </p>
          </div>

          {/* Ordered items */}
          <div>
            {Checkout.checkoutItems.map((item, index) => (
              <div
                key={`${item.productId}-${index}`}
                className="flex items-center mb-4 border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />

                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>

                <div className="ml-auto text-right">
                  <p className="text-md">₹{item.price}</p>
                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* payment and delivery info */}
          <div className="grid grid-cols-2 gap-8">
            <div>
                <h4 className="text-lg font-semibold mb-2">Payment</h4>
                <p className="text-gray-600">Razorpay</p>
            </div>
            {/* delivery information */}
            <div>
                <h4 className="text-lg font-semibold mb-2">Delivery</h4>
                <p className="text-gray-600">{Checkout.shippingAddress.address}</p>
                <p className="text-gray-600">{Checkout.shippingAddress.city},{""} {Checkout.shippingAddress.country}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderConfirmation;
