import { useParams  } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../contexts/CategoriesContext";
import ProductCard from "../components/product-card";
import "../resources/category.scss";
function Category() {
    const { category } = useParams();
    const {categoriesMap}= useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
       setProducts(categoriesMap[category]);
    }, [category, categoriesMap])
    
  return (
    <div className="shop">
        {
            products && products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))
        }
    </div>
  )
}

export default Category