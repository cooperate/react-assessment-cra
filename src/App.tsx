import { useReducer } from "react";
import "./App.css";
import { Brands } from "./components/Brands/Brands";
import CreateBrand from "./components/Brands/CreateBrand/CreateBrand";
import CreateOrder from "./components/Orders/CreateOrder/CreateOrder";
import { initialData } from "./constants";
import { BrandsContext, BrandsDispatchContext } from "./contexts";
import { brandReducer } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(brandReducer, initialData);
  
  return (
    <div className="App">
      <BrandsContext.Provider value={state}>
        <BrandsDispatchContext.Provider value={dispatch}>
          <h1>Brand Orders</h1>
          <Brands />
          <CreateBrand />
          <CreateOrder />
        </BrandsDispatchContext.Provider>
      </BrandsContext.Provider>
    </div>
  );
}

export default App;
