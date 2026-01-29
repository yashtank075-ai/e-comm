import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";

const cart = {
    products: [
        {
        name:"Stylish jacket",
        size:"M",
        color:"Black",
        price:"1200",
        image:"https://picsum.photos/500/500?random=1",
        },
         {
        name:"Casual Sneakers",
        size:"42",
        color:"Black",
        price:"750",
        image:"https://picsum.photos/500/500?random=2",
        },
    ],
    totalprice:1950,
};

const Checkout = () => {
    const navigate = useNavigate();
    const [checkoutId,setcheckoutId] = useState(null);
    const [shippingAddress,setShippingAddress] = useState({
        firstName:"",
        lastName:"",
        address:"",
        city:"",
        postalcode:"",
        country:"",
        phone:"",
    });

    const handleCreateCheckout = (e) =>{
        e.preventDefault();
        
    }

    const { error, isLoading, Razorpay } = useRazorpay();

  const handlePayment = () => {
   const options = {
      key: "rzp_test_S24X5pBkRc9FOd",
      amount: 500000, 
      currency: "INR",
      name: "Test Company",
      description: "Test Transaction",
      handler: (response) => {
        console.log(response);
        alert("Payment Successful!");
        navigate("/order-confirmation", {
        state: {
          paymentId: response.razorpay_payment_id,
          cart,
          shippingAddress,
        },
      });
    },
      prefill: {
        name: "yash",
        email: "yash.doe@example.com",
        contact: "7359129382",
      },
      theme: {
        color: "#F37254",
      },
    };

    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
   
}
    
  return (
    <div className='grid grid-cols-1  lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
       {/* left section */}
       <div className='bg-white rounded-lg p-6'>
        <h2 className='text-2xl uppercase mb-6'>CheckOut</h2>
        <form onSubmit={handleCreateCheckout}>
            <h3 className='text-lg mb-4'>Contact Details</h3>
            <div className='mb-4'>
                <label className='block text-gray-700'>Email</label>
                <input type="email" value="user@example.com" className='w-full p-2 border rounded' disabled />
            </div>
            <h3 className='text-lg mb-4'>Delivery</h3>
            <div className='mb-4 grid grid-cols-2 gap-4'>
                <div>
                    <label className='block text-gray-700'>First Name:</label>
                    <input type="text"
                     value={shippingAddress.firstName}
                     onChange={(e)=>setShippingAddress({...shippingAddress,firstName:e.target.value})}
                     className='w-full p-2 border rounded'
                     required />
                </div>
                 <div>
                    <label className='block text-gray-700'>Last Name:</label>
                    <input type="text"
                     value={shippingAddress.lastName}
                     onChange={(e)=>setShippingAddress({...shippingAddress,lastName:e.target.value})}
                     className='w-full p-2 border rounded'
                     required />
                </div>
            </div>  
            <div className='mb-4'>
                <label className='block text-gray-700'>Address</label>
                <input type="text" value={shippingAddress.address} 
                onChange={(e)=>setShippingAddress({...shippingAddress,address:e.target.value})}
                className='w-full p-2 boreder rounded'
                required />
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                    <label className='block text-gray-700'>City</label>
                    <input type="text"
                     value={shippingAddress.city}
                     onChange={(e)=>setShippingAddress({...shippingAddress,city:e.target.value})}
                     className='w-full p-2 border rounded'
                     required />
                </div>
                 <div>
                    <label className='block text-gray-700'>PostalCode</label>
                    <input type="text"
                     value={shippingAddress.postalcode}
                     onChange={(e)=>setShippingAddress({...shippingAddress,postalcode:e.target.value})}
                     className='w-full p-2 border rounded'
                     required />
                </div>
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700'>Country</label>
                <input type="text" value={shippingAddress.country} 
                onChange={(e)=>setShippingAddress({...shippingAddress,country:e.target.value})}
                className='w-full p-2 boreder rounded'
                required />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700'>Phone</label>
                <input type="tel" value={shippingAddress.phone} 
                onChange={(e)=>setShippingAddress({...shippingAddress,phone:e.target.value})}
                className='w-full p-2 boreder rounded'
                required />
            </div>
                <div className="mt-6">
  {!checkoutId ? (
    <>
      {isLoading && <p>Loading Razorpay...</p>}
      {error && <p>Error loading Razorpay: {error}</p>}

      <button
        onClick={handlePayment}
        type="button"
        className="w-full bg-black text-white py-3 rounded"
        disabled={isLoading}
      >
        Pay Now
      </button>
    </>
  ) : (
    <h3 className="text-lg mb-4">Pay With Payment</h3>
  )}
</div>

        </form>
       </div>
       {/* right section */}
       <div className='bg-gray-50 p-6 rounded-lg'>
        <h3 className='text-lg mb-4'>Order Summary</h3>
        <div className='border-t py-4 mb-4'>
          {cart.products.map((product,index)=>(
             <div key={index} className='flex items-start justify-between py-2 border-b'>
              <img src={product.image} alt={product.name} className='w-20 h-24 object-cover mr-4' />
              <div>
                <h3 className='text-md'>{product.name}</h3>
                <p className='text-gray-500'>Size:{product.size}</p>
                  <p className='text-gray-500'>Color:{product.color}</p>
              </div>
              <p className='text-xl'>₹{product.price?.toLocaleString()}</p>
             </div>
          ))}
        </div>
        <div className='flex justify-between items-center text-lg mb-4'>
          <p>SubTotal</p>
          <p>₹{cart.totalprice?.toLocaleString()}</p>
        </div>
        <div className='flex justify-between items-center text-lg'>
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className='flex justify-between items-center text-lg mt-4 border-t'>
          <p>Total</p>
          <p>₹{cart.totalprice?.toLocaleString()}</p>
        </div>
       </div>
    </div>
  )
}

export default Checkout