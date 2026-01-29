import React, { useState } from 'react'
import CollectionPage from '../../pages/CollectionPage';

const EditProducts = () => {
    const [productData,SetproductData] = useState({
        name:"",
        description:"",
        price:0,
        countInStock:0,
        sku:"",
        category:"",
        brand:"",
        sizes:[],
        color:[],
        collections:"",
        material:"",
        gender:"",
        images:[
            {
                url:"https://picsum.photos/150?random=1"
            },
               {
                url:"https://picsum.photos/150?random=2"
            },
        ],
    });

    const handlechange = (e) =>{
        e.preventDefault();
        const {name,value} = e.target;
        SetproductData((prevdata)=>({...prevdata,[name]: value}));
    };

    const handleimage = async (e) =>{
      const file= e.target.files[0];
      console.log(file);
      
    }

    const handlesubmit = (e) =>{
        e.preventDefault();
        console.log(productData);

    }
  return (
    <div className='max-e-5xl mx-auto p-6 shadow-md rounded-md'>
        <h2 className='text-3xl font-bold mb-6'>Edit Product</h2>
        <form onSubmit={handlesubmit}> 
            {/* name */}
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>Product Name</label>
                <input type="text" name="name" value={productData.name} onChange={handlechange} className='w-full border border-gray-300  rounded-md p-2 required' />
            </div>
            {/* description */}
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>Description</label>
                <textarea name="description" rows={4} value={productData.description} onChange={handlechange} className='w-full border border-gray-300  rounded-md p-2 required' />
            </div>

            {/* price */}
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>Price</label>
                <input type="number" name="price" value={productData.price} onChange={handlechange} 
                className='w-full border border-gray-300 rounded-md p-2' />
            </div>

            {/* Count in stock */}
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>Count In Stock</label>
                <input type="number" name="countInStock" value={productData.countInStock} onChange={handlechange} 
                className='w-full border border-gray-300 rounded-md p-2' />
            </div>

            {/* SKU */}
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>Sku</label>
                <input type="number" name="sku" value={productData.sku} onChange={handlechange} 
                className='w-full border border-gray-300 rounded-md p-2' />
            </div>

            {/* sizes */}
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>Sizes (comma-separated)</label>
                <input type="text" name="sizes" value={productData.sizes.join(", ")} onChange={(e)=>SetproductData({
                    ...productData,
                    sizes:e.target.value.split(",").map((size)=>size.trim()),
                })} className='w-full border border-gray-300  rounded-md p-2 required' />
            </div>

            {/* color */}
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>Color (comma-separated)</label>
                <input type="text" name="color" value={productData.color.join(", ")} onChange={(e)=>SetproductData({
                    ...productData,
                    color:e.target.value.split(",").map((color)=>color.trim()),
                })} className='w-full border border-gray-300  rounded-md p-2 required' />
            </div>

            {/* image upload */}
            <div className='mb-6'>
                <label className='block font-semibold  mb-2'>Upload Image</label>
                <input type="file" onChange={handleimage} />
                <div className='flex gap-4 mt-4'>
                    {productData.images.map((image,index)=>(
                        <div key={index}>
                            <img src={image.url} alt={image.altText || "Product image"}
                            className='w-20 h-20 object-cover rounded-md shadow-md' />
                            </div>
                    ))}
                </div>
            </div>

            <button type='submit' className='w-full bg-green-500 text-white py-2 rounded-m hover:bg-green-600
            transition-colors'>Update Product</button>
        </form>
    </div>
  )
}

export default EditProducts