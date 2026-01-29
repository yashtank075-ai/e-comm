import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const MyOrdersPage = () => {
    const [orders,setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
      //simulate fetching orders
      setTimeout(()=>{
            const mockOrders = [
                {
                    id:"12345",
                    CreatedAt: new Date(),
                    ShippingAddress:{city:"new york", country:"USA"},
                    orderItems:[
                        {
                            name:"product 1",
                            images:"https://picsum.photos/500/500?random=1"
                        },
                    ],
                    totalprice:1000,
                    isPaid:true,
                },
                {
                    id:"34567",
                    CreatedAt: new Date(),
                    ShippingAddress:{city:"new york", country:"USA"},
                    orderItems:[
                        {
                            name:"product 2",
                            images:"https://picsum.photos/500/500?random=2"
                        },
                    ],
                    totalprice:1500,
                    isPaid:true,
                }
            ];
          setOrders(mockOrders);
      },1000);
    },[]);

    const handleRowClick = (orderID) =>{    
       navigate(`/order/${orderID}`)
    }
  return (
    <div className='max-w-7/1 mx-auto p-4 sm:p-6'>
         <h2 className='text-xl sm:text:2xl font-bold mb-6 '>
            My Orders
         </h2>
         <div className='relative shadow-md sm:rounded-lg overflow-hidden'>
            <table className='min-w-full text-left text-gray-500'>
                <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                    <tr>
                        <th className='py-2 px-4 sm:py-3'>Image</th>
                          <th className='py-2 px-4 sm:py-3'>Order ID</th>
                            <th className='py-2 px-4 sm:py-3'>Created</th>
                              <th className='py-2 px-4 sm:py-3'>Shipping Address</th>
                                <th className='py-2 px-4 sm:py-3'>Items</th>
                                  <th className='py-2 px-4 sm:py-3'>Price</th>
                                    <th className='py-2 px-4 sm:py-3'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.length > 0  ? (
                            orders.map((order)=>(
                                <tr key={order.id} onClick={()=>handleRowClick(order.id)} className='border-b hover:border-gray-50 cursor-pointer'>
                                    <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                        <img src={order.orderItems[0].images} alt={order.orderItems[0].name}
                                        className='w-10 h-10 sm:w-12 object-cover rounded-lg' />
                                    </td>
                                    <td className='py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap'>
                                        #{order.id}
                                    </td>
                                    <td className='py-2 px-2 sm:py-4 sm:px-4 '>
                                        {new Date(order.CreatedAt).toLocaleDateString()}
                                        {new Date(order.CreatedAt).toLocaleTimeString()}
                                    </td>
                                      <td className='py-2 px-2 sm:py-4 sm:px-4 '>
                                        {order.ShippingAddress ? `${order.ShippingAddress.city},${order.ShippingAddress.country}` : "N/A"}
                                      </td>
                                       <td className='py-2 px-2 sm:py-4 sm:px-4 '>
                                        {order.orderItems.length}
                                       </td>
                                        <td className='py-2 px-2 sm:py-4 sm:px-4 '>
                                            ₹{order.totalprice}
                                        </td>
                                        <td className='py-2 px-2 sm:py-4 sm:px-4 '>
                                            <span className={`${order.isPaid ? "bg-green-100 text-green-700" 
                                                : "bg-red-100 text-red-700"} px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}>{order.isPaid ? "paid" : "pending"}</span>
                                        </td>
                                </tr>
                            )) 
                        ) : (
                            <tr>
                                <td colSpan={7} className='py-4 px-4 text-center text-gray-500'>
                                    You Have No Orders
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
         </div>
    </div>
  )
}

export default MyOrdersPage