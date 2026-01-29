import React from 'react'
import Hero from '../components/layout/Hero'
import GenderCollectionSection from '../components/products/GenderCollectionSection'
import NewArrivals from '../components/products/NewArrivals'
import ProductDetails from '../components/products/ProductDetails'
import ProductGrid from '../components/products/ProductGrid'
import FeaturedCollection from '../components/products/FeaturedCollection'
import FeaturesSection from '../components/products/FeaturesSection'
const placeholderproducts = [
  {
    id: 5,
    name: "Product 1",
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
const Home = () => {
  return (
    <div>
        <Hero />
        <GenderCollectionSection />
        <NewArrivals />

        <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
        <ProductDetails />
        <div className='container mx-auto'>
          <h2 className='text-3xl text-center font-bold mb-4'>
            Top Wear For Women
          </h2>
          <ProductGrid products={placeholderproducts} />
        </div>
        <FeaturedCollection />
        <FeaturesSection />
    </div>
  )
}

export default Home