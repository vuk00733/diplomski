import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import { useState, useEffect } from "react";
import Information from "./components/Information";

/*
-we define a CheckoutContext.js where we create the context
-in every app, and child components we use the context we import the CheckoutContext with:
import CheckoutContext from "./contexts/CheckoutContext";
-after that in every child component we destructrue the state we defined in the hoc (  const [toCheckout, setToCheckout] = useState(false);)
-const {setToCheckout, toCheckout} = useContext(CheckoutContext),mora da se structuruje po istim imenima

*/
import CheckoutContext from "./contexts/CheckoutContext";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [arrayOfProducts, setArrayOfProducts] = useState([]);
  const [toCheckout, setToCheckout] = useState(false);

  useEffect(() => {
    try {
      fetch(`http://localhost:4000/storeItems`)
        .then((response) => response.json())
        .then((data) => setArrayOfProducts(data))
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.log("Error making a GET request to load store items");
    }
  }, []);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <CheckoutContext.Provider value={{ toCheckout, setToCheckout }}>
        {toCheckout ? (
          <Information cart={cartItems} />
        ) : (
          <div>
            <Header countCartItems={cartItems.length}></Header>
            <div className="row">
              <Main products={arrayOfProducts} onAdd={onAdd}></Main>
              <Basket
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              ></Basket>
            </div>
          </div>
        )}
      </CheckoutContext.Provider>
    </div>
  );
}

export default App;
