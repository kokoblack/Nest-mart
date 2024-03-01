import React from 'react'
import ProductCard from '../../components/home/ProductCard'

const PopularProduct = () => {
    const product = ['All', 'Fruits', 'Vegetables', 'Meats', 'Pet Foods', 'Coffes & Teas', 'Milks & Dairies']

  return (
    <section>
        <div>
            <h3>Popular Products</h3>
            <nav>
                <ul>
                    {product.map((data, index) => (
                        <li key={index}>{data}</li>
                    ))}
                </ul>
            </nav>
        </div>

        <div>
            <ProductCard/>
        </div>
    </section>
  )
}

export default PopularProduct