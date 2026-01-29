import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import ProductGrid from '../products/ProductGrid'
const selectedproducts = {
    name:"Stylish Jacket",
    price:1200,
    originalprice:1500,
    description:"this is a stylish jacket perfect for any occuasion",
    brand:"FashionBrand",
    material:"leather",
    sizes:["S","M","L","XL","XXL"],
    color:["red","black"],
    images:[{
        url:"https://picsum.photos/500/500?random=1",
        altText:"stylish jacket1"
    },
    {
        url:"https://picsum.photos/500/500?random=2",
        altText:"stylish jacket2"
    }]
};

 const similarproducts = [
    {
        id:1,
        name:"Product 1",
        price:100,
        images:[
            {
                url:"https://picsum.photos/500/500?random=1"
            }
        ],
    },
    {
        id:2,
        name:"Product 2",
        price:100,
        images:[
            {
                url:"https://picsum.photos/500/500?random=2"
            }
        ],
    },
    {
        id:3,
        name:"Product 3",
        price:100,
        images:[
            {
                url:"https://picsum.photos/500/500?random=3"
            }
        ],
    },
    {
        id:4,
        name:"Product 4",
        price:100,
        images:[
            {
                url:"https://picsum.photos/500/500?random=4"
            }
        ],
    },
 ]

const ProductDetails = () => {
    const [mainimage,setMainImage]= useState("");
    const [selectedSize,setSelectedSize] = useState("");
    const [selectedcolor,setSelectedColor] = useState("");
    const [quantity,setQuantity] = useState(1);
    const [isButtonDisable,setIsButtonDisable] = useState(false);

    useEffect(()=>{
        if(selectedproducts?.images?.length > 0){
            setMainImage(selectedproducts.images[0].url);
        }
    },[selectedproducts]);
      
    const handlequantitychange = (action) =>{
         if(action === "plus") setQuantity((prev)=>prev+1);
         if(action === "minus"  && quantity > 1) setQuantity((prev)=>prev-1);
    }

    const handleaddtocart = () =>{
        if(!selectedSize || !selectedcolor){
            toast.error("please select size and color before add to cart",{
                duration:1000,
            });
            return;
        }
        setIsButtonDisable(true);
        setTimeout(()=>{
            toast.success("product add to cart",{
                duration:1000,
            });
             setIsButtonDisable(false);
        },500);
    };
  return (
    <div className='p-6'>
        <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
            <div className='flex flex-col md:flex-row'>
                <div className='hidden md:flex flex-col space-y-4 mr-6'>
                    {
                        selectedproducts.images.map((image,index)=>(
                                 <img key={index} 
                             src={image.url} 
                             alt={image.altText || `Thumbnail ${index}` }
                             className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainimage === image.url ?
                                "border-black" : "border-gray-300"
                             }`}
                             onClick={()=>setMainImage(image.url)} />
                        ))}
                </div>
                {/*main image */}
                <div className='md:w-1/2'>
                <div className='mb-4'>
                    <img src={mainimage} alt="Main Product"
                    className='w-full h-auto object-cover rounded-lg ' />
                </div>
                </div>
                {/*Mobile Thumbnail*/}
                <div className='md:hidden flex overscroll-x-scroll space-x-4 mb-4'>
                     {
                        selectedproducts.images.map((image,index)=>(
                             <img key={index} 
                             src={image.url} 
                             alt={image.altText || `Thumbnail ${index}` }
                             className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainimage === image.url ?
                                "border-black" : "border-gray-300"}`}
                             onClick={()=>setMainImage(image.url)} />
                        ))}
                </div>
                {/*Right Side */}
                <div className='md:w-1/2 md:ml-10'>
                <h1 className='text-2xl mmd:test-3xl font-semibold mb-2'>
                    {selectedproducts.name}
                    </h1>
                    <p className='text-lg text-gray-600 mb-1 line-through'>
                        {selectedproducts.originalprice && `${selectedproducts.originalprice}`}
                    </p>
                    <p className='text-xl text-gray-500 mb-2 '>
                        ₹{selectedproducts.price}
                    </p>
                    <p className='text-gray-600 mb-4'>
                        {selectedproducts.description}
                    </p>
                    <div className='mb-4'>
                        <p className='text-gray-700'>Color:</p>
                        <div className='flex gap-2 mt-2'>
                            {selectedproducts.color.map((color)=>(
                               <button key={color} onClick={()=>setSelectedColor(color)} className={`w-8 h-8 rounded-full border ${selectedcolor === color ? "border-4 border-black" : "border-gray-300"}`} style={{backgroundColor:color.toLocaleLowerCase(),
                                filter:"brightness(0.5)"
                               }}> </button>
                            ))}
                        </div>
                    </div>
                    <div className='mb-4'>
                        <p className='text-gray-700'>Size:</p>
                        <div className='flex gap-2 mt-2'>
                            {selectedproducts.sizes.map((size)=>(
                                <button key={size} onClick={()=>setSelectedSize(size)} className={`px-4 py-2 rounded border ${selectedSize === size ? "bg-black text-white" : ""}`}>{size}</button>
                            ))}
                        </div>
                    </div>
                    <div className='mb-6'>
                        <p className='text-gray-700'>Quantity:</p>
                        <div className='flex items-center space-x-4 mt-2'>
                            <button onClick={()=>handlequantitychange("minus")} className='px-2 py-1 bg-gray-200 rounded text-lg'>-</button>
                            <span className='text-lg'>{quantity}</span>
                              <button onClick={()=>handlequantitychange("plus")} className='px-2 py-1 bg-gray-200 rounded text-lg'>+</button>
                        </div>
                    </div>
                    <button onClick={handleaddtocart} 
                    disabled={isButtonDisable} 
                    className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isButtonDisable ? "cursor-not-allowed opacity-50" : "hover:bg-gray-900"}`}>
                        {isButtonDisable ? " Adding..." : "ADD TO CART"}</button>
                    <div className='mt-10 text-gray-700'>
                        <h3 className='text-xl font-bold mb-4'>Characteristics:</h3>
                        <table className='w-full text-left text-sm text-gray-600'>
                            <tbody>
                                <tr>
                                    <td className='py-1'>Brand</td>
                                    <td className='py-1'>{selectedproducts.brand}</td>
                                </tr>
                                <tr>
                                    <td className='py-1'>Material</td>
                                    <td className='py-1'>{selectedproducts.material}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
            </div>
            <div className='mt-20'>
                <h2 className='text-2xl text-center font-medium mb-4'>
                    You May Also Like 
                </h2>
                <ProductGrid products={similarproducts} />
            </div>
        </div>
    </div>
  )
}

export default ProductDetails