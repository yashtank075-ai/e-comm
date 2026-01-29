import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri';

const CartContents = () => {
    const cartProducts = [
        {
            productId:1,
            name:"T-Shirt",
            size:"M",
            color:"Red",
            Quantity:1,
            price:150,
            image:"https://picsum.photos/200?random=1",
        },
         {
            productId:2,
            name:"Jeans",
            size:"40",
            color:"white",
            Quantity:2,
            price:750,
            image:"https://picsum.photos/200?random=2",
        },
    ];    
  return (
    <div>   
        {
            cartProducts.map((product,index)=>{
                return(
                    <div key={index} className='flex items-start justify-between py-4 borfer-b'>
                    <div className='flex items-start'>
                        <img src={product.image} alt={product.name} className='w-20 h-24 object-cover mr-4 rounded  ' />
                    </div>
                    <div>
                        <h3>{product.name}</h3>
                        <p className='text-sm text-gray-500 '>
                            Size:{product.size} | color: {product.color}
                        </p>
                        <div className='flex items-center mt-2 '>
                            <button className='border rounded px-2 py-1 text-xl font-medium'>-</button>
                            <span className='mx-4'>{product.Quantity}</span>
                            <button className='border rounded px-2 py-1 text-xl font-medium'>+</button>
                        </div>
                        <p >{product.price.toLocaleString()}
                            <button>
                                <RiDeleteBin3Line className='h-5 w-6 mt-2 text-red-600 ' />
                            </button>
                        </p>
                    </div>
                </div>
                )   
            })
        }
    </div>
  )
}

export default CartContents