import {
  _addProduct,
  _deleteProduct,
  _editProduct,
  _getAllproducts,
} from "./_services/productService";
import {
  addProduct,
  deleteProduct,
  editProduct,
  inisialProducts,
  modifyProduct,
  cancelEditing,
} from "./redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./App.css";

function App() {
  const products = useSelector((state) => state.products.list);
  const editing = useSelector((state) => state.products.editing);
  const dispatch = useDispatch();

  const HandleDeleteClick = (value) => {
    if (
      window.confirm("do you want to delete product : " + JSON.stringify(value))
    ) {
      _deleteProduct(value.id).then((data) => {
        if (data.deleted === 1) {
          dispatch(deleteProduct(value.id));
        }
      });
    }
  };

  const HandleEditClick = (value, index) => {
    dispatch(editProduct(value, index));
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    const f = new FormData(event.target);
    if (event.nativeEvent.submitter.innerText === "save") {
      let product = {
        name: f.get("name"),
        price: parseFloat(f.get("price")),
      };
      let id = editing.product.id;
      let index = editing.index;
      _editProduct(id, product).then((res) => {
        dispatch(modifyProduct(index, res));
        event.target.reset();
      });
    } else if (event.nativeEvent.submitter.innerText === "cancel") {
      dispatch(cancelEditing(editing));
      event.target.reset();
    } else {
      _addProduct({
        name: f.get("name"),
        price: parseFloat(f.get("price")),
      }).then((product) => {
        dispatch(addProduct(product));
        event.target.reset();
      });
    }
  };

  useEffect(() => {
    _getAllproducts().then((products) => dispatch(inisialProducts(products)));
  }, []);

  return (
    <>
      <div>
        {editing.product ? (
          <form name="edit_form" onSubmit={HandleSubmit}>
            <input
              name="name"
              placeholder="name"
              defaultValue={editing.product.name}
            />
            <input
              name="price"
              placeholder="price"
              defaultValue={editing.product.price}
            />
            <button type="submit">save</button>
            <button type="submit">cancel</button>
          </form>
        ) : (
          <form name="add_form" onSubmit={HandleSubmit}>
            <input name="name" placeholder="name" defaultValue="" />
            <input name="price" placeholder="price" defaultValue="" />
            <button type="submit">add</button>
          </form>
        )}
      </div>
      <ul>
        {Array.from(products).map((value, index) => (
          <li key={value.id}>
            {JSON.stringify(value, null, 2)}{" "}
            <button onClick={HandleDeleteClick.bind(this, value)}>
              delete
            </button>
            {!editing.product && (
              <button onClick={HandleEditClick.bind(this, value, index)}>
                edit
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
