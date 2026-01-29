import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [SearchParams, SetSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, Setfilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minprice: 0,
    maxprice: 1000,
  });

  const [pricerange, Setpricerange] = useState([0, 1000]);
  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const material = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyster",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];

  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];

  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...SearchParams]);

    Setfilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [], // ✅ FIXED
      minprice: Number(params.minprice) || 0,
      maxprice: Number(params.maxprice) || 1000,
    });

    Setpricerange([0, Number(params.maxprice) || 1000]);
  }, [SearchParams]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = (newFilters[name] || []).filter(
          (item) => item !== value
        );
      }
    } else {
      // for radio, select, input
      newFilters[name] = value;
    }

    Setfilters(newFilters);
    updateURLparams(newFilters);
  };

  const updateURLparams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });
    SetSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    Setpricerange([0], newPrice);
    const newFilters = { ...filters, minprice: 0, maxprice: newPrice };
    Setfilters(filters);
    updateURLparams(newFilters);
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>
      {/* categoty filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => {
          return (
            <div key={category} className="flex items-center mb-1">
              <input
                type="radio"
                name="category"
                value={category}
                checked={filters.category === category}
                onChange={handleFilterChange}
                className="mr-2 h-4 w-4 text-blue-500
                     focus:ring-blue-400 border-gray-300"
              />
              <span className="text-gray-700">{category}</span>
            </div>
          );
        })}
      </div>

      {/* gender filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((gender) => {
          return (
            <div key={gender} className="flex items-center mb-1">
              <input
                type="radio"
                name="gender"
                value={gender}
                checked={filters.gender === gender}
                onChange={handleFilterChange}
                className="mr-2 h-4 w-4 text-blue-500
                     focus:ring-blue-400 border-gray-300"
              />
              <span className="text-gray-700">{gender}</span>
            </div>
          );
        })}
      </div>

      {/* color filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              onClick={handleFilterChange}
              className={`w-8 h-8
                        rounded-full border border-gray-300 cursor-pointer
                        transition hover:scale-105 ${
                          filters.color === color ? "ring-2 ring-blue-500" : ""
                        }`}
              style={{ backgroundColor: color.toLowerCase() }}
            ></button>
          ))}
        </div>
      </div>
      {/* size filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>

        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={size}
              checked={filters.size?.includes(size) || false}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* material filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {material.map((Material) => (
          <div key={Material} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="material"
              value={Material}
              checked={filters.material.includes(Material)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 
                        focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{Material}</span>
          </div>
        ))}
      </div>
      {/* Brand filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((Brand) => (
          <div key={Brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={Brand}
              checked={filters.brand.includes(Brand)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 
                        focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{Brand}</span>
          </div>
        ))}
      </div>

      {/* price range */}
      <div className="mb-8">
        <label className="block text-gray-800 font-medium  mb-2">
          Price Range
        </label>
        <input
          type="range"
          name="priceRange"
          min={0}
          max={1000}
          value={pricerange[1]}
          onChange={handlePriceChange}
          className="w-full h-2 border-gray-300 rounded-lg cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>₹0</span>
          <span>₹{pricerange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
