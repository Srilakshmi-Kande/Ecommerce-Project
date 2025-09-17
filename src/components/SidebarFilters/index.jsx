import { useState } from "react";

export const SidebarFilters = ({ onFilterChange, onSortChange }) => {
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortOption, setSortOption] = useState("");

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const updatedRange =
      name === "min"
        ? [Number(value), priceRange[1]]
        : [priceRange[0], Number(value)];

    setPriceRange(updatedRange);
    onFilterChange(updatedRange);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    onSortChange(value);
  };

  return (
    <aside style={{padding:'1rem'}} className="w-72 h-screen bg-white shadow-xl border-r border-gray-200 flex flex-col space-y-8 sticky top-0">
      <h2 className="text-2xl font-bold text-gray-800 border-b" style={{paddingBottom: '1rem'}}>
        Filters
      </h2>

      <div className="space-y-4" style={{paddingBlock:'2rem'}}>
        <h3 className="text-lg font-semibold text-gray-700" style={{paddingBlock:'0.5rem'}}>Price Range</h3>
        <div className="flex items-center gap-3">
          <input style={{padding:'3px'}}
            type="number"
            name="min"
            value={priceRange[0]}
            onChange={handlePriceChange}
            className="w-24 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 outline-none"
            min="0"
          />
          <span className="text-gray-500">—</span>
          <input style={{padding:'3px'}}
            type="number"
            name="max"
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="w-24 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 outline-none"
            min="0"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700" style={{paddingBlock:'0.5rem'}}>Sort By</h3>
        <select style={{padding:'0.5rem'}}
          value={sortOption}
          onChange={handleSortChange}
          className="w-full border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 outline-none"
        >
          <option value="">Select</option>
          <option value="lowToHigh">Price: Low → High</option>
          <option value="highToLow">Price: High → Low</option>
        </select>
      </div>
    </aside>
  );
};
