import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

function ProductGrid() {
    const Products = useSelector((state) => state.product.filteredItems);
    return (
        <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-7'>   
            {
                Products.map((product) => {
                    return (
                       <ProductCard key={product.id} product={product}/>
                    )
                })
            }
            {
                Products.length == 0 && <p className='text-center font-semibold'>No product found !</p>
            }
        </div>
    );
}

export default ProductGrid;