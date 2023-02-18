import { useContext } from "react";
import Productcard from "../../components/product-card/Productcard";
import { ProductsContext } from "../../contexts/products.context";
import "./shop.scss";

const Shop = () => {
    const { products } = useContext(ProductsContext);
    
    return(
        <>
            <div className="products-container">
                {products.map((product) => (
                    <Productcard key={product.id} product={product} />
                ))
                }
            </div>
        </>
    );
};

export default Shop;