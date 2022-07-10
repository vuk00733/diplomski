import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;
  console.log('====================================');
  console.log("Fecthed items:",products);
  console.log('====================================');
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
