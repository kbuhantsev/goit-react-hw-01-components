import Product from './Product';
import productsList from '../products.json';

export default function ProductsList() {
  return (
    <div>
      <h1>Best selling products</h1>
      {productsList.map(item => (
        <Product
          key={item.name}
          imgUrl={item.imgUrl}
          name={item.name}
          price={item.price}
        />
      ))}
      ;
    </div>
  );
}
