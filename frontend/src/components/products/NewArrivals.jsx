import React, { useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
    const scrollRef = useRef(null);
    const [isDragging,SetisDragging] = useState(false);
    const [startX,setstartX] = useState(0);
    const [scrollLeft,setscrollLeft] = useState(false);
    const [canScrollLeft,setcanScrollLeft] = useState(false);
    const [canScrollRight,setcanScrollRight] = useState(true);

    const newArrivles = [
        {
            id:1,
            name:"Stylish jacket",
            price:1200,
            images:[
                {
                    url:"https://picsum.photos/500/500?random=1",
                    altText:"Stylish Jacket",
                },
            ],
        },
         {
            id:2,
            name:"Stylish jacket",
            price:1200,
            images:[
                {
                    url:"https://picsum.photos/500/500?random=2",
                    altText:"Stylish Jacket",
                },
            ],
        },
         {
            id:3,
            name:"Stylish jacket",
            price:1200,
            images:[
                {
                    url:"https://picsum.photos/500/500?random=3",
                    altText:"Stylish Jacket",
                },
            ],
        },
         {
            id:4,
            name:"Stylish jacket",
            price:1200,
            images:[
                {
                    url:"https://picsum.photos/500/500?random=4",
                    altText:"Stylish Jacket",
                },
            ],
        },
         {
            id:5,
            name:"Stylish jacket",
            price:1200,
            images:[
                {
                    url:"https://picsum.photos/500/500?random=5",
                    altText:"Stylish Jacket",
                },
            ],
        },
         {
            id:6,
            name:"Stylish jacket",
            price:1200,
            images:[
                {
                    url:"https://picsum.photos/500/500?random=6",
                    altText:"Stylish Jacket",
                },
            ],
        },
         {
            id:7,
            name:"Stylish jacket",
            price:1200,
            images:[
                {
                    url:"https://picsum.photos/500/500?random=7",
                    altText:"Stylish Jacket",
                },
            ],
        },
         {
            id:8,
            name:"Stylish jacket",
            price:1200,
            images:[
                {
                    url:"https://picsum.photos/500/500?random=8",
                    altText:"Stylish Jacket",
                },
            ],
        },
    ];

    const handleMousedown = (e)=>{
       SetisDragging(true);
       setstartX(e.pageX - scrollRef.current.offsetLeft);
    }

    const handleMouseMove = (e) =>{
      if(!isDragging) return;
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = x - startX;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }

    const handleMouseUpOrLeave = () =>{
     SetisDragging(false);
    }

    const scroll = (direction) =>{
        const ScrollAmount = direction === "left" ? -300 : 300;
        scrollRef.current.scrollBy({left: ScrollAmount, behavior:"smooth" });
    }

 const updateScrollButtons = () => {
  const container = scrollRef.current;
  if (!container) return;

  const { scrollLeft, clientWidth, scrollWidth } = container;

  const buffer = 5; // prevents early disable

  setcanScrollLeft(scrollLeft > buffer);
  setcanScrollRight(
    scrollLeft + clientWidth < scrollWidth - buffer
  );
};

    useEffect(()=>{
        const container = scrollRef.current;
        if(container){
            container.addEventListener("scroll",updateScrollButtons);
            updateScrollButtons();
            return ()=> container.removeEventListener("scroll",updateScrollButtons);
        }
    },[])
  return (
    <section className='py-16 px-4 lg:px-0'>
        <div className='container mx-auto text-center mb-10 relative'>
      <h2 className='text-3xl font-bold mb-4'>Explore New Arrivles</h2>
      <p className='text-lg text-gray-600 mb-8 text-center'>
        Discover The Latest Styles Straight Off The Runway, Freshly Added To Keep Your Wardrobe On The Cutting Edge Of Fashion...
      </p>
      <div className='absolute right-0 bottom-[-30px] flex space-x-2'>
        <button onClick={()=>scroll("left")}
        disabled={!canScrollLeft} 
        className={`p-2 rounded border ${canScrollLeft ?  "bg-white text-black" :"bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
            <FiChevronLeft  className='text-2xl '/>
        </button>
        <button onClick={()=>scroll("right")} className={`p-2 rounded border ${canScrollRight ?  "bg-white text-black" :"bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
            <FiChevronRight  className='text-2xl '/>
        </button>
      </div>
    </div>
    <div ref={scrollRef} 
    onMouseDown={handleMousedown}
    onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUpOrLeave}
    onMouseLeave={handleMouseUpOrLeave} 
    className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}>
        {
            newArrivles.map((products)=>{
                return(
                    <div key={products.id} className='min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative'>
                        <img src={products.images[0]?.url} alt={products.images[0]?.altText || products.name} className='w-full h-[500px] object-cover rounded-lg'
                        draggable="false" />
                       <div className='absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounder-b-lg'>
                        <Link to={`/products/${products.id}`} className='block '>
                        <h4 className='font-medium'>{products.name}</h4></Link>
                        <p className='mt-1'>₹{products.price}</p>
                       </div>
                    </div>
                )
            })
        }
    </div>
    </section>
  )
}

export default NewArrivals