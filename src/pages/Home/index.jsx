import { Navbar } from "../../components/Navbar";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/getAllProducts";
import { ProductCard } from "../../components/ProductCard";
import { useCart } from "../../context/cart_context";
import { useWishlist } from "../../context/wishlist_context";
import { getAllCategories } from "../../api/getAllCategories";
import { getProductByCategory } from "../../utils/getProductByCategory";
import { SidebarFilters } from "../../components/SidebarFilters"; 

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { cart } = useCart();
  const { wishlist } = useWishlist();

  useEffect(() => {
    (async () => {
      let products = await getAllProducts();
      const categories = await getAllCategories();
      const updatedCategories = [...categories, { id: "1a", name: "All" }];
      setProducts(products);
      setCategories(updatedCategories);
      setFilteredProducts(products); 
    })();
  }, []);

  const onCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceFilter = (range) => {
    const [min, max] = range;
    let data = getProductByCategory(products, selectedCategory);
    data = data.filter((p) => p.price >= min && p.price <= max);
    setFilteredProducts(data);
  };

  const handleSortChange = (option) => {
    let sorted = [...filteredProducts];
    if (option === "lowToHigh") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (option === "highToLow") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sorted);
  };

  const filterByCategories = getProductByCategory(products, selectedCategory);

  useEffect(() => {
    setFilteredProducts(filterByCategories);
  }, [selectedCategory, products]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col pt-8 px-6">
        <div className="flex gap-8">
          <SidebarFilters
            onFilterChange={handlePriceFilter}
            onSortChange={handleSortChange}
          />

          <div style={{paddingTop:'2rem'}} className="flex-1 flex flex-col gap-8">
            <div className="flex gap-4 flex-wrap">
              {categories?.length > 0 &&
                categories.map((category) => (
                  <div style={{paddingInline:'1rem',paddingBlock:'0.5rem'}}
                    key={category.id}
                    className={`rounded-full font-semibold cursor-pointer ${
                      selectedCategory === category.name
                        ? "bg-green-600 text-white"
                        : "bg-green-200 text-gray-800 hover:bg-green-300"
                    }`}
                    onClick={() => onCategoryClick(category.name)}
                  >
                    {category.name}
                  </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-8 justify-center">
              {filteredProducts?.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <h2 className="col-span-full text-center text-gray-600">
                  No Products found. Please try another filter or category.
                </h2>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
