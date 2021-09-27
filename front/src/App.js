import {
  _addProduct,
  _deleteProduct,
  _getAllproducts,
} from "./_services/productService";
import { addProduct, deleteProduct, inisialProducts } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./App.css";

function App() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const HandleDeleteClick = (value) => {
    _deleteProduct(value.id).then((data) => {
      if (data.deleted === 1) {
        dispatch(deleteProduct(value.id));
      }
    });
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    const f = new FormData(event.target);
    _addProduct({
      name: f.get("name"),
      price: parseFloat(f.get("price")),
    }).then((product) => {
      dispatch(addProduct(product));
      event.target.reset();
    });
  };

  useEffect(() => {
    _getAllproducts().then((products) => dispatch(inisialProducts(products)));
  }, []);

  return (
    <>
      <div>
        <form onSubmit={HandleSubmit}>
          <input name="name" placeholder="name" />
          <input name="price" placeholder="price" />
          <button type="submit">add</button>
        </form>
      </div>
      <ul>
        {Array.from(products).map((value) => (
          <li key={value.id}>
            {JSON.stringify(value, null, 2)}{" "}
            <button onClick={HandleDeleteClick.bind(this, value)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
