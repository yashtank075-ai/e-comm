import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SortOptions = () => {
  const [SearchParams,SetSearchParams] = useSearchParams();
  const handleSortChange = (e) =>{
    const sortBy = e.target.value;
    SearchParams.set("sortBy",sortBy);
    SetSearchParams(SearchParams);
  }

  return (
    <div className='mb-4 flex items-center justify-end'>
      <select id="sort"
      onChange={handleSortChange}
      value={SearchParams.get("sortBy") || ""}
      className='border p-2 rounded-md focus:outline-none'>
             <option value="">Default</option>
             <option value="priceAsc">Price Low To High</option>
             <option value="priceDesc">Price High To Low</option>
             <option value="popularity">popularity</option>
      </select>

    </div>
  )
}

export default SortOptions