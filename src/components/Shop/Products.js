import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id:"prod1",
    title : "FIRST PRODUT",
    description : "This is the first product",
    price : 6
  },
  {
    id:"prod2",
    title : "SECOND PRODUT",
    description : "This is the second product",
    price : 9
  },
  {
    id:"prod3",
    title : "THIRD PRODUT",
    description : "This is the third product",
    price : 5
  }
]

const Products = (props) => {

  

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((prod) => (
            <ProductItem
            key = {prod.id}
            id = {prod.id}
            title={prod.title}
            price={prod.price}
            description={prod.description}
          />
        ))}
      
      </ul>
    </section>
  );
};

export default Products;
