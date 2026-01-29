  import React, { useEffect, useRef, useState } from 'react'
  import {FaFilter} from "react-icons/fa"
  import FilterSidebar from '../components/products/FilterSidebar'
  import SortOptions from '../components/products/SortOptions'
import ProductGrid from '../components/products/ProductGrid'


  const CollectionPage = () => {
    const [products,setProducts] = useState([]);
    const sidebarRef = useRef(null);
    const [issidebarOpen,setIsSideBarOpen] = useState(false);


    const togglesidebar = () =>{
      setIsSideBarOpen(!issidebarOpen);
    };

    const handleClickOutside = (e) =>{
      if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
        setIsSideBarOpen(false);
      }
    };
    
    useEffect(()=>{
      document.addEventListener("mousedown",handleClickOutside);
      return () =>{
         document.removeEventListener("mousedown",handleClickOutside);
      }
    });

    useEffect(()=>{
    setTimeout(()=>{
      const fetchedproducts = [
    {
      id: 5,
      name  : "Product 1",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=5" }],
    },
    {
      id: 6,
      name: "Product 2",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=6" }],
    },
    {
      id: 7,
      name: "Product 3",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=7" }],
    },
    {
      id: 8,
      name: "Product 4",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=8" }],
    },
    {
      id: 9,
      name: "Product 5",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=9" }],
    },
    {
      id: 10,
      name: "Product 6",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=10" }],
    },
    {
      id: 11,
      name: "Product 7",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=11" }],
    },
    {
      id: 12,
      name: "Product 8",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=12" }],
    },
  ];
    setProducts(fetchedproducts);
    },1000);
    },[]);

    return (
      <div className='flex flex-col lg:flex-row'>
        {/* mobile filter button */}
        <button onClick={togglesidebar} className='lg:hidden border p-2 flex justify-center items-center'>
          <FaFilter className='mr-2'/>filter
        </button>
      {/* filter sidebar */}
      <div ref={sidebarRef} className={`${issidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50
      left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static  lg:translate-x-0`}>
        <FilterSidebar />
      </div>
      <div className='flex-grow p-4'>
        <h2 className='text-2xl uppercase mb-4'>All Collection</h2>

        {/* sort option */}
        <SortOptions />

        {/* product grid */}
        <ProductGrid products={products} />
      </div>
      </div>
    )
  }

  export default CollectionPage